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
import { CheckCircle2 } from 'lucide-react';

type AgeSelectionProps = {
  onContinue: (ageRange: string) => void;
};

const ageRanges = ['18–24', '25–34', '35–44', '45–54', '55+'];

export function AgeSelection({ onContinue }: AgeSelectionProps) {
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  const handleSelection = (range: string) => {
    setSelectedRange(range);
    onContinue(range);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
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
          className="space-y-4"
        >
          {ageRanges.map(range => (
            <Label
              key={range}
              htmlFor={range}
              className={cn(
                'flex items-center space-x-4 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary',
                {
                  'ring-2 ring-primary border-primary':
                    selectedRange === range,
                }
              )}
            >
              <RadioGroupItem value={range} id={range} className="h-6 w-6" />
              <span className="font-semibold text-lg flex-grow">{range}</span>
              {selectedRange === range && (
                <CheckCircle2 className="h-6 w-6 text-primary" />
              )}
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
