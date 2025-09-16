'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

type Props = {
  onComplete: () => void;
};

const loadingSteps = [
  'Revendo suas respostas...',
  'Analisando as suas preferências...',
  'Ajustando o cronograma de perda de peso...',
  'Finalizando o seu plano personalizado...',
];

export function Step28_Loading({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

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
    }, 80); // 8 seconds total

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const stepIndex = Math.floor(progress / (100 / loadingSteps.length));
    if (stepIndex < loadingSteps.length) {
      setCurrentStep(stepIndex);
    } else {
      setCurrentStep(loadingSteps.length -1)
    }
  }, [progress]);

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">A preparar o seu plano...</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle className="text-gray-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
            <circle
              className="text-primary"
              strokeWidth="10"
              strokeDasharray="282.74"
              strokeDashoffset={282.74 - (progress / 100) * 282.74}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            />
            <text x="50" y="50" textAnchor="middle" dy=".3em" className="text-3xl font-bold fill-current">{progress}%</text>
          </svg>
        </div>
        <div className="w-full space-y-2">
            {loadingSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-2 text-lg">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-green-500' : 'bg-gray-300'}`}>
                        {index <= currentStep && <Check className="h-4 w-4 text-white" />}
                    </div>
                    <span className={index <= currentStep ? 'text-foreground' : 'text-muted-foreground'}>{step}</span>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
