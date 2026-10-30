-- Guestbook for the Messages tab.
--
-- 1. Create a free project at https://supabase.com
-- 2. Open SQL Editor, paste this file, and run it.
-- 3. In Project Settings → API, copy the Project URL and the "anon public" key
--    into GUESTBOOK in script.js.
--
-- Visitors can read and post messages, but can't edit or delete them.
-- Remove unwanted messages from the Table Editor in the Supabase dashboard.

create table public.messages (
  id bigint generated always as identity primary key,
  name text not null check (char_length(btrim(name)) between 1 and 40),
  body text not null check (char_length(btrim(body)) between 1 and 280),
  kind text not null default 'message' check (kind in ('message', 'idea')),
  created_at timestamptz not null default now()
);

alter table public.messages enable row level security;

create policy "Anyone can read messages"
  on public.messages for select
  to anon
  using (true);

create policy "Anyone can post a message"
  on public.messages for insert
  to anon
  with check (true);
