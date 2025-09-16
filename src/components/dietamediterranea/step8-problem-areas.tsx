'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

type Props = {
  onContinue: (data: Partial<QuizData>) => void;
};

const options = ['Braços', 'Costas', 'Glúteos', 'Peito', 'Barriga', 'Pernas'];

export function Step8_ProblemAreas({ onContinue }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelected(prev => 
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };
  
  const handleContinue = () => {
    if (selected.length > 0) {
      onContinue({ problemAreas: selected });
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Marque as suas áreas problemáticas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-1/2">
            <Image
              src="https://no.diet/static/31f33e937a19a43c63833dca80899aaf/29e9a/body-parts-female.webp"
              alt="Áreas problemáticas"
              width={200}
              height={400}
              className="mx-auto"
            />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          {options.map((option) => (
            <Label key={option} htmlFor={option} className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary">
              <Checkbox id={option} onCheckedChange={() => handleSelect(option)} checked={selected.includes(option)} />
              <span>{option}</span>
            </Label>
          ))}
        </div>
      </CardContent>
       <CardFooter className="justify-center">
        <Button onClick={handleContinue} size="lg" disabled={selected.length === 0}>Continuar</Button>
      </CardFooter>
    </Card>
  );
}
