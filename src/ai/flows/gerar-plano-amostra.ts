'use client';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle } from 'lucide-react';

type SamplePlanProps = {
  onContinue: () => void;
  quizData: any; 
};

export function SamplePlan({ onContinue }: SamplePlanProps) {
  const [preferencias, setPreferencias] = useState('');
  const [restricoes, setRestricoes] = useState('');
  const [jejum, setJejum] = useState('');
  const [planoGerado, setPlanoGerado] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [jaGerou, setJaGerou] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const gerado = localStorage.getItem('planoAmostraGerado');
    if (gerado === 'true') {
      setJaGerou(true);
    }
  }, []);

  const handleGeneratePlan = () => {
    if (jaGerou) {
      toast({
        title: 'Amostra já utilizada',
        description: 'Você já gerou seu dia de desafio grátis. Para receber planos diários, continue para ver o plano completo!',
        variant: 'destructive',
      });
      return;
    }

    if (!preferencias || !jejum) {
        toast({
            title: 'Campos obrigatórios',
            description: 'Por favor, preencha as preferências e o tempo de jejum.',
            variant: 'destructive',
        });
        return;
    }

    setLoading(true);
    setTimeout(() => {
      const textoPlano = `
        <p><strong>Café da Manhã:</strong> Inicie o dia com um copo grande de água. O seu jejum de <strong>${jejum}</strong> começa agora, permitindo que seu corpo entre em modo de queima de gordura.</p>
        <p><strong>Almoço:</strong> Uma refeição leve e nutritiva. Sugestão: Uma porção de <strong>${preferencias}</strong> grelhado com uma salada colorida de folhas verdes, tomate e pepino. Beba bastante água.</p>
        <p><strong>Jantar:</strong> Para fechar o dia, uma sopa de legumes ou um caldo nutritivo. Isso ajudará na hidratação e garantirá uma noite de sono tranquila.</p>
        <p class="font-bold mt-4">Parabéns! Você completou o primeiro dia do desafio. Este é o primeiro passo para uma grande mudança!</p>
      `;
      setPlanoGerado(textoPlano);
      setLoading(false);
      setJaGerou(true);
      localStorage.setItem('planoAmostraGerado', 'true');
    }, 2000); 
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline">
          Gere 1 Dia de Desafio Grátis!
        </CardTitle>
        <CardDescription>
          Personalize sua amostra e veja como nosso plano funciona.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!planoGerado && !jaGerou ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="preferencias">Preferências alimentares</Label>
              <Input
                id="preferencias"
                value={preferencias}
                onChange={(e) => setPreferencias(e.target.value)}
                placeholder="Ex: Frango, Carne, Peixe, Ovo"
              />
            </div>
            <div>
              <Label htmlFor="restricoes">Restrições (opcional)</Label>
              <Input
                id="restricoes"
                value={restricoes}
                onChange={(e) => setRestricoes(e.target.value)}
                placeholder="Ex: Não como glúten, sou intolerante à lactose"
              />
            </div>
            <div>
              <Label>Quanto tempo de jejum você queria incluir?</Label>
              <RadioGroup value={jejum} onValueChange={setJejum} className="mt-2 grid grid-cols-2 gap-4">
                {['1 hora', '2 horas', '3 horas', 'Mais de 4 horas'].map((option) => (
                  <Label key={option} htmlFor={option} className="flex items-center space-x-2 rounded-lg border p-3 cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary">
                    <RadioGroupItem value={option} id={option} />
                    <span>{option}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>
            <Button onClick={handleGeneratePlan} disabled={loading} className="w-full" size="lg">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando seu plano...
                </>
              ) : (
                'GERAR 1 DIA DE DESAFIO GRÁTIS'
              )}
            </Button>
          </div>
        ) : null}

        {planoGerado && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg space-y-2 animate-in fade-in-50">
             <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-800">Seu Plano de 1 Dia!</h3>
             </div>
            <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: planoGerado }} />
          </div>
        )}

        {jaGerou && !planoGerado && (
            <Alert variant="destructive">
                <AlertTitle>Amostra Já Utilizada</AlertTitle>
                <AlertDescription>
                    Você já gerou seu dia de desafio grátis. Para receber planos diários e personalizados, continue para ver o plano completo!
                </AlertDescription>
            </Alert>
        )}

      </CardContent>
      <CardFooter className="flex-col gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          Este é apenas um exemplo. O seu plano completo incluirá mais de 600
          receitas, um cronograma detalhado, guias e muito mais!
        </p>
        <Button onClick={onContinue} size="lg" variant="default">
          VER O PLANO COMPLETO
        </Button>
      </CardFooter>
    </Card>
  );
}