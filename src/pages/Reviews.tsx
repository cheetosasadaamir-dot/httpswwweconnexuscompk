import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  review_text: string;
  created_at: string;
}

const StarSelector = ({ rating, onRate, interactive = false, size = 'md' }: { 
  rating: number; onRate?: (r: number) => void; interactive?: boolean; size?: 'sm' | 'md' 
}) => {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${sizeClass} transition-all duration-200 ${interactive ? 'cursor-pointer hover:scale-110' : ''}`}
          fill={i <= rating ? '#3A8DFF' : 'transparent'}
          stroke={i <= rating ? '#3A8DFF' : 'rgba(255,255,255,0.2)'}
          strokeWidth={1.5}
          onClick={() => interactive && onRate?.(i)}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div 
    className="p-6 rounded-xl animate-fade-in"
    style={{ 
      fontFamily: "'Inter', 'Geist', sans-serif",
      background: 'rgba(0, 20, 45, 0.5)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(58, 141, 255, 0.1)',
    }}
  >
    <Quote className="w-5 h-5 mb-3" style={{ color: 'rgba(58, 141, 255, 0.3)' }} />
    <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(226, 232, 240, 0.85)' }}>
      "{review.review_text}"
    </p>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold" style={{ color: '#E2E8F0' }}>{review.reviewer_name}</p>
        <p className="text-xs" style={{ color: 'rgba(148, 163, 184, 0.6)' }}>
          {new Date(review.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
      <StarSelector rating={review.rating} size="sm" />
    </div>
  </div>
);

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
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
      .limit(20);
    if (data) setReviews(data as Review[]);
  }, []);

  useEffect(() => { fetchReviews(); }, [fetchReviews]);

  const handleSubmit = async => {
    if (!name.trim() || !text.trim() || rating === 0) {
      toast({ title: 'Please fill all fields and select a rating.', variant: 'destructive' });
      return;
    }
    if (text.length > 300) {
      toast({ title: 'Review must be 300 characters or less.', variant: 'destructive' });
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
      toast({ title: 'Failed to submit. Please try again.', variant: 'destructive' });
      return;
    }
    toast({ title: 'Testimonial submitted successfully.' });
    setName(''); setRating(0); setText('');
    fetchReviews();
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #000B1A 0%, #001E3C 40%, #000B1A 100%)' }}>
      <Header />
      <main className="w-[92%] max-w-[1100px] mx-auto pt-24 pb-20 px-4">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3 uppercase"
            style={{ 
              fontFamily: "'Bodoni Moda', 'Georgia', serif", 
              color: '#3A8DFF',
              textShadow: '0 0 12px rgba(58, 141, 255, 0.4)',
              letterSpacing: '0.1em',
            }}
          >
            Student Reviews
          </h1>
          <p className="text-sm max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(148, 163, 184, 0.7)' }}>
            What our learners say about the AI Academic Personas.
          </p>
          <div className="w-12 h-px mx-auto mt-6" style={{ background: 'rgba(58, 141, 255, 0.3)' }} />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Reviews Display */}
          <div className="lg:col-span-3 space-y-5">
            <h2 
              className="text-xs font-semibold uppercase tracking-widest mb-4" 
              style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(58, 141, 255, 0.5)' }}
            >
              Recent Testimonials
            </h2>
            {reviews.length === 0 ? (
              <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(148, 163, 184, 0.5)' }}>
                No reviews yet. Be the first to share your experience.
              </p>
            ) : (
              reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            )}
          </div>

          {/* Submission Form */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div 
                className="p-8 rounded-2xl"
                style={{ 
                  fontFamily: "'Inter', 'Geist', sans-serif",
                  background: 'rgba(0, 20, 45, 0.6)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(58, 141, 255, 0.15)',
                }}
              >
                <h2 
                  className="text-xl font-bold mb-1 tracking-tight uppercase"
                  style={{ 
                    fontFamily: "'Bodoni Moda', 'Georgia', serif", 
                    color: '#3A8DFF',
                    letterSpacing: '0.05em',
                  }}
                >
                  Leave a Review
                </h2>
                <p className="text-xs mb-6" style={{ color: 'rgba(148, 163, 184, 0.5)' }}>Your feedback shapes the platform.</p>

                <div className="space-y-5">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider mb-2 block" style={{ color: 'rgba(148, 163, 184, 0.6)' }}>Rating</label>
                    <StarSelector rating={rating} onRate={setRating} interactive size="md" />
                  </div>

                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider mb-2 block" style={{ color: 'rgba(148, 163, 184, 0.6)' }}>Your Name</label>
                    <Input
                      placeholder="e.g. Sarah K."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={50}
                      className="text-sm rounded-lg focus:ring-0"
                      style={{
                        background: 'rgba(0, 15, 35, 0.6)',
                        border: '1px solid rgba(58, 141, 255, 0.15)',
                        color: '#E2E8F0',
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider mb-2 block" style={{ color: 'rgba(148, 163, 184, 0.6)' }}>Your Review</label>
                    <Textarea
                      placeholder="Share your experience with the AI Academic Personas..."
                      value={text}
                      onChange={(e) => setText(e.target.value.slice(0, 300))}
                      maxLength={300}
                      rows={4}
                      className="text-sm rounded-lg resize-none min-h-[100px] focus:ring-0"
                      style={{
                        background: 'rgba(0, 15, 35, 0.6)',
                        border: '1px solid rgba(58, 141, 255, 0.15)',
                        color: '#E2E8F0',
                      }}
                    />
                    <span className="text-[10px] mt-1 block text-right" style={{ color: 'rgba(148, 163, 184, 0.4)' }}>{text.length}/300</span>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full rounded-lg text-sm font-semibold tracking-wide"
                    style={{
                      background: 'linear-gradient(135deg, #3A8DFF, #1a6ddf)',
                      color: '#fff',
                      height: '44px',
                      border: 'none',
                    }}
                  >
                    {submitting ? 'Submitting...' : 'Submit Testimonial'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
