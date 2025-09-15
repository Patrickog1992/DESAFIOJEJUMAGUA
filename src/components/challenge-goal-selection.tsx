'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

type ChallengeGoalSelectionProps = {
  onContinue: (selectedOption: string) => void;
};

const options = [
  'Só quero experimentar o jejum intermitente de água',
  'Quero tentar perder algum peso',
  'Quero perder o máximo de peso possível',
];

export function ChallengeGoalSelection({
  onContinue,
}: ChallengeGoalSelectionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelection = (option: string) => {
    setSelectedOption(option);
    onContinue(option);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Qual o seu objetivo com o desafio?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOption ?? ''}
          onValueChange={handleSelection}
          className="space-y-4"
        >
          {options.map(option => (
            <Label
              key={option}
              htmlFor={option}
              className={cn(
                'flex items-center space-x-4 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary',
                {
                  'ring-2 ring-primary border-primary':
                    selectedOption === option,
                }
              )}
            >
              <RadioGroupItem value={option} id={option} className="h-6 w-6" />
              <span className="font-semibold text-lg flex-grow">
                {option}
              </span>
              {selectedOption === option && (
                <CheckCircle2 className="h-6 w-6 text-primary" />
              )}
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
