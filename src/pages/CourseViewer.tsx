import { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Library,
  Maximize2,
  Minimize2,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  X,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { COURSES } from '@/data/courses';
import { cn } from '@/lib/utils';


const CourseViewer = () => {
  const { slug } = useParams();
  const course = COURSES.find((c) => c.slug === slug);
  const DIAGRAM_ENTRIES = (course?.lessons ?? []).map((l, i) => ({ ...l, number: i + 1, category: l.module }));
  const DIAGRAM_GUIDE_FILE = course?.file ?? '';
  const modules = ['All', ...Array.from(new Set(DIAGRAM_ENTRIES.map((l) => l.module)))];
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(course?.lessons[0]?.id ?? '');
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const viewerRef = useRef<HTMLElement>(null);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return DIAGRAM_ENTRIES.filter((diagram) => {
      const matchesFilter = filter === 'All' || diagram.category === filter;
      const matchesQuery =
        !normalizedQuery ||
        diagram.title.toLowerCase().includes(normalizedQuery) ||
        diagram.module.toLowerCase().includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query, slug]);

  const activeIndex = DIAGRAM_ENTRIES.findIndex((diagram) => diagram.id === active);
  const activeDiagram = DIAGRAM_ENTRIES[activeIndex] ?? DIAGRAM_ENTRIES[0];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && expanded) setExpanded(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [expanded]);

  const selectDiagram = (id: string) => {
    setActive(id);
    setLibraryOpen(false);
    const frame = frameRef.current;
    if (frame) frame.src = `${DIAGRAM_GUIDE_FILE}#${id}`;
    if (window.innerWidth < 1280) {
      requestAnimationFrame(() => viewerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  };

  const move = (direction: -1 | 1) => {
    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), DIAGRAM_ENTRIES.length - 1);
    const next = DIAGRAM_ENTRIES[nextIndex];
    if (next) selectDiagram(next.id);
  };

  if (!course) return <Navigate to="/courses" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`${course.title} Course | Econ Nexus`}</title>
        <meta
          name="description"
          content={course.description}
        />
      </Helmet>

      {!expanded && <Header />}

      <main className={cn('relative', expanded ? 'fixed inset-0 z-[10000] bg-background p-2 sm:p-4' : 'pb-12')}>
        {!expanded && (
          <section className="border-b border-primary/15 bg-card/35">
            <div className="mx-auto w-[95%] max-w-[1440px] py-5 sm:py-7">
              <Link
                to="/courses"
                className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" /> All courses
              </Link>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    <Library className="h-4 w-4" /> Econ Nexus course
                  </div>
                  <h1 className="max-w-3xl font-serif text-3xl font-bold uppercase leading-tight text-silver-bright sm:text-4xl">
                    {course.title}
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {course.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 border-l-2 border-secondary pl-4">
                  <strong className="font-serif text-3xl text-silver-bright">{DIAGRAM_ENTRIES.length}</strong>
                  <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Course<br />lessons</span>
                </div>
              </div>
            </div>
          </section>
        )}

        <section
          ref={viewerRef}
          className={cn(
            'mx-auto grid w-full min-w-0 bg-background',
             expanded
               ? 'h-full max-w-none grid-cols-1 overflow-hidden rounded-md border border-primary/20'
               : 'max-w-[1440px] xl:h-[calc(100dvh-5rem)] xl:min-h-[720px] xl:grid-cols-[340px_minmax(0,1fr)] xl:border-x xl:border-primary/10',
          )}
        >
          {!expanded && (
            <aside
              className={cn(
                 'border-primary/15 bg-card/45 xl:flex xl:min-h-0 xl:flex-col xl:border-r',
                 libraryOpen ? 'block' : 'hidden xl:flex',
              )}
              aria-label="Course index"
            >
              <div className="border-b border-primary/15 p-3 sm:p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={`Search ${DIAGRAM_ENTRIES.length} lessons`}
                    aria-label="Search lessons"
                    className="h-11 w-full rounded-md border border-primary/20 bg-background/65 pl-9 pr-10 text-base text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {query && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuery('')}
                      aria-label="Clear search"
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      <X />
                    </Button>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-1 rounded-md border border-primary/15 bg-background/50 p-1">
                  {modules.map((item) => (
                    <Button
                      key={item}
                      type="button"
                      variant="ghost"
                      onClick={() => setFilter(item)}
                      className={cn(
                        'h-8 px-2 text-[11px] uppercase tracking-normal',
                        filter === item ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : 'text-muted-foreground',
                      )}
                    >
                      {item === 'All' ? 'All' : item.split(':')[0]}
                    </Button>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">{results.length} lessons found</p>
              </div>

               <div className="max-h-[56dvh] flex-1 overflow-y-auto overscroll-contain p-2 xl:max-h-none">
                {results.map((diagram) => (
                  <Button
                    key={diagram.id}
                    type="button"
                    variant="ghost"
                    onClick={() => selectDiagram(diagram.id)}
                    className={cn(
                      'mb-1 h-auto min-h-14 w-full justify-start whitespace-normal rounded-md px-3 py-2.5 text-left',
                      active === diagram.id
                        ? 'border border-primary/60 bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                        : 'border border-transparent text-muted-foreground hover:border-primary/20 hover:bg-primary/10 hover:text-foreground',
                    )}
                    aria-current={active === diagram.id ? 'true' : undefined}
                  >
                    <span className={cn('w-8 shrink-0 font-mono text-[10px]', active === diagram.id ? 'text-primary-foreground/75' : 'text-primary')}>
                      {String(diagram.number).padStart(2, '0')}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold leading-snug">{diagram.title}</span>
                      <span className={cn('mt-1 block text-[9px] uppercase tracking-[0.1em]', active === diagram.id ? 'text-primary-foreground/70' : 'text-muted-foreground')}>
                        {diagram.category}
                      </span>
                    </span>
                  </Button>
                ))}
                {results.length === 0 && (
                  <p className="px-4 py-10 text-center text-sm text-muted-foreground">No matching lessons found.</p>
                )}
              </div>
            </aside>
          )}

          <div className="flex min-h-0 min-w-0 flex-col bg-space-deep">
            <div className="flex min-h-16 items-center gap-2 border-b border-primary/15 bg-card/70 px-3 py-2 sm:px-4">
              {!expanded && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setLibraryOpen((value) => !value)}
                  aria-label={libraryOpen ? 'Close course index' : 'Open course index'}
                   className="shrink-0 xl:hidden"
                >
                  {libraryOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
                </Button>
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-silver-bright">{activeDiagram?.title}</p>
                <p className="text-[10px] uppercase tracking-[0.12em] text-primary">
                  Lesson {activeDiagram?.number} · {activeDiagram?.category}
                </p>
              </div>
              <Button type="button" variant="outline" size="icon" onClick={() => move(-1)} disabled={activeIndex <= 0} aria-label="Previous lesson">
                <ChevronLeft />
              </Button>
              <Button type="button" variant="outline" size="icon" onClick={() => move(1)} disabled={activeIndex >= DIAGRAM_ENTRIES.length - 1} aria-label="Next lesson">
                <ChevronRight />
              </Button>
              <Button type="button" variant="outline" size="icon" onClick={() => setExpanded((value) => !value)} aria-label={expanded ? 'Exit focus view' : 'Open focus view'}>
                {expanded ? <Minimize2 /> : <Maximize2 />}
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href={`${DIAGRAM_GUIDE_FILE}#${active}`} target="_blank" rel="noopener noreferrer" aria-label="Open lesson in new tab">
                  <ExternalLink />
                </a>
              </Button>
            </div>

             <div className="min-h-[75dvh] flex-1 bg-background p-1.5 sm:p-3 xl:min-h-0">
              <iframe
                ref={frameRef}
                src={`${DIAGRAM_GUIDE_FILE}#${active}`}
                title={`${activeDiagram?.title ?? 'Course lesson'} — ${course.title}`}
                loading="eager"
                 className="h-full min-h-[73dvh] w-full rounded-md border border-primary/15 bg-background xl:min-h-0"
              />
            </div>
          </div>
        </section>
      </main>

      {!expanded && <Footer />}
    </div>
  );
};

export default CourseViewer;