import { TestQuestion, StudentProfile } from '@/lib/types';
export function allocateSubjectMix(profile: StudentProfile) {
  const weakShare = 0.65;
  const all = [...profile.weakSubjects, ...profile.strongSubjects];
  const unique = [...new Set(all)];
  return unique.map((s) => ({ subject: s, weight: profile.weakSubjects.includes(s) ? weakShare / Math.max(profile.weakSubjects.length,1) : (1-weakShare) / Math.max(profile.strongSubjects.length,1) }));
}
export function gradeDifficulty(score: number): 'easy'|'medium'|'hard' { if (score < 50) return 'easy'; if (score < 80) return 'medium'; return 'hard'; }
export function nextTestBlueprint(profile: StudentProfile, targetQuestions=8) {
  const mix = allocateSubjectMix(profile);
  return mix.flatMap(m => Array.from({length: Math.max(1, Math.round(m.weight*targetQuestions))}, (_,i)=>({subject:m.subject, idx:i})));
}
export function scoreTest(questions: TestQuestion[], answers: Record<string,string>) {
  let correct = 0; const feedback: string[] = [];
  for (const q of questions) { const ok = answers[q.id] === q.answer; if (ok) correct++; else feedback.push(`${q.subject}: Review ${q.explanation}`); }
  return { correct, total: questions.length, percent: Math.round((correct/questions.length)*100), feedback };
}
