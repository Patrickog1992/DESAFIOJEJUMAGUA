'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GoalSelectionProps = {
  onContinue: (selectedGoal: string) => void;
};

const goals = [
  'Perder peso',
  'Melhorar a saúde geral',
  'Um corpo firme e tonificado',
  'Eliminar o stress',
];

export function GoalSelection({ onContinue }: GoalSelectionProps) {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-center">
          O que queres atingir?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedGoal ?? undefined}
          onValueChange={setSelectedGoal}
          className="space-y-3"
        >
          {goals.map((goal, index) => (
            <Label
              key={goal}
              htmlFor={`goal-${index}`}
              className={cn(
                'flex items-center space-x-4 rounded-lg border p-4 text-base transition-all duration-300 cursor-pointer hover:bg-primary/5',
                {
                  'ring-2 ring-primary border-primary': selectedGoal === goal,
                }
              )}
            >
              <RadioGroupItem value={goal} id={`goal-${index}`} />
              <span>{goal}</span>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={() => selectedGoal && onContinue(selectedGoal)} disabled={!selectedGoal}>
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
