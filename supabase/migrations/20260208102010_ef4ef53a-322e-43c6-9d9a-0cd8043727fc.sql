-- ================================================================
-- ECONEXUS ZERO-TRUST DATABASE ARCHITECTURE
-- Tables with IMMEDIATE RLS and Public Read + Admin Write policies
-- ================================================================

-- 1. Create app_role enum for admin management
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- 2. Create user_roles table (required for secure admin checks)
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS IMMEDIATELY
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Users can view their own roles
CREATE POLICY "Users can view own roles"
    ON public.user_roles FOR SELECT
    USING (auth.uid() = user_id);

-- 3. Create security definer function for role checks (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- ================================================================
-- NOTES TABLE - Educational content
-- ================================================================
CREATE TABLE public.notes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    content text,
    chapter_id text NOT NULL,
    level text NOT NULL CHECK (level IN ('AS', 'A2')),
    order_index integer NOT NULL DEFAULT 0,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS IMMEDIATELY
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;

-- Public read access (educational content is public)
CREATE POLICY "Public can read notes"
    ON public.notes FOR SELECT
    USING (true);

-- Admin-only write access
CREATE POLICY "Admins can insert notes"
    ON public.notes FOR INSERT
    TO authenticated
    WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update notes"
    ON public.notes FOR UPDATE
    TO authenticated
    USING (public.has_role(auth.uid(), 'admin'))
    WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete notes"
    ON public.notes FOR DELETE
    TO authenticated
    USING (public.has_role(auth.uid(), 'admin'));

-- ================================================================
-- CHAPTERS TABLE - Syllabus structure
-- ================================================================
CREATE TABLE public.chapters (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    slug text NOT NULL UNIQUE,
    description text,
    level text NOT NULL CHECK (level IN ('AS', 'A2')),
    subject text NOT NULL CHECK (subject IN ('Microeconomics', 'Macroeconomics')),
    order_index integer NOT NULL DEFAULT 0,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS IMMEDIATELY
ALTER TABLE public.chapters ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public can read chapters"
    ON public.chapters FOR SELECT
    USING (true);

-- Admin-only write access
CREATE POLICY "Admins can insert chapters"
    ON public.chapters FOR INSERT
    TO authenticated
    WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update chapters"
    ON public.chapters FOR UPDATE
    TO authenticated
    USING (public.has_role(auth.uid(), 'admin'))
    WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete chapters"
    ON public.chapters FOR DELETE
    TO authenticated
    USING (public.has_role(auth.uid(), 'admin'));

-- ================================================================
-- MCQ_VAULT TABLE - Exam intelligence repository
-- ================================================================
CREATE TABLE public.mcq_vault (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    paper_code text NOT NULL,
    year integer NOT NULL CHECK (year >= 2020 AND year <= 2030),
    session text NOT NULL CHECK (session IN ('May/June', 'Oct/Nov', 'Feb/Mar')),
    level text NOT NULL CHECK (level IN ('AS', 'A2')),
    question_number integer NOT NULL CHECK (question_number >= 1 AND question_number <= 40),
    question_text text NOT NULL,
    option_a text NOT NULL,
    option_b text NOT NULL,
    option_c text NOT NULL,
    option_d text NOT NULL,
    correct_answer text NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D')),
    nexus_reasoning text NOT NULL,
    topic text,
    subtopic text,
    diagram_description text,
    difficulty text CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (paper_code, year, session, question_number)
);

-- Enable RLS IMMEDIATELY
ALTER TABLE public.mcq_vault ENABLE ROW LEVEL SECURITY;

-- Public read access (exam content is public)
CREATE POLICY "Public can read mcq_vault"
    ON public.mcq_vault FOR SELECT
    USING (true);

-- Admin-only write access
CREATE POLICY "Admins can insert mcq"
    ON public.mcq_vault FOR INSERT
    TO authenticated
    WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update mcq"
    ON public.mcq_vault FOR UPDATE
    TO authenticated
    USING (public.has_role(auth.uid(), 'admin'))
    WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete mcq"
    ON public.mcq_vault FOR DELETE
    TO authenticated
    USING (public.has_role(auth.uid(), 'admin'));

-- ================================================================
-- Indexes for performance
-- ================================================================
CREATE INDEX idx_notes_chapter ON public.notes(chapter_id);
CREATE INDEX idx_notes_level ON public.notes(level);
CREATE INDEX idx_chapters_level_subject ON public.chapters(level, subject);
CREATE INDEX idx_mcq_vault_paper ON public.mcq_vault(paper_code, year, session);
CREATE INDEX idx_mcq_vault_level ON public.mcq_vault(level);
CREATE INDEX idx_mcq_vault_topic ON public.mcq_vault(topic);

-- ================================================================
-- Updated_at trigger function
-- ================================================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Apply triggers
CREATE TRIGGER update_notes_updated_at
    BEFORE UPDATE ON public.notes
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_chapters_updated_at
    BEFORE UPDATE ON public.chapters
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_mcq_vault_updated_at
    BEFORE UPDATE ON public.mcq_vault
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();