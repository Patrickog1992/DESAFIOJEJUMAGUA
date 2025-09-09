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

type HealthProblemsSelectionProps = {
  onContinue: (selectedProblems: string[]) => void;
};

const options = [
  'Diabetes (qualquer fase)',
  'Refluxo ácido',
  'Apneia do sono',
  'Tensão arterial elevada',
  'Colesterol elevado',
  'Doença ou problemas cardíacos',
  'Doença ou problemas renais',
  'Cancro',
  'Estou recuperando de uma cirurgia',
  'Nenhuma das opções acima',
];

export function HealthProblemsSelection({
  onContinue,
}: HealthProblemsSelectionProps) {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);

  const handleToggle = (problem: string) => {
    setSelectedProblems(prevSelected => {
      if (problem === 'Nenhuma das opções acima') {
        // If "None" is already selected, unselect it. Otherwise, select only "None".
        return prevSelected.includes(problem) ? [] : [problem];
      }

      // If another problem is selected
      const newSelection = prevSelected.filter(
        item => item !== 'Nenhuma das opções acima'
      );

      if (newSelection.includes(problem)) {
        // If the problem is already selected, unselect it.
        return newSelection.filter(p => p !== problem);
      } else {
        // If the problem is not selected, add it.
        return [...newSelection, problem];
      }
    });
  };

  const handleContinueClick = () => {
    if (selectedProblems.length > 0) {
      onContinue(selectedProblems);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Tem algum desses problemas de saúde?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {options.map((option, index) => (
            <Label
              key={option}
              htmlFor={`problem-${index}`}
              className={cn(
                'flex items-center space-x-4 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary',
                {
                  'ring-2 ring-primary border-primary':
                    selectedProblems.includes(option),
                }
              )}
            >
              <Checkbox
                id={`problem-${index}`}
                checked={selectedProblems.includes(option)}
                onCheckedChange={() => handleToggle(option)}
                className="h-6 w-6"
              />
              <span className="font-semibold text-lg flex-grow">
                {option}
              </span>
            </Label>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          onClick={handleContinueClick}
          disabled={selectedProblems.length === 0}
        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
