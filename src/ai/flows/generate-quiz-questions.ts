'use server';

/**
 * @fileOverview A quiz question generator for water fasting quizzes.
 *
 * - generateQuizQuestions - A function that generates a quiz based on water fasting.
 * - GenerateQuizQuestionsInput - The input type for the generateQuizQuestions function.
 * - GenerateQuizQuestionsOutput - The return type for the generateQuizQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuestionSchema = z.object({
  question: z.string().describe('The quiz question.'),
  options: z.array(z.string()).describe('The multiple-choice options for the question.'),
  correctAnswerIndex: z
    .number()
    .int()
    .min(0)
    .describe('The index of the correct answer in the options array.'),
  difficulty: z.enum(['easy', 'medium', 'hard']).describe('The difficulty level of the question.'),
});

const GenerateQuizQuestionsInputSchema = z.object({
  topic: z.string().describe('The topic of the quiz, which is water fasting.'),
  numberOfQuestions: z
    .number()
    .int()
    .min(1)
    .describe('The number of questions to generate for the quiz.'),
  userPerformance: z
    .object({
      averageScore: z
        .number()
        .min(0)
        .max(1)
        .optional()
        .describe('The user performance, with the average score of the user.'),
    })
    .optional()
    .describe(
      'Optional user performance data to tailor the difficulty of the questions, with the average score of the user. If omitted, a normal difficulty is assumed'
    ),
});
export type GenerateQuizQuestionsInput = z.infer<typeof GenerateQuizQuestionsInputSchema>;

const GenerateQuizQuestionsOutputSchema = z.object({
  questions: z.array(QuestionSchema).describe('The generated quiz questions.'),
});
export type GenerateQuizQuestionsOutput = z.infer<typeof GenerateQuizQuestionsOutputSchema>;

export async function generateQuizQuestions(
  input: GenerateQuizQuestionsInput
): Promise<GenerateQuizQuestionsOutput> {
  return generateQuizQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateQuizQuestionsPrompt',
  input: {schema: GenerateQuizQuestionsInputSchema},
  output: {schema: GenerateQuizQuestionsOutputSchema},
  prompt: `You are an expert quiz generator, specializing in water fasting quizzes.

  Generate a quiz with {{numberOfQuestions}} multiple-choice questions about {{topic}}.

  The quiz should be tailored to the user's past performance. If the user has a high average score, generate more difficult questions. If the user has a low average score, generate easier questions. If the user has no past performance, generate a quiz with normal difficulty.

  User performance: {{#if userPerformance}} Average score: {{{userPerformance.averageScore}}} {{else}} No past performance {{/if}}
  The response must be in JSON format.
  The response must be an array of questions, each question must have the following format:
  {
    "question": "The quiz question.",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correctAnswerIndex": 0,
    "difficulty": "easy" | "medium" | "hard",
  }

  Here's an example:
  {
    "questions": [
      {
        "question": "What is water fasting?",
        "options": ["A type of diet", "A type of exercise", "A type of meditation", "A type of therapy"],
        "correctAnswerIndex": 0,
        "difficulty": "easy",
      },
      {
        "question": "How long should you water fast?",
        "options": ["1-2 days", "3-4 days", "5-6 days", "7-8 days"],
        "correctAnswerIndex": 1,
        "difficulty": "medium",
      }
    ]
  }
  `,
});

const generateQuizQuestionsFlow = ai.defineFlow(
  {
    name: 'generateQuizQuestionsFlow',
    inputSchema: GenerateQuizQuestionsInputSchema,
    outputSchema: GenerateQuizQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
