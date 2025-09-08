'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

type ReportPageProps = {
  onContinue: () => void;
};

export function ReportPage({ onContinue }: ReportPageProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardContent className="p-0">
        <Image
          src="https://i.imgur.com/wnNAKb3.jpeg"
          alt="Reportagem"
          width={800}
          height={600}
          className="rounded-t-lg w-full h-auto object-contain"
          data-ai-hint="news report article"
        />
      </CardContent>
      <CardFooter className="justify-center p-6">
        <Button onClick={onContinue} size="lg">
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
