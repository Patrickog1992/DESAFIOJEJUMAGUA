'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  onContinue: (data: { knowledge: string }) => void;
};

export function Step6_KnowledgeCheck({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg text-center border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">A maioria das pessoas luta para perder peso. Você sabe por que isso acontece?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button onClick={() => onContinue({ knowledge: 'Sim' })} size="lg" variant="outline" className="p-6 text-lg">Sim</Button>
        <Button onClick={() => onContinue({ knowledge: 'Mais ou menos' })} size="lg" variant="outline" className="p-6 text-lg">Mais ou menos</Button>
        <Button onClick={() => onContinue({ knowledge: 'Não' })} size="lg" variant="outline" className="p-6 text-lg">Não</Button>
      </CardContent>
    </Card>
  );
}
