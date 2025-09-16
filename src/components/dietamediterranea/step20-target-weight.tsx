'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useState, useMemo } from 'react';
import { useToast } from '@/hooks/use-toast';

type Props = {
  currentWeight?: number;
  onContinue: (data: Partial<QuizData>) => void;
};

export function Step20_TargetWeight({ currentWeight, onContinue }: Props) {
  const [targetWeight, setTargetWeight] = useState('');
  const { toast } = useToast();

  const weightLossPercentage = useMemo(() => {
    if (!currentWeight || !targetWeight) return null;
    const targetWeightNum = parseFloat(targetWeight);
    if (isNaN(targetWeightNum) || targetWeightNum >= currentWeight) return null;

    const percentage = ((currentWeight - targetWeightNum) / currentWeight) * 100;
    return percentage.toFixed(0);
  }, [currentWeight, targetWeight]);

  const handleContinue = () => {
    const targetWeightNum = parseInt(targetWeight);
    if (isNaN(targetWeightNum) || targetWeightNum < 30 || targetWeightNum > 300) {
      toast({ title: 'Meta de peso inválida', description: 'Por favor, insira um peso entre 30 e 300 kg.', variant: 'destructive' });
      return;
    }
    if (currentWeight && targetWeightNum >= currentWeight) {
        toast({ title: 'Meta inválida', description: 'A meta de peso deve ser menor que o peso atual.', variant: 'destructive' });
        return;
    }
    onContinue({ targetWeight: targetWeightNum });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Qual é a sua meta de peso?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
            <Input
              type="number"
              value={targetWeight}
              onChange={(e) => setTargetWeight(e.target.value)}
              placeholder="Sua meta"
              className="w-48 text-center text-lg"
            />
            <span>kg</span>
        </div>
        {weightLossPercentage && (
             <p className="font-bold mt-4">Seu objetivo é {weightLossPercentage}% a menos do seu peso de hoje!</p>
        )}
        <CardDescription className="max-w-md">
            Num novo estudo da Mayo Clinic, as pessoas com excesso de peso que perdem mais de 20% do seu peso corporal têm quase 2,5 vezes mais probabilidades de ter uma boa saúde metabólica do que as que perdem 5-10%.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={handleContinue} size="lg" disabled={!targetWeight}>Continuar</Button>
      </CardFooter>
    </Card>
  );
}
