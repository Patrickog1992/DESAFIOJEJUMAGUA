'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useMemo } from 'react';

type Props = {
  data: QuizData;
  onContinue: () => void;
};

const IMCBar = ({ imcValue, status }: { imcValue: number; status: string }) => {
    const getPosition = () => {
        if (imcValue < 18.5) return (imcValue / 18.5) * 25;
        if (imcValue < 25) return 25 + ((imcValue - 18.5) / (25 - 18.5)) * 25;
        if (imcValue < 30) return 50 + ((imcValue - 25) / (30 - 25)) * 25;
        if (imcValue >= 40) return 100;
        return 75 + ((imcValue - 30) / (40 - 30)) * 25;
    };

    const position = getPosition();

    return (
        <div className="w-full">
             <div className="flex justify-between font-bold text-lg mb-2">
                <span>Você - {imcValue.toFixed(1)}</span>
            </div>
            <div className="relative w-full h-4 bg-gradient-to-r from-blue-300 via-green-300 to-red-400 rounded-full">
                <div style={{ left: `${position}%`}} className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
                <span>Baixo peso</span>
                <span>Saudável</span>
                <span>Excesso</span>
                <span>Obeso</span>
            </div>
        </div>
    );
};

export function Step30_Summary2({ data, onContinue }: Props) {
  const { currentWeight, height, age } = data;

  const { imc, imcStatus } = useMemo(() => {
    if (!height || !currentWeight) return { imc: 0, imcStatus: '' };
    const heightM = height / 100;
    const imcValue = currentWeight / (heightM * heightM);
    let status = '';
    if (imcValue < 18.5) status = 'abaixo do peso';
    else if (imcValue < 25) status = 'saudável';
    else if (imcValue < 30) status = 'excesso de peso';
    else status = 'obeso';
    return { imc: imcValue, imcStatus: status };
  }, [height, currentWeight]);

  const metabolicAge = (age || 0) + 5; // Simplified calculation

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">O seu resumo pessoal</CardTitle>
        <CardDescription>Com base nas respostas do seu questionário, parece que pode ter uma idade metabólica aumentada, o que pode levar a um excesso de peso corporal.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">IMC Atual</h3>
          <IMCBar imcValue={imc} status={imcStatus} />
        </div>
        <div className="grid grid-cols-2 gap-4 text-left">
            <div>
                <p className="font-semibold">A sua categoria de peso:</p>
                <p className="text-primary font-bold text-lg">{imcStatus}</p>
            </div>
             <div>
                <p className="font-semibold">Idade metabólica:</p>
                <p className="text-primary font-bold text-lg">~{metabolicAge} anos</p>
            </div>
             <div>
                <p className="font-semibold">O seu metabolismo é:</p>
                <p className="text-primary font-bold text-lg">Lento</p>
            </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
