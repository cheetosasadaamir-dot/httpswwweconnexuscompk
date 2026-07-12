import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  review_text: string;
  created_at: string;
}

const FloatingReviewsBox = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [inputExpanded, setInputExpanded] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  const { toast } = useToast();

  const fetchReviews = useCallback(async => {
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .gte('rating', 4)
      .order('created_at', { ascending: false })
      .limit(20);
    if (data) setReviews(data as Review[]);
  }, []);

  useEffect(() => { fetchReviews(); }, [fetchReviews]);


  const avgRating = reviews.length > 0
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : '5.0';

  const handleSubmit = async => {
    if (!name.trim() || !text.trim() || rating === 0) {
      toast({ title: 'Please fill all fields', variant: 'destructive' });
      return;
    }
    if (text.length > 150) {
      toast({ title: 'Review must be 150 characters or less', variant: 'destructive' });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from('reviews').insert({
      reviewer_name: name.trim(),
      rating,
      review_text: text.trim(),
    });
    setSubmitting(false);
    if (error) {
      toast({ title: 'Failed to submit', variant: 'destructive' });
      return;
    }
    toast({ title: 'Review submitted!' });
    setName(''); setRating(0); setText(''); setInputExpanded(false);
    fetchReviews();
  };

  const visibleCount = 3;
  const maxScroll = Math.max(0, reviews.length - visibleCount);

  return (
    <>
      {/* Floating Trigger - completely static, no animations */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-16 right-4 z-[9998] cursor-pointer hover:shadow-[0_0_30px_rgba(58,141,255,0.3)] transition-shadow duration-300"
        style={{
          background: 'rgba(0, 20, 45, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(58, 141, 255, 0.15)',
          borderRadius: '16px',
          padding: '14px 18px',
        }}
      >
        <div className="flex items-center gap-3">
          <Star className="w-5 h-5" fill="#FFD700" stroke="#FFD700" />
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
              {avgRating} <span className="text-white/50">/ 5</span>
            </span>
            <span className="text-[10px] text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
              {reviews.length} reviews
            </span>
          </div>
        </div>
      </button>

      {/* Full Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'opacity', transform: 'translate3d(0,0,0)' }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', background: 'rgba(0,10,25,0.7)' }}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-[95%] max-w-2xl mx-4"
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'rgba(0, 15, 35, 0.92)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(58, 141, 255, 0.12)',
                borderRadius: '20px',
                padding: '28px',
                willChange: 'transform, opacity',
                transform: 'translate3d(0,0,0)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h3
                  className="text-lg font-bold text-white/90 mb-1"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: '-0.02em' }}
                >
                  Student Reviews
                </h3>
                <p className="text-xs text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
                  What our community says
                </p>
              </div>

              {/* Carousel */}
              <div className="relative mb-6">
                {scrollIndex > 0 && (
                  <button
                    onClick={() => setScrollIndex(Math.max(0, scrollIndex - 1))}
                    className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    style={{ background: 'rgba(0,20,45,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}
                {scrollIndex < maxScroll && (
                  <button
                    onClick={() => setScrollIndex(Math.min(maxScroll, scrollIndex + 1))}
                    className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    style={{ background: 'rgba(0,20,45,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}

                <div className="overflow-hidden rounded-xl">
                  <motion.div
                    className="flex gap-3"
                    animate={{ x: -scrollIndex * (100 / visibleCount + 1.5) + '%' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
                  >
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="flex-shrink-0"
                        style={{
                          width: `calc(${100 / visibleCount}% - 8px)`,
                          background: 'rgba(0, 10, 25, 0.8)',
                          border: '1px solid rgba(58, 141, 255, 0.08)',
                          borderRadius: '14px',
                          padding: '16px',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
                        }}
                      >
                        <div className="flex gap-0.5 mb-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              className="w-3 h-3"
                              fill={i <= review.rating ? '#FFD700' : 'transparent'}
                              stroke={i <= review.rating ? '#FFD700' : 'rgba(255,255,255,0.15)'}
                              strokeWidth={1.5}
                            />
                          ))}
                        </div>
                        <p className="text-[11px] text-white/70 leading-relaxed mb-2 line-clamp-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                          "{review.review_text}"
                        </p>
                        <p className="text-[10px] text-white/35 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          — {review.reviewer_name}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Input Section */}
              <div
                className="rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  background: 'rgba(0, 10, 25, 0.6)',
                  border: '1px solid rgba(58, 141, 255, 0.08)',
                  willChange: 'max-height',
                }}
              >
                {!inputExpanded ? (
                  <button
                    onClick={() => setInputExpanded(true)}
                    className="w-full px-4 py-3 text-left text-xs text-white/40 hover:text-white/60 transition-colors cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif", background: 'transparent', border: 'none' }}
                  >
                    + Write a review...
                  </button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="p-4 space-y-3"
                  >
                    {/* Star selector */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <button key={i} onClick={() => setRating(i)} className="cursor-pointer bg-transparent border-none p-0">
                          <Star
                            className="w-5 h-5 transition-all duration-200 ease-in-out"
                            fill={i <= rating ? '#FFD700' : 'transparent'}
                            stroke={i <= rating ? '#FFD700' : 'rgba(255,255,255,0.2)'}
                            strokeWidth={1.5}
                            style={{ willChange: 'transform', transform: i <= rating ? 'scale(1.15) translate3d(0,0,0)' : 'scale(1) translate3d(0,0,0)' }}
                          />
                        </button>
                      ))}
                    </div>

                    <input
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={50}
                      className="w-full bg-transparent text-sm text-white/90 placeholder:text-white/25 outline-none py-2 border-b border-white/10 focus:border-[rgba(58,141,255,0.3)] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />

                    <textarea
                      placeholder="Your review (max 150 chars)"
                      value={text}
                      onChange={(e) => setText(e.target.value.slice(0, 150))}
                      maxLength={150}
                      rows={2}
                      className="w-full bg-transparent text-sm text-white/90 placeholder:text-white/25 outline-none py-2 border-b border-white/10 focus:border-[rgba(58,141,255,0.3)] transition-colors resize-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/30" style={{ fontFamily: "'Inter', sans-serif" }}>{text.length}/150</span>
                      <motion.button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="relative px-5 py-2 rounded-lg text-xs font-semibold cursor-pointer overflow-hidden"
                        style={{
                          background: 'rgba(58, 141, 255, 0.15)',
                          color: '#3A8DFF',
                          border: '1px solid rgba(58, 141, 255, 0.3)',
                          fontFamily: "'Inter', sans-serif",
                        }}
                        whileHover={{ boxShadow: '0 0 20px rgba(58, 141, 255, 0.3), inset 0 0 20px rgba(58, 141, 255, 0.1)' }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      >
                        {/* Liquid border animation */}
                        <motion.div
                          className="absolute inset-0 rounded-lg pointer-events-none"
                          style={{
                            border: '1px solid transparent',
                            background: 'linear-gradient(90deg, rgba(58,141,255,0), rgba(58,141,255,0.5), rgba(58,141,255,0)) border-box',
                            mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            maskComposite: 'exclude',
                            WebkitMaskComposite: 'xor',
                          }}
                          animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                        {submitting ? 'Sending...' : 'Submit'}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingReviewsBox;
