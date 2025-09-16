'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type Props = {
  onContinue: (data: { weightFluctuation: string }) => void;
};

const options = [
  'Ganho peso rapidamente, mas perco lentamente',
  'Ganho e perco peso com facilidade',
  'Tenho dificuldade em ganhar peso ou músculo',
];

export function Step13_WeightFluctuation({ onContinue }: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
    onContinue({ weightFluctuation: option });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Como é que o seu peso varia normalmente?</CardTitle>
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
