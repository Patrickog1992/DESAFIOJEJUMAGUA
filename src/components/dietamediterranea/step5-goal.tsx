'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type Props = {
  onContinue: (data: Partial<QuizData>) => void;
};

const options = [
  'Perder peso',
  'Tonificar o meu corpo',
  'Ficar em forma e saudável',
  'Acelerar o metabolismo',
  'Aumentar os níveis de energia',
  'Gerir a diabetes',
  'Viver mais tempo',
  'Melhorar a saúde intestinal',
];

export function Step5_Goal({ onContinue }: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
  };
  
  const handleContinue = () => {
    if (selected) {
      onContinue({ goal: selected });
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Qual o seu principal objetivo com a dieta mediterrânea</CardTitle>
        <p className="text-muted-foreground">Selecione o que melhor te descreve:</p>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selected} onValueChange={handleSelect} className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <Label key={option} htmlFor={option} className={cn('flex items-center space-x-2 rounded-lg border p-4 cursor-pointer', selected === option && 'border-primary ring-2 ring-primary')}>
              <RadioGroupItem value={option} id={option} />
              <span>{option}</span>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
       <CardFooter className="justify-center">
        <Button onClick={handleContinue} size="lg" disabled={!selected}>Continuar</Button>
      </CardFooter>
    </Card>
  );
}
