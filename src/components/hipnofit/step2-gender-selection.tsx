'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  onContinue: (data: { gender: 'male' | 'female' }) => void;
};

export function Step2_GenderSelection({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg text-center border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Para começar, selecione seu gênero:</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button onClick={() => onContinue({ gender: 'female' })} size="lg" variant="outline" className="p-6 text-lg">
          Feminino
        </Button>
        <Button onClick={() => onContinue({ gender: 'male' })} size="lg" variant="outline" className="p-6 text-lg">
          Masculino
        </Button>
      </CardContent>
    </Card>
  );
}
