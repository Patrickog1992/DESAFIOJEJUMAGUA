'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  onContinue: (data: { gender: 'male' | 'female' }) => void;
};

export function Step1_GenderSelection({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="items-center">
        <CardTitle className="text-center text-2xl font-bold">
          Perca peso e renova sua energia com a dieta mediterrânica personalizada
        </CardTitle>
        <Image
          src="https://i.imgur.com/gi1RhCn.png"
          alt="Dieta Mediterrânica"
          width={300}
          height={300}
          className="my-4 rounded-lg"
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <p className="text-center">Selecione o tipo de dieta mediterrânica:</p>
        <div className="flex flex-col gap-4">
          <Button onClick={() => onContinue({ gender: 'female' })} size="lg">Dieta para mulheres</Button>
          <Button onClick={() => onContinue({ gender: 'male' })} size="lg">Dieta para homens</Button>
        </div>
      </CardContent>
    </Card>
  );
}
