'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

type Props = {
  onContinue: () => void;
};

const benefits = [
  'Perda de peso eficaz',
  'Metabolismo mais rápido e melhor controle da glicose',
  'Melhoria do sono, do humor e dos níveis de energia',
  'Abrandamento do processo de envelhecimento',
];

export function Step4_DietInfo({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
          <Image
            src="https://no.diet/static/2fee180fc835d2b8a6c1e917a4f27639/c8c3b/food.webp"
            alt="Comida mediterrânea"
            width={500}
            height={300}
            className="mx-auto rounded-lg"
          />
        <CardTitle className="text-2xl font-bold mt-4">O que é a dieta mediterrânica?</CardTitle>
      </CardHeader>
      <CardContent className="text-left space-y-4">
        <p>
          A dieta mediterrânica é um regime alimentar equilibrado e rico em nutrientes, concebido para acelerar o metabolismo e a sua capacidade de queimar gordura.
        </p>
        <div>
          <h3 className="font-semibold mb-2">Benefícios da dieta mediterrânica:</h3>
          <ul className="space-y-2">
            {benefits.map(benefit => (
              <li key={benefit} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">VEJA A REPORTAGEM</Button>
      </CardFooter>
    </Card>
  );
}
