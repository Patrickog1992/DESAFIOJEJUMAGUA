'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step9_Testimonial({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Obtenha resultados visíveis em 4 semanas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <Image
          src="https://no.diet/static/0984222eac6b0542c1a99e84c2f38c08/81f9a/review-female.webp"
          alt="Depoimento Joana Neves"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <div className="text-left">
          <p className="font-bold">Joana Neves, 42</p>
          <p className="text-lg font-semibold">Perdi 26 kg em 4 semanas</p>
          <CardDescription>
            “Perdi 26 kg e finalmente adoro o que vejo ao espelho. Estou me sentindo linda e finalmente criei bons hábitos graças à Dieta Mediterrânea. E o melhor é que posso continuar a comer os meus pratos favoritos. Mudou tudo na minha vida.”
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
