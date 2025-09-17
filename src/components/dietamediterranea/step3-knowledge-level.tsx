'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  onContinue: (data: { knowledge: string }) => void;
};

export function Step3_KnowledgeLevel({ onContinue }: Props) {
  const [selected, setSelected] = useState('');
  const options = ['Iniciante', 'Já ouvi falar', 'Especialista'];

  const handleSelect = (option: string) => {
    setSelected(option);
    onContinue({ knowledge: option });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Qual o seu conhecimento sobre a dieta mediterrânea?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {options.map((option) => (
          <Button
            key={option}
            variant={'outline'}
            onClick={() => handleSelect(option)}
            size="lg"
            className={cn("w-full justify-start p-6 text-lg", "data-[selected=true]:ring-2 data-[selected=true]:ring-primary data-[selected=true]:bg-primary/10")}
            data-selected={selected === option}
          >
            {option}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
