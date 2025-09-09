'use client';

import { useState } from 'react';
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

type WeightSelectionProps = {
  onContinue: (weight: string) => void;
};

export function WeightSelection({ onContinue }: WeightSelectionProps) {
  const [weight, setWeight] = useState('');
  const { toast } = useToast();

  const handleContinueClick = () => {
    const weightNumber = parseInt(weight, 10);
    if (!weight || isNaN(weightNumber) || weightNumber < 30 || weightNumber > 300) {
      toast({
        title: 'Peso inválido',
        description: 'Por favor, insira um peso válido entre 30 e 300 kg.',
        variant: 'destructive',
      });
      return;
    }
    onContinue(weight);
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl">
          Qual é o seu peso atual?
        </CardTitle>
        <CardDescription>
          Isso nos ajudará a personalizar seu plano.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center gap-2">
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Digite seu peso"
            className="max-w-xs text-center text-lg"
            min="30"
            max="300"
          />
          <span className="text-lg font-semibold">kg</span>
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
