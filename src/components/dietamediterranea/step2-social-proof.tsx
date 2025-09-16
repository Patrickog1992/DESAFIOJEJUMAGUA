'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step2_SocialProof({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Mais de 41,7 milhões de mulheres já escolheram os nossos planos</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src="https://no.diet/static/b65b76658a9c06da5fddbc6ffa4071ae/eeaa2/users-female.webp"
          alt="Mulheres que escolheram o plano"
          width={500}
          height={300}
          className="mx-auto"
        />
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
