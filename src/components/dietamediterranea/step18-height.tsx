'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

type Props = {
  onContinue: (data: { height: number }) => void;
};

export function Step18_Height({ onContinue }: Props) {
  const [height, setHeight] = useState('');
  const { toast } = useToast();

  const handleContinue = () => {
    const heightNum = parseInt(height);
    if (isNaN(heightNum) || heightNum < 100 || heightNum > 250) {
      toast({ title: 'Altura inválida', description: 'Por favor, insira uma altura entre 100 e 250 cm.', variant: 'destructive' });
      return;
    }
    onContinue({ height: heightNum });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Qual é a sua altura?</CardTitle>
        <CardDescription>O índice de massa corporal (IMC) é uma medida que utiliza a sua altura e peso para determinar se o seu peso é saudável.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Sua altura"
              className="w-48 text-center text-lg"
            />
            <span>cm</span>
        </div>
        <p className="text-sm text-muted-foreground">Vamos calcular o seu índice de massa corporal</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={handleContinue} size="lg" disabled={!height}>Continuar</Button>
      </CardFooter>
    </Card>
  );
}
