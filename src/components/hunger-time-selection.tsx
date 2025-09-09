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
import { Clock, Coffee, Moon, Sun } from 'lucide-react';

type HungerTimeSelectionProps = {
  onContinue: (selectedTime: string) => void;
};

const options = [
  {
    text: 'Manhã',
    icon: <Sun className="h-8 w-8 text-primary" />,
  },
  {
    text: 'Tarde',
    icon: <Coffee className="h-8 w-8 text-primary" />,
  },
  {
    text: 'Noite',
    icon: <Moon className="h-8 w-8 text-primary" />,
  },
  {
    text: 'Não acontece a uma hora específica do dia',
    icon: <Clock className="h-8 w-8 text-primary" />,
  },
];

export function HungerTimeSelection({ onContinue }: HungerTimeSelectionProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleSelection = (time: string) => {
    setSelectedTime(time);
    onContinue(time);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Qual o horário você sente fome
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedTime ?? ''}
          onValueChange={handleSelection}
          className="space-y-4"
        >
          {options.map((option, index) => (
            <Label
              key={option.text}
              htmlFor={`time-${index}`}
              className={cn(
                'flex items-center space-x-4 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary',
                {
                  'ring-2 ring-primary border-primary': selectedTime === option.text,
                }
              )}
            >
              <RadioGroupItem
                value={option.text}
                id={`time-${index}`}
                className="h-6 w-6"
              />
              <div className="flex items-center gap-4">
                {option.icon}
                <span className="font-semibold text-lg flex-grow">
                  {option.text}
                </span>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}