import type { GenerateQuizQuestionsOutput } from '@/ai/flows/generate-quiz-questions';

type QuestionsArray = GenerateQuizQuestionsOutput['questions'];
export type Question = QuestionsArray[number];
