'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type Props = {
  onContinue: (data: Partial<QuizData>) => void;
};

const options = [
  'Nunca',
  'Várias vezes por mês',
  'Várias vezes por semana',
  'Quase todos os dias',
];

export function Step12_ExerciseFrequency({ onContinue }: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
    onContinue({ exerciseFrequency: option });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Com que frequência faz exercício?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <RadioGroup value={selected} onValueChange={handleSelect}>
          {options.map((option) => (
             <Label key={option} htmlFor={option} className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary">
               <RadioGroupItem value={option} id={option} />
               <span>{option}</span>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
