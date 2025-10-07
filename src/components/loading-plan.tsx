'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type LoadingPlanProps = {
  onComplete: () => void;
};

const messages = [
  'Você está melhor que 89% das pessoas para perder peso com o nosso plano de jejum intermitente.',
  'Com base nas tuas respostas, vai conseguir perder até 5 kg na tua primeira semana com o nosso Desafio do Jejum de água.',
  '89% dos utilizadores com um perfil muito semelhante ao teu atingiram os seus objetivos de peso dentro dos prazos previstos.',
  'O teu perfil de peso e saúde é ótimo para jejum intermitente.',
];

export function LoadingPlan({ onComplete }: LoadingPlanProps) {
  const [progress, setProgress] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total for 100%

    const messageInterval = setInterval(() => {
      setCurrentMessageIndex(prev => (prev + 1) % messages.length);
    }, 2000); // Change message every 2 seconds

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg text-center">
      <CardHeader>
        <div className="relative w-48 h-48 mx-auto mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
            />
            <circle
              className="text-primary"
              strokeWidth="10"
              strokeDasharray="282.743338823"
              strokeDashoffset={`calc(282.743338823 - (282.743338823 * ${progress}) / 100)`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
            <text
              x="50"
              y="50"
              className="text-3xl font-bold"
              textAnchor="middle"
              dy=".3em"
              fill="hsl(var(--foreground))"
            >
              {Math.round(progress)}%
            </text>
          </svg>
        </div>
        <CardTitle className="font-headline text-2xl">
          Estamos gerando o seu plano de Jejum de água personalizado
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg min-h-[100px]">
          {messages[currentMessageIndex]}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
