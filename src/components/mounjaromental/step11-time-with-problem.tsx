'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  onContinue: (data: { timeWithProblem: string }) => void;
};

const options = ['0 - 6 meses', '6 - 12 meses', '1 - 5 anos', 'Mais de 5 anos'];

export function Step11_TimeWithProblem({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg text-center border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Há quanto tempo você enfrenta problemas com peso?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onContinue({ timeWithProblem: option })}
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
