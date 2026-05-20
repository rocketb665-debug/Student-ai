create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique,
  grade text not null,
  exam_goal text not null,
  weak_subjects text[] not null,
  strong_subjects text[] not null,
  recent_marks jsonb not null,
  created_at timestamptz default now()
);
create table if not exists study_tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  title text not null,
  subject text not null,
  due_at timestamptz,
  status text not null default 'todo',
  exam_weight int default 1,
  created_at timestamptz default now()
);
create table if not exists test_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  score int not null,
  total int not null,
  weak_topics text[] not null,
  duration_seconds int not null,
  created_at timestamptz default now()
);
