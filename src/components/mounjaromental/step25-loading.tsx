'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type Props = {
    onComplete: () => void;
}

const loadingSteps = [
  'Analisando suas respostas...',
  'Avaliando seus sintomas',
  'Identificando a causa raiz',
  'Alinhando com suas metas',
];

export function Step25_Loading({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [currentStepText, setCurrentStepText] = useState(loadingSteps[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 4 seconds total

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const stepIndex = Math.min(Math.floor(progress / (100 / loadingSteps.length)), loadingSteps.length - 1);
    setCurrentStepText(loadingSteps[stepIndex]);
  }, [progress]);

  return (
    <Card className="w-full max-w-lg mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Estamos analisando suas respostas...</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <div className="w-full">
            <Progress value={progress} />
            <p className="mt-2 text-lg font-semibold">{progress}%</p>
        </div>
        <div className="w-full text-left space-y-2">
            <div className="flex items-center gap-2 text-md">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${progress >= 25 ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {progress >= 25 && <Check className="h-4 w-4 text-white" />}
                </div>
                <span>Sintomas</span>
            </div>
            <div className="flex items-center gap-2 text-md">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${progress >= 50 ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {progress >= 50 && <Check className="h-4 w-4 text-white" />}
                </div>
                <span>Causa raiz</span>
            </div>
            <div className="flex items-center gap-2 text-md">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${progress >= 75 ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {progress >= 75 && <Check className="h-4 w-4 text-white" />}
                </div>
                <span>Metas</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
