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

type HeightSelectionProps = {
  onContinue: (height: string) => void;
};

export function HeightSelection({ onContinue }: HeightSelectionProps) {
  const [height, setHeight] = useState('');
  const { toast } = useToast();

  const handleContinueClick = () => {
    const heightNumber = parseInt(height, 10);
    if (!height || isNaN(heightNumber) || heightNumber < 100 || heightNumber > 250) {
      toast({
        title: 'Altura inválida',
        description: 'Por favor, insira uma altura válida entre 100 e 250 cm.',
        variant: 'destructive',
      });
      return;
    }
    onContinue(height);
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl">
          Qual é a tua altura?
        </CardTitle>
        <CardDescription>
          Isso nos ajudará a personalizar seu plano.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center gap-2">
          <Input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Digite sua altura"
            className="max-w-xs text-center text-lg"
            min="100"
            max="250"
          />
          <span className="text-lg font-semibold">cm</span>
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
