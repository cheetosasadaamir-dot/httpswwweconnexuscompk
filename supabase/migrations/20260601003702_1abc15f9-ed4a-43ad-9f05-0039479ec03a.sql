
CREATE TABLE public.assignment_usage (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX assignment_usage_user_created_idx ON public.assignment_usage (user_id, created_at DESC);

GRANT SELECT, INSERT ON public.assignment_usage TO authenticated;
GRANT ALL ON public.assignment_usage TO service_role;

ALTER TABLE public.assignment_usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own assignment usage"
  ON public.assignment_usage FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own assignment usage"
  ON public.assignment_usage FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
