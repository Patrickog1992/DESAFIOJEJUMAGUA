'use server';
/**
 * @fileOverview Fluxo de IA para gerar um plano de jejum de amostra.
 *
 * - gerarPlanoAmostra: Função que lida com a geração do plano.
 * - GerarPlanoAmostraInput: O tipo de entrada para a função.
 * - GerarPlanoAmostraOutput: O tipo de retorno para a função.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PlanoDiarioSchema = z.object({
  horario: z.string().describe('O horário sugerido para a ação. Ex: "08:00 - 12:00"'),
  acao: z.string().describe('A ação específica que o usuário deve tomar.'),
  dica: z.string().describe('Uma dica curta para ajudar o usuário com a ação.'),
});

const GerarPlanoAmostraInputSchema = z.object({
  gender: z.string().describe('O gênero do usuário (male, female, não informado).'),
  currentWeight: z.number().describe('O peso atual do usuário em kg.'),
  targetWeight: z.number().describe('O peso desejado do usuário em kg.'),
});

const GerarPlanoAmostraOutputSchema = z.object({
  manha: PlanoDiarioSchema.describe('Plano para o período da manhã.'),
  tarde: PlanoDiarioSchema.describe('Plano para o período da tarde.'),
  noite: PlanoDiarioSchema.describe('Plano para o período da noite.'),
  motivacao_final: z.string().describe('Uma frase motivacional curta e impactante para o final do dia.'),
});

export type GerarPlanoAmostraInput = z.infer<typeof GerarPlanoAmostraInputSchema>;
export type GerarPlanoAmostraOutput = z.infer<typeof GerarPlanoAmostraOutputSchema>;

const prompt = ai.definePrompt({
  name: 'gerarPlanoAmostraPrompt',
  model: 'googleai/gemini-1.5-flash-latest',
  input: { schema: GerarPlanoAmostraInputSchema },
  output: { schema: GerarPlanoAmostraOutputSchema },
  prompt: `Você é um especialista em jejum de água e nutricionista motivacional.
  Sua tarefa é criar um plano de amostra SIMPLES e FÁCIL de seguir para UM DIA de jejum de água,
  com base nos dados do usuário.

  O plano deve ser dividido em 3 períodos: Manhã, Tarde e Noite.
  Para cada período, forneça um horário, uma ação clara e uma dica curta.
  As ações devem focar na hidratação e no bem-estar, evitando jargões técnicos.
  A linguagem deve ser encorajadora e positiva.
  Finalize com uma mensagem de motivação curta e poderosa.

  Dados do usuário:
  - Gênero: {{{gender}}}
  - Peso Atual: {{{currentWeight}}} kg
  - Peso Desejado: {{{targetWeight}}} kg

  Crie o plano de amostra agora.
  `,
});

const gerarPlanoAmostraFlow = ai.defineFlow(
  {
    name: 'gerarPlanoAmostraFlow',
    inputSchema: GerarPlanoAmostraInputSchema,
    outputSchema: GerarPlanoAmostraOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('A IA não conseguiu gerar um plano de amostra.');
    }
    return output;
  }
);


export async function gerarPlanoAmostra(input: GerarPlanoAmostraInput): Promise<GerarPlanoAmostraOutput> {
    return gerarPlanoAmostraFlow(input);
}
