'use client';
import { useState } from 'react';

type Msg = { role: 'user'|'assistant'; content: string };
export function ChatPanel() {
  const [messages, setMessages] = useState<Msg[]>([{ role: 'assistant', content: 'Hey, I am here for your studies. What would you like to work on today?' }]);
  const [input, setInput] = useState('');
  const send = async () => {
    if (!input.trim()) return;
    const next = [...messages, { role: 'user' as const, content: input }];
    setMessages(next); setInput('');
    const res = await fetch('/api/chat', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ messages: next })});
    const data = await res.json();
    setMessages((m)=>[...m, { role:'assistant', content:data.reply }]);
  };
  return <section className='glass rounded-2xl p-4'><div className='mb-3 h-[420px] space-y-3 overflow-auto'>{messages.map((m,i)=><div key={i} className={`max-w-[80%] rounded-xl p-3 ${m.role==='assistant'?'bg-surface':'ml-auto bg-accentBlue text-bg'}`}>{m.content}</div>)}</div><div className='flex gap-2'><input aria-label='chat input' className='flex-1 rounded-xl bg-surface p-3' value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()}/><button onClick={send} className='rounded-xl bg-accentBlue px-4 text-bg'>Send</button></div></section>;
}
