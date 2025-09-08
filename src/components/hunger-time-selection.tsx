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
import { Clock, Coffee, Moon, Sun } from 'lucide-react';

type HungerTimeSelectionProps = {
  onContinue: (selectedTimes: string[]) => void;
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
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const handleToggle = (time: string) => {
    setSelectedTimes(prevSelected =>
      prevSelected.includes(time)
        ? prevSelected.filter(t => t !== time)
        : [...prevSelected, time]
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Qual o horário você sente fome
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {options.map((option, index) => (
            <Label
              key={option.text}
              htmlFor={`time-${index}`}
              onClick={() => handleToggle(option.text)}
              className={cn(
                'flex items-center space-x-4 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary',
                {
                  'ring-2 ring-primary border-primary': selectedTimes.includes(
                    option.text
                  ),
                }
              )}
            >
              <Checkbox
                id={`time-${index}`}
                checked={selectedTimes.includes(option.text)}
                onCheckedChange={() => handleToggle(option.text)}
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
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          onClick={() => onContinue(selectedTimes)}
          disabled={selectedTimes.length === 0}
        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
