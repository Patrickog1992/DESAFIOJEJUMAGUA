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

type AgeRangeSelectionProps = {
  onContinue: (selectedRange: string) => void;
  gender: 'male' | 'female' | null;
};

const femaleAgeRanges = [
  {
    range: '18-26',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/plBUBd3x9H-734.webp',
  },
  {
    range: '27-38',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/B6rsyI0Q5b-734.webp',
  },
  {
    range: '39-50',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/v_d79rax5a-734.webp',
  },
  {
    range: '51+',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/jkzsicYwBF-734.webp',
  },
];

const maleAgeRanges = [
  {
    range: '18-26',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/QFGTm2gwUb-734.webp',
  },
  {
    range: '27-38',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/ixzle3qwER-734.webp',
  },
  {
    range: '39-50',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/oxqn5H3qgk-734.webp',
  },
  {
    range: '51+',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/4JyxeXx6AK-734.webp',
  },
];

export function AgeRangeSelection({
  onContinue,
  gender,
}: AgeRangeSelectionProps) {
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  const ageRanges = gender === 'male' ? maleAgeRanges : femaleAgeRanges;

  const handleSelection = (range: string) => {
    setSelectedRange(range);
    setTimeout(() => {
      onContinue(range);
    }, 300);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Qual a sua idade?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedRange ?? ''}
          onValueChange={handleSelection}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ageRanges.map(age => (
            <Label
              key={age.range}
              htmlFor={age.range}
              className={cn(
                'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary flex flex-col items-center text-center',
                {
                  'ring-2 ring-primary border-primary':
                    selectedRange === age.range,
                }
              )}
            >
              <Image
                src={age.imageUrl}
                alt={`Idade ${age.range}`}
                width={200}
                height={200}
                className="rounded-md object-contain mb-4 aspect-square"
                data-ai-hint="person age group"
              />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={age.range} id={age.range} />
                <span className="font-semibold text-lg cursor-pointer">
                  {age.range}
                </span>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
