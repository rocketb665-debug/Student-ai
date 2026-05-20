import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { topic } = await req.json();
  const key = process.env.YOUTUBE_API_KEY;
  const url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.searchParams.set('part','snippet');
  url.searchParams.set('q', `${topic} explained for students`);
  url.searchParams.set('maxResults','8');
  url.searchParams.set('type','video');
  url.searchParams.set('key', key ?? '');
  const r = await fetch(url, { next: { revalidate: 3600 } });
  if (!r.ok) return NextResponse.json({ error: 'YouTube fetch failed' }, { status: 500 });
  const data = await r.json();
  return NextResponse.json({ items: data.items });
}
