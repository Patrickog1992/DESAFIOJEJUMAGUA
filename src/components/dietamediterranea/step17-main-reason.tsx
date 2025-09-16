'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type Props = {
  onContinue: (data: Partial<QuizData>) => void;
};

const options = [
  'Sentir mais confiante com meu corpo',
  'Tornar mais atraente',
  'Sentir mais saudável e com mais energia',
  'Melhorar a minha saúde mental',
  'Para usar roupas antigas',
  'Recuperar a forma depois que ganhei meu filho',
  'Outra',
];

export function Step17_MainReason({ onContinue }: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
  };
  
  const handleContinue = () => {
    if (selected) {
      onContinue({ mainReason: selected });
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Qual é a principal razão pela qual quer ficar em forma?</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selected} onValueChange={handleSelect} className="grid grid-cols-2 gap-4">
          {options.map((option) => (
             <Label key={option} htmlFor={option} className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary">
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
