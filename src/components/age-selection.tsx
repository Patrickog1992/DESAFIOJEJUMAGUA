'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type AgeSelectionProps = {
  onContinue: (ageRange: string) => void;
};

const ageRanges = [
  {
    range: '18-24',
    imageUrl: 'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/plBUBd3x9H-734.webp',
    hint: 'young adult',
  },
  {
    range: '25-34',
    imageUrl: 'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/B6rsyI0Q5b-734.webp',
    hint: 'adult professional',
  },
  {
    range: '39-50',
    imageUrl: 'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/v_d79rax5a-734.webp',
    hint: 'middle-aged person',
  },
  {
    range: '51+',
    imageUrl: 'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/jkzsicYwBF-734.webp',
    hint: 'senior citizen',
  },
];

export function AgeSelection({ onContinue }: AgeSelectionProps) {
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  const handleSelection = (range: string) => {
    setSelectedRange(range);
    onContinue(range);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Qual a sua faixa etária?
        </CardTitle>
        <CardDescription className="text-center">
          Isso nos ajudará a personalizar seu plano.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedRange ?? ''}
          onValueChange={handleSelection}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {ageRanges.map(({ range, imageUrl, hint }) => (
            <Label
              key={range}
              htmlFor={range}
              className={cn(
                'flex flex-col items-center space-y-4 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary',
                {
                  'ring-2 ring-primary border-primary':
                    selectedRange === range,
                }
              )}
            >
              <Image
                src={imageUrl}
                alt={range}
                width={200}
                height={200}
                className="rounded-md object-cover aspect-square"
                data-ai-hint={hint}
              />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={range} id={range} className="h-6 w-6" />
                <span className="font-semibold text-lg">{range}</span>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
