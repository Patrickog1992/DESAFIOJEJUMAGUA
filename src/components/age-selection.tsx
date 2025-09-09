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

type AgeSelectionProps = {
  onContinue: (selectedAgeRange: string) => void;
};

const ageRanges = [
  {
    range: '18-26',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/4gEa7nS_dM-268.webp',
    alt: 'Mulher jovem de 18 a 26 anos',
  },
  {
    range: '27-38',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/zOqL9A0s9j-268.webp',
    alt: 'Mulher de 27 a 38 anos',
  },
  {
    range: '39-50',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/C3vYIeF_V9-268.webp',
    alt: 'Mulher de 39 a 50 anos',
  },
  {
    range: '51+',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/S6oYI4yrgS-268.webp',
    alt: 'Mulher com 51 anos ou mais',
  },
];

export function AgeSelection({ onContinue }: AgeSelectionProps) {
  const [selectedAgeRange, setSelectedAgeRange] = useState<string | null>(null);

  const handleSelection = (range: string) => {
    setSelectedAgeRange(range);
    onContinue(range);
  };

  return (
    <Card className="w-full max-w-5xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Qual a sua idade?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAgeRange ?? ''}
          onValueChange={handleSelection}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {ageRanges.map(age => (
            <Label
              key={age.range}
              htmlFor={age.range}
              className={cn(
                'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary flex flex-col items-center justify-between text-center',
                {
                  'ring-2 ring-primary border-primary':
                    selectedAgeRange === age.range,
                }
              )}
            >
              <Image
                src={age.imageUrl}
                alt={age.alt}
                width={200}
                height={200}
                className="rounded-md object-contain mb-4"
                data-ai-hint="woman portrait"
              />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={age.range} id={age.range} />
                <span className="font-semibold text-base">{age.range}</span>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
