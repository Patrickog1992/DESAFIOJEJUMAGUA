'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function FinalPage() {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">
          Já ajudámos 497.565 pessoas a perder peso! Vamos alcançar também o teu
          corpo ideal!
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Image
          src="https://i.imgur.com/Bljsc8Q.jpeg"
          alt="Success"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          data-ai-hint="woman celebrating"
        />
      </CardContent>
    </Card>
  );
}
