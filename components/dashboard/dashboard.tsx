'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Brain, CalendarClock, Flame, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import { ChatPanel } from '@/components/chat/chat-panel';
import { DailyTestPanel } from '@/components/tests/daily-test-panel';

const cards = [
  { title: 'Study Streak', value: '14 days', icon: Flame, tone: 'text-accentGreen' },
  { title: 'Weak Subject', value: 'Mathematics', icon: Brain, tone: 'text-softWarning' },
  { title: 'Today Plan', value: '5 tasks', icon: CalendarClock, tone: 'text-accentBlue' },
  { title: 'Video Queue', value: '3 lessons', icon: PlayCircle, tone: 'text-accentPurple' }
];

export function Dashboard() {
  const [tab, setTab] = useState<'dashboard'|'chat'|'test'>('dashboard');
  const reduce = useReducedMotion();
  return <main className='mx-auto min-h-screen max-w-6xl p-4 md:p-8'>
    <header className='mb-6 flex items-center justify-between'>
      <div><p className='text-muted'>Welcome back</p><h1 className='text-3xl font-semibold'>AI Student Companion</h1></div>
      <BookOpen className='text-accentBlue'/>
    </header>
    <nav className='mb-6 flex gap-2'>{['dashboard','chat','test'].map((t)=><button key={t} onClick={()=>setTab(t as any)} className={`rounded-xl px-4 py-2 ${tab===t?'bg-accentBlue text-bg':'glass text-text'}`}>{t}</button>)}</nav>
    {tab==='dashboard' && <section className='grid gap-4 md:grid-cols-2'>{cards.map((c,i)=><motion.article key={c.title} initial={reduce?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:i*0.05,type:'spring'}} className='glass rounded-2xl p-5'><div className='flex items-center justify-between'><h2>{c.title}</h2><c.icon className={c.tone}/></div><p className='mt-2 text-2xl font-bold'>{c.value}</p></motion.article>)}</section>}
    {tab==='chat' && <ChatPanel/>}
    {tab==='test' && <DailyTestPanel/>}
  </main>;
}
