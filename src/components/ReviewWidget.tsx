import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  review_text: string;
  created_at: string;
}

const StarRating = ({ rating, onRate, interactive = false }: { rating: number; onRate?: (r: number) => void; interactive?: boolean }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 transition-colors ${interactive ? 'cursor-pointer' : ''}`}
        fill={i <= rating ? 'url(#chrome-gradient)' : 'transparent'}
        stroke={i <= rating ? '#E2E8F0' : 'rgba(255,255,255,0.2)'}
        strokeWidth={1.5}
        onClick={() => interactive && onRate?.(i)}
      />
    ))}
    <svg width="0" height="0" className="absolute">
      <defs>
        <linearGradient id="chrome-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="50%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const ReviewWidget = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const fetchReviews = useCallback(async => {
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .gte('rating', 4)
      .order('created_at', { ascending: false })
      .limit(10);
    if (data) setReviews(data as Review[]);
  }, []);

  useEffect(() => { fetchReviews(); }, [fetchReviews]);

  // Rotate reviews every 5s with opacity fade
  useEffect(() => {
    if (reviews.length <= 1) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
        setFading(false);
      }, 400);
    }, 5000);
    return => clearInterval(interval);
  }, [reviews.length]);

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
      toast({ title: 'Failed to submit review', variant: 'destructive' });
      return;
    }
    toast({ title: 'Review submitted successfully!' });
    setName(''); setRating(0); setText(''); setOpen(false);
    fetchReviews();
  };

  const current = reviews[currentIndex];

  return (
    <div
      className="w-full max-w-2xl mx-auto mt-6 mb-2 px-5 py-4 rounded-xl flex items-center justify-between gap-4"
      style={{
        background: 'rgba(0, 20, 45, 0.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '0.5px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Review display */}
      <div className="flex-1 min-w-0 overflow-hidden">
        {current ? (
          <div
            className="transition-opacity duration-400"
            style={{ opacity: fading ? 0 : 1, fontFamily: "'Inter', 'Geist', sans-serif" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <StarRating rating={current.rating} />
              <span className="text-xs text-slate-400 font-medium truncate">{current.reviewer_name}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed line-clamp-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              "{current.review_text}"
            </p>
          </div>
        ) : (
          <p className="text-xs text-slate-500" style={{ fontFamily: "'Inter', sans-serif" }}>No reviews yet. Be the first!</p>
        )}
      </div>

      {/* Submit button */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="shrink-0 text-xs px-3 py-1.5 rounded-lg border transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(226, 232, 240, 0.7)',
              border: '0.5px solid rgba(255, 255, 255, 0.15)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = '#E2E8F0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'rgba(226, 232, 240, 0.7)';
            }}
          >
            + Write a Review
          </button>
        </DialogTrigger>
        <DialogContent
          className="max-w-sm border-0"
          style={{
            background: 'rgba(0, 20, 45, 0.95)',
            backdropFilter: 'blur(16px)',
            border: '0.5px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif", color: '#E2E8F0' }}>
              Write a Review
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <label className="text-xs text-slate-400 mb-1 block" style={{ fontFamily: "'Inter', sans-serif" }}>Rating</label>
              <StarRating rating={rating} onRate={setRating} interactive />
            </div>
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={50}
              className="bg-transparent border-white/10 text-slate-200 text-sm placeholder:text-slate-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <div>
              <Textarea
                placeholder="Your review (max 150 characters)"
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, 150))}
                maxLength={150}
                rows={3}
                className="bg-transparent border-white/10 text-slate-200 text-sm placeholder:text-slate-500 min-h-[70px] resize-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <span className="text-[10px] text-slate-500 mt-1 block text-right">{text.length}/150</span>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full text-sm"
              style={{
                background: 'linear-gradient(135deg, #E2E8F0, #CBD5E1)',
                color: '#001E3C',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              {submitting ? 'Submitting...' : 'Submit Review'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReviewWidget;
