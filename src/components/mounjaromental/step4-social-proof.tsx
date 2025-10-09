'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step4_SocialProof({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-lg mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Mais de 500.000 pessoas escolheram o Método MounjaroMental</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src="https://hypnozio.com/hypnozio/quiz/people-circle.png"
          alt="Pessoas que escolheram o MounjaroMental"
          width={250}
          height={250}
          className="mx-auto"
        />
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
