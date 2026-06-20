# AI Student Companion App

Production-grade Next.js 14 app with adaptive test engine, emotionally intelligent chat, doubt solver, and YouTube learning search.

## Architecture Overview
- **Frontend**: Next.js app router, Tailwind, Framer Motion.
- **Backend**: Route handlers + server-side orchestration.
- **AI Layer**: OpenAI chat for companion mode, OpenAI responses for doubt solver.
- **Data**: Supabase PostgreSQL schema in `db/schema.sql`.

## User Flow Map
1. Onboard profile with grade/goals/weak subjects.
2. Dashboard calculates daily priorities.
3. Student runs daily adaptive 10–15 min test.
4. AI explains mistakes and generates revisions.
5. Student chats with companion for motivation or concept reinforcement.
6. Topic search returns curated YouTube lessons.

## Folder Structure
- `app/` routes + API handlers
- `components/` dashboard, chat, testing panels
- `lib/ai/` prompts, OpenAI client, test engine
- `lib/types/` domain types
- `db/` schema

## Run
```bash
npm install
npm run dev
```
