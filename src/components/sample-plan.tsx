'use client';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  gerarPlanoAmostra,
  type GerarPlanoAmostraOutput,
  type GerarPlanoAmostraInput,
} from '@/ai/flows/gerar-plano-amostra';
import { Clock, Sun, Sunset, BrainCircuit } from 'lucide-react';
import type { QuizData } from '@/app/page';

type SamplePlanProps = {
  quizData: Partial<QuizData>;
  onContinue: () => void;
};

export function SamplePlan({ quizData, onContinue }: SamplePlanProps) {
  const [plan, setPlan] = useState<GerarPlanoAmostraOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generatePlan = async () => {
      setLoading(true);
      setError(null);
      try {
        const input: GerarPlanoAmostraInput = {
          gender: quizData.gender || 'Não informado',
          currentWeight: quizData.weight ? Number(quizData.weight) : 0,
          targetWeight: quizData.targetWeight
            ? Number(quizData.targetWeight)
            : 0,
        };

        if (!input.currentWeight || !input.targetWeight) {
          throw new Error(
            'Dados de peso insuficientes para gerar o plano de amostra.'
          );
        }

        const result = await gerarPlanoAmostra(input);
        setPlan(result);
      } catch (e: any) {
        console.error(e);
        setError(e.message || 'Ocorreu um erro ao gerar seu plano de amostra.');
      } finally {
        setLoading(false);
      }
    };

    generatePlan();
  }, [quizData]);

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline">
          Aqui está uma amostra do seu plano para 1 dia!
        </CardTitle>
        <CardDescription>
          Com base nas suas respostas, nossa IA preparou uma prévia do seu
          desafio.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {loading && (
          <div className="space-y-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Erro!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {plan && !loading && (
          <div className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Sun className="h-8 w-8 text-yellow-500" />
                <div>
                  <CardTitle>{plan.manha.horario}</CardTitle>
                  <CardDescription>Período da Manhã</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{plan.manha.acao}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Dica: {plan.manha.dica}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="h-8 w-8 text-blue-500" />
                <div>
                  <CardTitle>{plan.tarde.horario}</CardTitle>
                  <CardDescription>Período da Tarde</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{plan.tarde.acao}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Dica: {plan.tarde.dica}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Sunset className="h-8 w-8 text-orange-500" />
                <div>
                  <CardTitle>{plan.noite.horario}</CardTitle>
                  <CardDescription>Período da Noite</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{plan.noite.acao}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Dica: {plan.noite.dica}
                </p>
              </CardContent>
            </Card>

            <Alert className="bg-primary/10 border-primary/30">
              <BrainCircuit className="h-5 w-5" />
              <AlertTitle className="font-bold text-primary">
                Mensagem Motivacional
              </AlertTitle>
              <AlertDescription className="text-primary/90">
                {plan.motivacao_final}
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-col gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          Este é apenas um exemplo. O seu plano completo incluirá mais de 600
          receitas, um cronograma detalhado, guias e muito mais!
        </p>
        <Button
          onClick={onContinue}
          size="lg"
          disabled={loading || error !== null}
        >
          Ver o plano completo
        </Button>
      </CardFooter>
    </Card>
  );
}
