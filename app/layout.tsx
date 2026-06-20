import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'AI Student Companion', description: 'Emotionally intelligent student learning system.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang='en'><body>{children}</body></html>; }
