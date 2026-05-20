import { NextRequest, NextResponse } from 'next/server';
import { nextTestBlueprint } from '@/lib/ai/test-engine';

export async function POST(req: NextRequest) {
  const profile = await req.json();
  const blueprint = nextTestBlueprint(profile, 10);
  return NextResponse.json({ durationMinutes: 12, blueprint, insight: '65% weighted to weak subjects for rapid recovery.' });
}
