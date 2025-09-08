'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

type ChallengeIntroProps = {
  onContinue: () => void;
};

const benefits = [
  'Perda de peso',
  'Pode reduzir a resistência à insulina, baixando o açúcar no sangue em 3–6% e os níveis de insulina em 20–31%',
  'Reduz o risco de inflamação',
  'Reduz o colesterol "mau" LDL, os triglicéridos no sangue, marcadores inflamatórios e o açúcar no sangue',
  'Aumenta a hormona cerebral BDNF e pode ajudar no crescimento de novas células nervosas',
];

export function ChallengeIntro({ onContinue }: ChallengeIntroProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          O que é o Desafio do Jejum de Água?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <p>
          Este desafio do jejum de água é um sofisticado programa de perda de
          peso baseado no modelo de Jejum Intermitente criado por nutricionistas
          certificados da UE. Ajudou mais de 500.000 pessoas a perder peso e a
          adotar hábitos alimentares e um estilo de vida muito mais saudáveis.
        </p>
        <p>
          Jejum Intermitente é um padrão alimentar onde alternas entre períodos
          de comer e jejuar. Podes ainda comer uma quantidade normal de comida
          mas apenas num período de tempo mais curto, que se chama "janela de
          alimentação". É um caminho saudável para a tua perda de peso.
        </p>
        <div>
          <h4 className="font-semibold text-lg mb-2">
            Benefícios do jejum intermitente:
          </h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">
          VEJA A REPORTAGEM
        </Button>
      </CardFooter>
    </Card>
  );
}
