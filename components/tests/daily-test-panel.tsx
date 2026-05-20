'use client';
import { useState } from 'react';

export function DailyTestPanel() {
  const [result, setResult] = useState<any>(null);
  const run = async () => {
    const res = await fetch('/api/tests', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ grade:'10', weakSubjects:['Mathematics'], strongSubjects:['Biology','English'], recentMarks:{Mathematics:42,Biology:78,English:74} })});
    setResult(await res.json());
  };
  return <section className='glass rounded-2xl p-4'><h2 className='mb-3 text-xl font-semibold'>Adaptive Daily Test Engine</h2><button onClick={run} className='rounded-xl bg-accentPurple px-4 py-2 text-bg'>Generate Today Test</button>{result && <pre className='mt-3 overflow-auto rounded-xl bg-surface p-3 text-sm'>{JSON.stringify(result, null, 2)}</pre>}</section>;
}
