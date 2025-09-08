'use server';

import { generateQuizQuestions } from '@/ai/flows/generate-quiz-questions';
import type { Question } from '@/types/quiz';

export async function getQuizQuestions(
  numberOfQuestions: number,
  averageScore: number | null
): Promise<Question[]> {
  try {
    const result = await generateQuizQuestions({
      topic: 'jejum de água',
      numberOfQuestions,
      ...(averageScore !== null && { userPerformance: { averageScore } }),
    });
    return result.questions;
  } catch (error) {
    console.error('Error generating quiz questions:', error);
    throw new Error('Failed to generate quiz questions.');
  }
}
