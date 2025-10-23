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
} from '@/ai/flows/gerar-plano-amostra';
import { Coffee, Salad, Soup, BrainCircuit, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type SamplePlanProps = {
  onContinue: () => void;
  quizData: any; // Mantido para compatibilidade com a página principal
};

export function SamplePlan({ onContinue }: SamplePlanProps) {
  const [plan, setPlan] = useState<GerarPlanoAmostraOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const generated = localStorage.getItem('planoAmostraGerado');
    if (generated === 'true') {
      setHasGenerated(true);
    }
  }, []);

  const handleGeneratePlan = async () => {
    if (hasGenerated) {
      toast({
        title: 'Amostra já gerada',
        description: 'Você já gerou sua amostra grátis. Para ter planos diários, adquira a versão completa!',
        variant: 'destructive',
      });
      return;
    }
    
    setLoading(true);
    setError(null);
    setPlan(null);

    try {
      const result = await gerarPlanoAmostra();
      setPlan(result);
      setHasGenerated(true);
      localStorage.setItem('planoAmostraGerado', 'true');
    } catch (e: any) {
      console.error(e);
      setError(e.message || 'Ocorreu um erro ao gerar seu plano de amostra.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <Sparkles className="h-10 w-10 text-primary mx-auto" />
        <CardTitle className="text-2xl font-headline">
          Gere 1 Dia de Desafio Grátis com nossa IA!
        </CardTitle>
        <CardDescription>
          Clique no botão abaixo e nossa inteligência artificial criará um cardápio exclusivo para o seu primeiro dia.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {hasGenerated && !plan && !loading && (
            <Alert variant="destructive">
                <AlertTitle>Amostra Já Utilizada</AlertTitle>
                <AlertDescription>
                    Você já gerou seu dia de desafio grátis. Para receber planos diários e personalizados, continue para ver o plano completo!
                </AlertDescription>
            </Alert>
        )}
        
        {!plan && !loading && !hasGenerated && (
          <div className="text-center">
            <Button onClick={handleGeneratePlan} className="w-full max-w-sm" size="lg">
              Gerar 1 Dia de Desafio Grátis
            </Button>
          </div>
        )}

        {loading && (
          <div className="space-y-4">
            <Skeleton className="h-28 w-full" />
            <Skeleton className="h-28 w-full" />
            <Skeleton className="h-28 w-full" />
          </div>
        )}
        
        {plan && (
          <div className="space-y-4 animate-in fade-in-50 duration-500">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Coffee className="h-8 w-8 text-yellow-700" />
                <div>
                  <CardTitle>Café da Manhã</CardTitle>
                  <CardDescription>{plan.cafeDaManha.prato}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{plan.cafeDaManha.descricao}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Salad className="h-8 w-8 text-green-600" />
                <div>
                  <CardTitle>Almoço</CardTitle>
                  <CardDescription>{plan.almoco.prato}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{plan.almoco.descricao}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Soup className="h-8 w-8 text-orange-500" />
                <div>
                  <CardTitle>Jantar</CardTitle>
                  <CardDescription>{plan.jantar.prato}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{plan.jantar.descricao}</p>
              </CardContent>
            </Card>

             <Alert className="bg-primary/10 border-primary/30">
              <BrainCircuit className="h-5 w-5" />
              <AlertTitle className="font-bold text-primary">
                Observação do Nutricionista
              </AlertTitle>
              <AlertDescription className="text-primary/90">
                {plan.observacao}
              </AlertDescription>
            </Alert>
          </div>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Erro na Geração</AlertTitle>
            <AlertDescription>{error} Por favor, tente novamente.</AlertDescription>
          </Alert>
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
        >
          Ver o Plano Completo
        </Button>
      </CardFooter>
    </Card>
  );
}
