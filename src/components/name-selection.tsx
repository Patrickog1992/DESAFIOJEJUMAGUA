'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type NameSelectionProps = {
  onContinue: (name: string) => void;
};

export function NameSelection({ onContinue }: NameSelectionProps) {
  const [name, setName] = useState('');
  const { toast } = useToast();

  const handleContinueClick = () => {
    if (!name.trim()) {
      toast({
        title: 'Nome inválido',
        description: 'Por favor, insira o seu nome.',
        variant: 'destructive',
      });
      return;
    }
    onContinue(name);
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardDescription>
          O seu plano personalizado do Jejum intermitente de água começa agora
        </CardDescription>
        <CardTitle className="font-headline text-3xl">
          Qual é o teu nome?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            className="max-w-xs text-center text-lg"
          />
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={handleContinueClick} size="lg">
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
