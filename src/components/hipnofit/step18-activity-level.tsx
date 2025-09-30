'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  onContinue: (data: { activityLevel: string }) => void;
};

const options = [
  'Pouco ativo – passo a maior parte do tempo sentado ou relaxando.',
  'Um pouco ativo – me movimento de vez em quando.',
  'Ativo – faço exercícios ou caminhadas algumas vezes na semana.',
  'Bem ativo – me movimento ou me exercito na maioria dos dias.',
  'Super ativo – estou sempre fazendo algo físico.'
];

export function Step18_ActivityLevel({ onContinue }: Props) {
    const [selected, setSelected] = useState('');

    const handleSelect = (value: string) => {
        setSelected(value);
        onContinue({ activityLevel: value });
    }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg text-center border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Qual é o seu nível típico de atividade física?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <RadioGroup value={selected} onValueChange={handleSelect}>
            {options.map((option) => (
            <Label
                key={option}
                htmlFor={option}
                className={cn(
                "flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-gray-100",
                selected === option && "ring-2 ring-blue-500 border-blue-500 bg-blue-50"
                )}
            >
                <RadioGroupItem value={option} id={option} />
                <span className="font-medium flex-grow text-left">{option}</span>
            </Label>
            ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
