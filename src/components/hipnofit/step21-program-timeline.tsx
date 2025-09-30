'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

const TobogganChart = () => (
    <div className="relative h-48 w-full p-4">
        <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
            <path
                d="M 20 20 C 100 20, 150 100, 280 100"
                stroke="#22c55e"
                strokeWidth="4"
                fill="none"
            />
        </svg>
        <div className="absolute top-2 left-1 flex flex-col items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
            <p className="text-xs font-semibold mt-1">Início do programa</p>
        </div>
        <div className="absolute bottom-4 right-1 flex flex-col items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
            <p className="text-xs font-semibold mt-1">Seu objetivo</p>
            <p className="text-xs text-gray-500">(2 meses)</p>
        </div>
    </div>
);


export function Step21_ProgramTimeline({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-xl mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardDescription className="text-lg text-gray-700">
          A maioria das soluções para emagrecimento não aborda a verdadeira causa do excesso de peso, como a falha de comunicação entre cérebro e estômago. A hipnoterapia é diferente.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <TobogganChart />
        <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-1 bg-green-500 rounded"></div>
            <span className="font-semibold text-gray-700">Seu progresso com o HipnoFit</span>
        </div>
        <CardDescription className="text-md text-gray-700 pt-4">
          De acordo com estudos clínicos, a hipnoterapia resolve essa falha de comunicação.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
