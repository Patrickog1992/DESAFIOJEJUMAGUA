'use server';
/**
 * @fileOverview Fluxo de IA para gerar um plano de jejum de amostra de 1 dia.
 *
 * - gerarPlanoAmostra: Função que lida com a geração do plano.
 * - GerarPlanoAmostraInput: O tipo de entrada para a função.
 * - GerarPlanoAmostraOutput: O tipo de retorno para a função.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RefeicaoSchema = z.object({
  prato: z.string().describe('O nome do prato para a refeição. Ex: "Salada de Quinoa com Frango Grelhado"'),
  descricao: z.string().describe('Uma breve descrição do prato e por que ele é uma boa escolha.'),
});

const GerarPlanoAmostraInputSchema = z.object({
  preferencias: z.string().describe('As preferências alimentares do usuário. Ex: "Gosto de frango e saladas, mas não como peixe."'),
  restricoes: z.string().describe('Qualquer restrição alimentar do usuário. Ex: "Intolerância à lactose."'),
  tempoJejum: z.string().describe('O período de jejum que o usuário deseja incluir. Ex: "2 horas"'),
});

const GerarPlanoAmostraOutputSchema = z.object({
  cafeDaManha: RefeicaoSchema.describe('Sugestão para o café da manhã.'),
  almoco: RefeicaoSchema.describe('Sugestão para o almoço.'),
  jantar: RefeicaoSchema.describe('Sugestão para o jantar.'),
  observacao: z.string().describe('Uma observação curta e motivacional sobre o plano do dia.'),
});

export type GerarPlanoAmostraInput = z.infer<typeof GerarPlanoAmostraInputSchema>;
export type GerarPlanoAmostraOutput = z.infer<typeof GerarPlanoAmostraOutputSchema>;

const prompt = ai.definePrompt({
  name: 'gerarPlanoAmostraPrompt',
  model: 'googleai/gemini-1.5-flash-latest',
  input: { schema: GerarPlanoAmostraInputSchema },
  output: { schema: GerarPlanoAmostraOutputSchema },
  prompt: `Você é um nutricionista especialista em jejum intermitente e um chef de cozinha.
  Sua tarefa é criar um cardápio SIMPLES, GOSTOSO e FÁCIL de seguir para UM DIA de desafio de jejum de água.

  Leve em consideração as seguintes informações do usuário:
  - Preferências Alimentares: {{{preferencias}}}
  - Restrições: {{{restricoes}}}
  - Tempo de Jejum Desejado: {{{tempoJejum}}}

  Crie um cardápio com 3 refeições: Café da Manhã, Almoço e Jantar.
  As refeições devem ser saudáveis, fáceis de preparar e alinhadas com um estilo de vida de jejum, focando em hidratação e nutrientes.
  A linguagem deve ser encorajadora e positiva.
  Finalize com uma observação curta e motivacional sobre como este dia é o primeiro passo para uma grande mudança.

  Crie o cardápio agora.
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
