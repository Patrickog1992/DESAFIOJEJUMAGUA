'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  onContinue: (data: { age: string }) => void;
};

const ageRanges = ['18-30', '31-40', '41-50', '51-60', '61-70', '70+'];

export function Step3_AgeSelection({ onContinue }: Props) {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const handleSelect = (age: string) => {
    setSelectedAge(age);
    onContinue({ age });
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg text-center border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Qual é a sua idade?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {ageRanges.map((range) => (
          <Button
            key={range}
            onClick={() => handleSelect(range)}
            size="lg"
            variant="outline"
            className={cn("p-6 text-lg justify-start", selectedAge === range && "ring-2 ring-blue-500 border-blue-500")}
          >
            {range}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
