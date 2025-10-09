'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  onContinue: (data: { timeDedication: string }) => void;
};

const options = ['15 minutos', '15-30 minutos', '30-60 minutos', 'Mais de 1 hora'];

export function Step23_TimeDedication({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg text-center border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Quanto tempo você poderia dedicar por dia para gerenciar seus problemas com peso?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onContinue({ timeDedication: option })}
            size="lg"
            variant="outline"
            className="p-6 text-lg justify-start"
          >
            {option}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
