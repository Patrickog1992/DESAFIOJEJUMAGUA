'use client';

import { useState, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type TargetWeightSelectionProps = {
  onContinue: (targetWeight: string) => void;
  height: number | null;
  gender: 'male' | 'female' | null;
};

export function TargetWeightSelection({
  onContinue,
  height,
  gender,
}: TargetWeightSelectionProps) {
  const [targetWeight, setTargetWeight] = useState('');
  const { toast } = useToast();

  const { suggestedWeight, healthyRange } = useMemo(() => {
    if (!height) return { suggestedWeight: null, healthyRange: null };

    const heightInMeters = height / 100;
    const heightInMetersSq = heightInMeters * heightInMeters;

    // Using BMI of 21.7 as ideal middle ground
    const idealWeight = 21.7 * heightInMetersSq;
    const minHealthyWeight = 18.5 * heightInMetersSq;
    const maxHealthyWeight = 24.9 * heightInMetersSq;

    return {
      suggestedWeight: Math.round(idealWeight),
      healthyRange: `${Math.round(minHealthyWeight)}kg e ${Math.round(
        maxHealthyWeight
      )}kg`,
    };
  }, [height]);

  const handleContinueClick = () => {
    const weightNumber = parseInt(targetWeight, 10);
    if (
      !targetWeight ||
      isNaN(weightNumber) ||
      weightNumber < 30 ||
      weightNumber > 300
    ) {
      toast({
        title: 'Peso inválido',
        description: 'Por favor, insira um peso válido entre 30 e 300 kg.',
        variant: 'destructive',
      });
      return;
    }
    onContinue(targetWeight);
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl">
          Qual é o teu objetivo de peso?
        </CardTitle>
        {suggestedWeight && (
          <CardDescription className="pt-2 text-base">
            Peso ideal sugerido: <strong>{suggestedWeight} kg</strong>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <Input
              type="number"
              value={targetWeight}
              onChange={e => setTargetWeight(e.target.value)}
              placeholder="Digite seu peso alvo"
              className="w-full max-w-xs text-center text-lg"
              min="30"
              max="300"
            />
            <span className="text-lg font-semibold">kg</span>
          </div>
          {healthyRange && (
            <p className="text-sm text-muted-foreground text-center px-4">
              Considera o teu objetivo de peso num intervalo saudável entre{' '}
              <strong>{healthyRange}</strong>.
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={handleContinueClick} size="lg">
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
