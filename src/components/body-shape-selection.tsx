'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type BodyShapeSelectionProps = {
  onContinue: (selectedShape: string) => void;
};

const bodyShapes = [
  {
    name: 'Oval',
    imageUrl: 'https://picsum.photos/200/300',
    hint: 'body shape',
  },
  {
    name: 'Ampulheta',
    imageUrl: 'https://picsum.photos/200/301',
    hint: 'body shape',
  },
  {
    name: 'Retângulo',
    imageUrl: 'https://picsum.photos/200/302',
    hint: 'body shape',
  },
  {
    name: 'Triângulo',
    imageUrl: 'https://picsum.photos/200/303',
    hint: 'body shape',
  },
  {
    name: 'Triângulo invertido',
    imageUrl: 'https://picsum.photos/200/304',
    hint: 'body shape',
  },
  {
    name: 'Não tenho a certeza',
    imageUrl: 'https://picsum.photos/200/305',
    hint: 'question mark',
  },
];

export function BodyShapeSelection({ onContinue }: BodyShapeSelectionProps) {
  const [selectedShape, setSelectedShape] = useState<string | null>(null);

  return (
    <Card className="w-full max-w-5xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Como você descreve o formato do seu corpo atualmente
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedShape ?? ''}
          onValueChange={setSelectedShape}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {bodyShapes.map((shape) => (
            <Label
              key={shape.name}
              htmlFor={shape.name}
              className={cn(
                'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary flex flex-col items-center text-center',
                {
                  'ring-2 ring-primary border-primary':
                    selectedShape === shape.name,
                }
              )}
            >
              <Image
                src={shape.imageUrl}
                alt={shape.name}
                width={150}
                height={250}
                className="rounded-md object-contain mb-4 h-48 w-auto bg-muted"
                data-ai-hint={shape.hint}
              />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={shape.name} id={shape.name} />
                <span className="font-semibold text-base cursor-pointer">
                  {shape.name}
                </span>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          onClick={() => selectedShape && onContinue(selectedShape)}
          disabled={!selectedShape}
        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
