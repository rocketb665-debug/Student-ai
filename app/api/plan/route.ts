import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { tasks, weakSubjects } = await req.json();
  const sorted = [...tasks].sort((a,b)=> Number(b.examWeight||0)-Number(a.examWeight||0));
  const prioritized = sorted.map((t)=> ({...t, boost: weakSubjects.includes(t.subject) ? 'high' : 'normal'}));
  return NextResponse.json({ schedule: prioritized });
}
