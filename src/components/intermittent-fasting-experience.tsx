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
import { CheckCircle2 } from 'lucide-react';

type IntermittentFastingExperienceProps = {
  onContinue: (experience: string) => void;
};

const options = [
  'Já experimentei',
  'Já ouvi falar sobre isso',
  'Nunca ouvi falar',
];

export function IntermittentFastingExperience({
  onContinue,
}: IntermittentFastingExperienceProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Você já ouviu falar de Jejum intermitente?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOption ?? ''}
          onValueChange={setSelectedOption}
          className="space-y-4"
        >
          {options.map(option => (
            <Label
              key={option}
              htmlFor={option}
              className={cn(
                'flex items-center space-x-4 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary',
                {
                  'ring-2 ring-primary border-primary': selectedOption === option,
                }
              )}
            >
              <RadioGroupItem value={option} id={option} className="h-6 w-6" />
              <span className="font-semibold text-lg flex-grow">{option}</span>
              {selectedOption === option && (
                <CheckCircle2 className="h-6 w-6 text-primary" />
              )}
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          onClick={() => selectedOption && onContinue(selectedOption)}
          disabled={!selectedOption}
          size="lg"
        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
