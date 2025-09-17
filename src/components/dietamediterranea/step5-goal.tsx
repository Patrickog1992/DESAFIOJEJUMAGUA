'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

type Props = {
  onContinue: (data: { goals: string[] }) => void;
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
      onContinue({ goals: selected });
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Qual o seu principal objetivo com a dieta mediterrânea</CardTitle>
        <p className="text-muted-foreground">Selecione o que melhor te descreve (pode escolher mais de um):</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <Label key={option} htmlFor={option} className={cn('flex items-center space-x-2 rounded-lg border p-4 cursor-pointer', 'has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:bg-primary/10')}>
              <Checkbox id={option} onCheckedChange={() => handleSelect(option)} checked={selected.includes(option)} />
              <span>{option}</span>
            </Label>
          ))}
        </div>
      </CardContent>
       <CardFooter className="justify-center">
        <Button onClick={handleContinue} size="lg" disabled={selected.length === 0}>Continuar</Button>
      </CardFooter>
    </Card>
  );
}
