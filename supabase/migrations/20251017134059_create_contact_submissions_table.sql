/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the contact
      - `email` (text) - Email address for follow-up
      - `phone` (text) - Phone number for contact
      - `message` (text) - Detailed message or inquiry
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `status` (text) - Status of the inquiry (new, contacted, resolved)
      - `notes` (text, nullable) - Internal notes for follow-up

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to manage all submissions
    - Public users can only insert their own submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);