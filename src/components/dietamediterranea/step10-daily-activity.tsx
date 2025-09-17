'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Props = {
  onContinue: (data: { dailyActivity: string }) => void;
};

const options = [
  'Trabalho de escritório',
  'Em constante movimento',
  'A treinar constantemente',
  'A passar o tempo em casa',
];

export function Step10_DailyActivity({ onContinue }: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
    onContinue({ dailyActivity: option });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Como é o seu dia a dia?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <RadioGroup value={selected} onValueChange={handleSelect}>
          {options.map((option) => (
            <Label key={option} htmlFor={option} className={cn("flex items-center space-x-2 rounded-lg border p-4 cursor-pointer", "has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:bg-primary/10")}>
              <RadioGroupItem value={option} id={option} />
              <span>{option}</span>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
