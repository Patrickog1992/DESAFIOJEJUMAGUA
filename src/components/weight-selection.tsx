'use client';

import { useState, useEffect } from 'react';
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
import { cn } from '@/lib/utils';

type WeightSelectionProps = {
  onContinue: (weight: string) => void;
  height: number | null;
};

type ImcStatus = 'Abaixo do peso' | 'Peso normal' | 'Sobrepeso' | 'Obesidade';

export function WeightSelection({ onContinue, height }: WeightSelectionProps) {
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState<number | null>(null);
  const [imcStatus, setImcStatus] = useState<ImcStatus | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const weightNumber = parseFloat(weight);
    if (height && weightNumber > 0) {
      const heightInMeters = height / 100;
      const calculatedImc = weightNumber / (heightInMeters * heightInMeters);
      setImc(calculatedImc);

      if (calculatedImc < 18.5) {
        setImcStatus('Abaixo do peso');
      } else if (calculatedImc < 25) {
        setImcStatus('Peso normal');
      } else if (calculatedImc < 30) {
        setImcStatus('Sobrepeso');
      } else {
        setImcStatus('Obesidade');
      }
    } else {
      setImc(null);
      setImcStatus(null);
    }
  }, [weight, height]);

  const handleContinueClick = () => {
    const weightNumber = parseInt(weight, 10);
    if (
      !weight ||
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
    onContinue(weight);
  };

  const getImcMessageColor = () => {
    switch (imcStatus) {
      case 'Peso normal':
        return 'text-green-600';
      case 'Sobrepeso':
        return 'text-yellow-600';
      case 'Abaixo do peso':
        return 'text-yellow-600';
      case 'Obesidade':
        return 'text-red-600';
      default:
        return 'text-muted-foreground';
    }
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
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <Input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="Digite seu peso"
              className="w-full max-w-md text-center text-lg"
              min="30"
              max="300"
            />
            <span className="text-lg font-semibold">kg</span>
          </div>
          {imcStatus && imc && (
            <div
              className={cn(
                'mt-2 text-center text-sm font-semibold transition-opacity duration-300',
                getImcMessageColor()
              )}
            >
              <p>Seu IMC é {imc.toFixed(1)}</p>
              <p>Status: {imcStatus}</p>
            </div>
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
