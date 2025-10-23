'use server';
/**
 * @fileoverview This file initializes the Genkit AI singleton.
 *
 * It is important to only have one instance of the AI object per server,
 * so we export a singleton from this file.
 */
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// Initialize the AI singleton.
export const ai = genkit({
  plugins: [googleAI()],
});
