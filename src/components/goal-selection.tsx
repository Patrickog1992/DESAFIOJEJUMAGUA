'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type GoalSelectionProps = {
  onContinue: (selectedGoal: string) => void;
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
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = gender === 'male' ? maleGoals : femaleGoals;

  const handleGoalSelection = (goal: string) => {
    setSelectedGoal(goal);
    onContinue(goal);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          QUAL O SEU OBJETIVO
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedGoal ?? ''}
          onValueChange={handleGoalSelection}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {goals.map((goal, index) => (
            <Label
              key={goal.text}
              htmlFor={`goal-${index}`}
              className={cn(
                'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary flex flex-col items-center text-center',
                {
                  'ring-2 ring-primary border-primary':
                    selectedGoal === goal.text,
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
                <RadioGroupItem
                  value={goal.text}
                  id={`goal-${index}`}
                />
                <span
                  className="font-semibold text-base cursor-pointer"
                >
                  {goal.text}
                </span>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
