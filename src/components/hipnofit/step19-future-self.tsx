'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Props = {
  onContinue: (data: { futureSelf: string[] }) => void;
};

const options = [
  'Confortável fisicamente', 'No controle do meu peso', 'Mais saudável no meu corpo',
  'Confiante em mim mesmo', 'Não tenho certeza'
];

export function Step19_FutureSelf({ onContinue }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      onContinue({ futureSelf: selected });
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Ótimo, agora sabemos um pouco sobre sua experiência atual com a comida e como isso impacta sua vida. Imagine-se daqui a 6 semanas: como você gostaria de se sentir?</CardTitle>
        <CardDescription>Escolha quantas opções quiser</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {options.map((option) => (
          <Label
            key={option}
            htmlFor={option}
            className={cn(
              "flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-gray-100",
              selected.includes(option) && "ring-2 ring-blue-500 border-blue-500 bg-blue-50"
            )}
          >
            <Checkbox
              id={option}
              checked={selected.includes(option)}
              onCheckedChange={() => handleSelect(option)}
            />
            <span className="font-medium flex-grow text-left">{option}</span>
          </Label>
        ))}
      </CardContent>
      <CardFooter className="justify-center mt-4">
        <Button onClick={handleContinue} size="lg" disabled={selected.length === 0}>
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
