import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, GraduationCap, Layers } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COURSES } from '@/data/courses';

const Courses = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Economics Courses | Econ Nexus</title>
      <meta name="description" content="Structured economics courses with interactive diagrams, chapter indexes and self-checks." />
    </Helmet>
    <Header />
    <main className="pb-12">
      <section className="border-b border-primary/15 bg-card/35">
        <div className="mx-auto w-[95%] max-w-[1200px] py-6 sm:py-8">
          <Link to="/" className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            <GraduationCap className="h-4 w-4" /> Econ Nexus courses
          </div>
          <h1 className="font-serif text-3xl font-bold uppercase text-silver-bright sm:text-4xl">Courses</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Complete courses, organised into modules and chapters, that you can study inside the app.
          </p>
        </div>
      </section>
      <section className="mx-auto grid w-[95%] max-w-[1200px] gap-4 py-8 md:grid-cols-2">
        {COURSES.map((c) => (
          <Link
            key={c.slug}
            to={`/courses/${c.slug}`}
            className="group rounded-lg border border-primary/20 bg-card/50 p-5 transition-colors hover:border-primary/60 hover:bg-card/80"
          >
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
              <Layers className="h-4 w-4" /> {new Set(c.lessons.map((l) => l.module)).size} modules · {c.lessons.length} lessons
            </div>
            <h2 className="font-serif text-2xl font-bold uppercase text-silver-bright">{c.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Start course <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>
    </main>
    <Footer />
  </div>
);

export default Courses;
