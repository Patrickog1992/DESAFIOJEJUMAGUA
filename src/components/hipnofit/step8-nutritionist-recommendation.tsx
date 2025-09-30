'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  onContinue: (data: { recommendedByNutritionist: 'Sim' | 'Não' }) => void;
};

export function Step8_NutritionistRecommendation({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg text-center border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Um número crescente de nutricionistas está recomendando o Método HipnoFit</CardTitle>
        <p className="text-lg pt-4">Você foi recomendado por um nutricionista?</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button onClick={() => onContinue({ recommendedByNutritionist: 'Sim' })} size="lg" variant="outline" className="p-6 text-lg">Sim</Button>
        <Button onClick={() => onContinue({ recommendedByNutritionist: 'Não' })} size="lg" variant="outline" className="p-6 text-lg">Não</Button>
      </CardContent>
    </Card>
  );
}
