'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Props = {
  onContinue: (data: Partial<QuizData>) => void;
};

const options = [
  'Mounjaro de Pobre',
  'Jejum intermitente',
  'Dieta vegetariana',
  'Dieta vegana',
  'Dieta baixa em carboidrato',
  'Dieta sem glúten',
  'Outra',
  'Nenhuma das anteriores',
];

export function Step15_PastDiets({ onContinue }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    if (option === 'Nenhuma das anteriores') {
      setSelected(['Nenhuma das anteriores']);
      return;
    }
    setSelected(prev => {
        const newSelection = prev.filter(item => item !== 'Nenhuma das anteriores');
        return newSelection.includes(option) ? newSelection.filter(item => item !== option) : [...newSelection, option]
    });
  };
  
  const handleContinue = () => {
      onContinue({ pastDiets: selected });
  }

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Experimentou alguma destas dietas nos últimos 3 anos?</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <Label key={option} htmlFor={option} className={cn("flex items-center space-x-2 rounded-lg border p-4 cursor-pointer", "has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:bg-primary/10")}>
            <Checkbox id={option} onCheckedChange={() => handleSelect(option)} checked={selected.includes(option)} />
            <span>{option}</span>
          </Label>
        ))}
      </CardContent>
       <CardFooter className="justify-center">
        <Button onClick={handleContinue} size="lg" disabled={selected.length === 0}>Continuar</Button>
      </CardFooter>
    </Card>
  );
}
