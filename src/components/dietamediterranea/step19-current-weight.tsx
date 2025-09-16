'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useState, useMemo } from 'react';
import { useToast } from '@/hooks/use-toast';

type Props = {
  height?: number;
  onContinue: (data: Partial<QuizData>) => void;
};

export function Step19_CurrentWeight({ height, onContinue }: Props) {
  const [weight, setWeight] = useState('');
  const { toast } = useToast();

  const imcResult = useMemo(() => {
    if (!height || !weight) return null;
    const weightNum = parseFloat(weight);
    const heightM = height / 100;
    if (isNaN(weightNum) || weightNum <= 0) return null;

    const imc = weightNum / (heightM * heightM);
    let status = '';
    if (imc < 18.5) status = 'abaixo do peso';
    else if (imc < 25) status = 'saudável';
    else if (imc < 30) status = 'excesso de peso';
    else status = 'obesidade';
    
    return { imc: imc.toFixed(1), status };
  }, [height, weight]);

  const handleContinue = () => {
    const weightNum = parseInt(weight);
    if (isNaN(weightNum) || weightNum < 30 || weightNum > 300) {
      toast({ title: 'Peso inválido', description: 'Por favor, insira um peso entre 30 e 300 kg.', variant: 'destructive' });
      return;
    }
    onContinue({ currentWeight: weightNum });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Qual é o seu peso atual?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Seu peso"
              className="w-48 text-center text-lg"
            />
            <span>kg</span>
        </div>
        {imcResult && (
             <p className="text-red-500 font-bold mt-4">❗ O seu IMC é de {imcResult.imc}, o que é considerado {imcResult.status}</p>
        )}
        <p className="text-sm text-muted-foreground">Vamos utilizar o seu IMC para calcular a sua Dieta Mediterrânea individual</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={handleContinue} size="lg" disabled={!weight}>Continuar</Button>
      </CardFooter>
    </Card>
  );
}
