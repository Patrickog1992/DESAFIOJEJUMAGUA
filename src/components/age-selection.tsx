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

type AgeSelectionProps = {
  onContinue: (age: string) => void;
};

export function AgeSelection({ onContinue }: AgeSelectionProps) {
  const [age, setAge] = useState('');
  const { toast } = useToast();

  const handleContinueClick = () => {
    const ageNumber = parseInt(age, 10);
    if (!age || isNaN(ageNumber) || ageNumber < 18 || ageNumber > 99) {
      toast({
        title: 'Idade inválida',
        description: 'Por favor, insira uma idade válida entre 18 e 99 anos.',
        variant: 'destructive',
      });
      return;
    }
    onContinue(age);
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl">
          Qual é a sua idade?
        </CardTitle>
        <CardDescription>
          Isso nos ajudará a personalizar seu plano.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center gap-2">
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Digite sua idade"
            className="max-w-xs text-center text-lg"
            min="18"
            max="99"
          />
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
