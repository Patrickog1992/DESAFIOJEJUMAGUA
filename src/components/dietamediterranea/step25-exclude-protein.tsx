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
  '😊 Como de tudo',
  '🍗 Frango',
  '🥩 Carne vermelha',
  '🧀 Queijo',
  '🐟 Atum',
  '🥛 Iogurte',
  '🐟 Salmão',
  '🐟 Bacalhau',
  '🥚 Ovos',
  '🫘 Grão-de-bico',
  '🫘 Lentilhas',
];

export function Step25_ExcludeProducts_Protein({ onContinue }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    if (option === '😊 Como de tudo') {
      setSelected(['😊 Como de tudo']);
    } else {
      setSelected(prev => {
        const newSelection = prev.filter(item => item !== '😊 Como de tudo');
        return newSelection.includes(option) ? newSelection.filter(item => item !== option) : [...newSelection, option]
      });
    }
  };
  
  const handleContinue = () => {
      onContinue({ excludedProteins: selected });
  }

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Gostaria de excluir algum destes produtos do seu plano?</CardTitle>
        <p className="text-muted-foreground">Proteínas e laticínios:</p>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <Label key={option} htmlFor={option} className={cn("flex items-center space-x-2 rounded-lg border p-4 cursor-pointer", {
            "border-primary ring-2 ring-primary bg-primary/10": selected.includes(option)
          })}>
            <Checkbox id={option} onCheckedChange={() => handleSelect(option)} checked={selected.includes(option)} />
            <span>{option}</span>
          </Label>
        ))}
      </CardContent>
       <CardFooter className="justify-center">
        <Button onClick={handleContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
