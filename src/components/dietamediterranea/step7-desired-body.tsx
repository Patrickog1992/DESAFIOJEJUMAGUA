'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type Props = {
  onContinue: (data: { desiredBody: string }) => void;
};

const options = [
  { name: 'Só uns tamanhos abaixo', img: 'https://no.diet/static/a7c2811a37731999026b52b710abb2b6/c2dc7/fewSizeSmallerFemale.webp' },
  { name: 'Em forma', img: 'https://no.diet/static/e7745e07486fb46f0a14fd7affbb7f23/c2dc7/thinFemale.webp' },
  { name: 'Tonificada', img: 'https://no.diet/static/a36961ff51f2a40d56b2249629f0cec5/c2dc7/tonedFemale.webp' },
  { name: 'Curvilínea', img: 'https://no.diet/static/188680b1d0b0945e7fbab1e2e39b5e9f/c2dc7/curvyFemale.webp' },
];

export function Step7_DesiredBody({ onContinue }: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
    onContinue({ desiredBody: option });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Escolha o corpo que deseja:</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selected} onValueChange={handleSelect} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {options.map((option) => (
            <Label key={option.name} htmlFor={option.name} className={cn('flex flex-col items-center space-y-2 rounded-lg border p-4 cursor-pointer', 'has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary')}>
              <Image src={option.img} alt={option.name} width={100} height={200} className="object-contain"/>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={option.name} id={option.name} />
                <span>{option.name}</span>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
