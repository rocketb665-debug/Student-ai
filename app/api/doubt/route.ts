import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/ai/openai';
import { DOUBT_SOLVER_SYSTEM } from '@/lib/ai/prompts';

export async function POST(req: NextRequest) {
  const { question } = await req.json();
  const completion = await openai.responses.create({
    model: 'gpt-4.1',
    input: [{ role:'system', content: DOUBT_SOLVER_SYSTEM }, { role:'user', content: question }]
  });
  return NextResponse.json({ answer: completion.output_text });
}
