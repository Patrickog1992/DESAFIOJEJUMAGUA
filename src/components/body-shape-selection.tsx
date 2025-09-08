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
import React from 'react';

type BodyShapeSelectionProps = {
  onContinue: (selectedShape: string) => void;
};

const bodyShapes = [
  {
    name: 'Oval',
    svg: (
      <svg
        viewBox="0 0 100 150"
        className="h-48 w-auto"
        fill="hsl(var(--primary))"
      >
        <ellipse cx="50" cy="75" rx="40" ry="60" />
      </svg>
    ),
  },
  {
    name: 'Ampulheta',
    svg: (
      <svg
        viewBox="0 0 100 150"
        className="h-48 w-auto"
        fill="hsl(var(--primary))"
      >
        <path d="M20 10 L80 10 L50 75 L20 10 Z M20 140 L80 140 L50 75 L20 140 Z" />
      </svg>
    ),
  },
  {
    name: 'Retângulo',
    svg: (
      <svg
        viewBox="0 0 100 150"
        className="h-48 w-auto"
        fill="hsl(var(--primary))"
      >
        <rect x="25" y="10" width="50" height="130" />
      </svg>
    ),
  },
  {
    name: 'Triângulo',
    svg: (
      <svg
        viewBox="0 0 100 150"
        className="h-48 w-auto"
        fill="hsl(var(--primary))"
      >
        <polygon points="50,10 10,140 90,140" />
      </svg>
    ),
  },
  {
    name: 'Triângulo invertido',
    svg: (
      <svg
        viewBox="0 0 100 150"
        className="h-48 w-auto"
        fill="hsl(var(--primary))"
      >
        <polygon points="10,10 90,10 50,140" />
      </svg>
    ),
  },
  {
    name: 'Não tenho a certeza',
    svg: (
      <svg
        viewBox="0 0 100 150"
        className="h-48 w-auto"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 60 C30 40, 50 20, 70 40 S50 80, 50 80" />
        <circle cx="50" cy="110" r="5" fill="hsl(var(--primary))" />
      </svg>
    ),
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
          {bodyShapes.map(shape => (
            <Label
              key={shape.name}
              htmlFor={shape.name}
              className={cn(
                'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary flex flex-col items-center justify-between text-center',
                {
                  'ring-2 ring-primary border-primary':
                    selectedShape === shape.name,
                }
              )}
            >
              <div className="flex items-center justify-center h-48 w-full mb-4 bg-muted/30 rounded-md">
                {shape.svg}
              </div>
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
