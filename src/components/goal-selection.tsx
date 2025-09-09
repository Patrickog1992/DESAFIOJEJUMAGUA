'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type GoalSelectionProps = {
  onContinue: (selectedGoals: string[]) => void;
  gender: 'male' | 'female' | null;
};

const maleGoals = [
  {
    text: 'Perder peso',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/-MIGESxZbn-288.webp',
  },
  {
    text: 'Melhorar a saúde geral',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/YGcLz4pLRS-288.webp',
  },
  {
    text: 'Um corpo firme e tonificado',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/uy7YLerw8o-288.webp',
  },
  {
    text: 'Eliminar o stress',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/LC8BxJKQeS-288.webp',
  },
];

const femaleGoals = [
  {
    text: 'Perder peso',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/KE8kAIUz7_-288.webp',
  },
  {
    text: 'Melhorar a saúde geral',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/vbukDOJxm3-288.webp',
  },
  {
    text: 'Um corpo firme e tonificado',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/254VGdQRMR-288.webp',
  },
  {
    text: 'Eliminar o stress',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/q98RLmKnv0-288.webp',
  },
];

export function GoalSelection({ onContinue, gender }: GoalSelectionProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const goals = gender === 'male' ? maleGoals : femaleGoals;

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prevSelected =>
      prevSelected.includes(goal)
        ? prevSelected.filter(g => g !== goal)
        : [...prevSelected, goal]
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          QUAL O SEU OBJETIVO
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <div
              key={goal.text}
              onClick={() => handleGoalToggle(goal.text)}
              className={cn(
                'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary flex flex-col items-center text-center',
                {
                  'ring-2 ring-primary border-primary': selectedGoals.includes(
                    goal.text
                  ),
                }
              )}
            >
              <Image
                src={goal.imageUrl}
                alt={goal.text}
                width={150}
                height={150}
                className="rounded-md object-contain mb-4"
                data-ai-hint="lifestyle goal"
              />
              <div className="flex items-center space-x-3">
                <Checkbox
                  id={`goal-${index}`}
                  checked={selectedGoals.includes(goal.text)}
                  onCheckedChange={() => handleGoalToggle(goal.text)}
                />
                <Label
                  htmlFor={`goal-${index}`}
                  className="font-semibold text-base cursor-pointer"
                >
                  {goal.text}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          onClick={() => onContinue(selectedGoals)}
          disabled={selectedGoals.length === 0}
        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
