export type StudentProfile = { grade: string; examGoal: string; weakSubjects: string[]; strongSubjects: string[]; recentMarks: Record<string, number>; };
export type TestQuestion = { id: string; subject: string; difficulty: 'easy'|'medium'|'hard'; question: string; options: string[]; answer: string; explanation: string; };
