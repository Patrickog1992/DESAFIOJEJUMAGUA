'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type Props = {
  onContinue: (data: { bodyType: string }) => void;
};

const options = [
  { name: 'Magra', img: 'https://no.diet/static/0c03135313f629c4729ef6d0a956822a/c2dc7/skinnyFemale.webp' },
  { name: 'Normal', img: 'https://no.diet/static/6f283f7c0c575656bc66333dae8884ee/c2dc7/midsizedFemale.webp' },
  { name: 'Gorda', img: 'https://no.diet/static/add00f8a7d7690c06575bdd50efa9615/c2dc7/plumpFemale.webp' },
  { name: 'Obesa', img: 'https://no.diet/static/fd4d51272be6ee49f554a874fd25110f/c2dc7/extraFemale.webp' },
];

export function Step6_BodyType({ onContinue }: Props) {
  const [selected, setSelected] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
    onContinue({ bodyType: option });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Escolha o seu tipo de corpo atual:</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selected} onValueChange={handleSelect} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {options.map((option) => (
            <Label key={option.name} htmlFor={option.name} className={cn('flex flex-col items-center space-y-2 rounded-lg border p-4 cursor-pointer', {
                "border-primary ring-2 ring-primary bg-primary/10": selected === option.name
            })}>
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
