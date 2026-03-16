
CREATE TABLE public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reviewer_name text NOT NULL,
  rating integer NOT NULL,
  review_text text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Anyone can read reviews
CREATE POLICY "Public can read reviews" ON public.reviews
  FOR SELECT TO public USING (true);

-- Anyone can submit a review
CREATE POLICY "Anyone can submit reviews" ON public.reviews
  FOR INSERT TO public WITH CHECK (rating >= 1 AND rating <= 5 AND char_length(review_text) <= 150);
