import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/ai/openai';
import { STUDY_COMPANION_SYSTEM } from '@/lib/ai/prompts';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const completion = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [{ role: 'system', content: STUDY_COMPANION_SYSTEM }, ...messages],
    temperature: 0.6
  });
  return NextResponse.json({ reply: completion.choices[0]?.message?.content ?? 'Let us try another approach together.' });
}
