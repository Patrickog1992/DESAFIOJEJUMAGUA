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

export function AgeSelection({ onContinue }: AgeSelectionProps) {
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  const handleSelection = (range: string) => {
    setSelectedRange(range);
    onContinue(range);
  };

  return (
    <Card className="w-full max-w-5xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl">
          Qual é a sua idade?
        </CardTitle>
        <CardDescription>
          Isso nos ajudará a personalizar seu plano.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedRange ?? ''}
          onValueChange={handleSelection}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {ageRanges.map(({ range, imageUrl }) => (
            <Label
              key={range}
              htmlFor={range}
              className={cn(
                'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary flex flex-col items-center justify-between text-center',
                {
                  'ring-2 ring-primary border-primary':
                    selectedRange === range,
                }
              )}
            >
              <div className="mb-4">
                <Image
                  src={imageUrl}
                  alt={`Faixa etária ${range}`}
                  width={200}
                  height={200}
                  className="rounded-md object-contain aspect-square"
                />
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={range} id={range} />
                <span className="font-semibold text-lg">{range}</span>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
