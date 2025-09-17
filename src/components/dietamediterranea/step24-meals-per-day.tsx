'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Props = {
  onContinue: (data: { mealsPerDay: string }) => void;
};

const options = [
  { count: 'Duas', desc: '(café da manhã e almoço)' },
  { count: 'Três', desc: '(café da manhã, almoço e janta)' },
  { count: 'Quatro', desc: '(café da manhã, almoço , lanche da tarde e janta)' },
  { count: 'Cinco', desc: '(café da manhã, almoço, lanche da tarde , janta e outro lanche da noite)' },
];

export function Step24_MealsPerDay({ onContinue }: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
    onContinue({ mealsPerDay: option });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Quantas refeições por dia gostaria de fazer?</CardTitle>
        <CardDescription>Pode sempre alterar esta opção mais tarde nas definições</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <RadioGroup value={selected} onValueChange={handleSelect}>
          {options.map((option) => (
             <Label key={option.count} htmlFor={option.count} className={cn("flex flex-col items-start space-y-1 rounded-lg border p-4 cursor-pointer", {
                "border-primary ring-2 ring-primary bg-primary/10": selected === option.count
             })}>
               <div className="flex items-center space-x-2">
                 <RadioGroupItem value={option.count} id={option.count} />
                 <span className="font-bold">{option.count}</span>
               </div>
               <span className="pl-6 text-sm text-muted-foreground">{option.desc}</span>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
