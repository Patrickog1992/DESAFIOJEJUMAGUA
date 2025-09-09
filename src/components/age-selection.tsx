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
    range: '18–24',
    imageUrl: 'https://picsum.photos/400/400?random=1',
    hint: 'young adult',
  },
  {
    range: '25–34',
    imageUrl: 'https://picsum.photos/400/400?random=2',
    hint: 'adult professional',
  },
  {
    range: '35–44',
    imageUrl: 'https://picsum.photos/400/400?random=3',
    hint: 'middle-aged person',
  },
  {
    range: '45–54',
    imageUrl: 'https://picsum.photos/400/400?random=4',
    hint: 'mature adult',
  },
  {
    range: '55+',
    imageUrl: 'https://picsum.photos/400/400?random=5',
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
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
                width={150}
                height={150}
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
