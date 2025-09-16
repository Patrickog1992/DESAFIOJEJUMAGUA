'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type Props = {
  onContinue: (data: { energyLevels: string }) => void;
};

const options = [
  'Baixos, fico cansada durante o dia',
  'Quebra de energia depois do almoço',
  'Custo a aguentar depois de comer',
  'Altos e estáveis',
];

export function Step11_EnergyLevels({ onContinue }: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
    onContinue({ energyLevels: option });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Como estão os seus níveis de energia ao longo do dia?</CardTitle>
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
