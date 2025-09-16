'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

type Props = {
  onContinue: (data: Partial<QuizData>) => void;
};

export function Step21_Age({ onContinue }: Props) {
  const [age, setAge] = useState('');
  const { toast } = useToast();

  const handleContinue = () => {
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      toast({ title: 'Idade inválida', description: 'Por favor, insira uma idade entre 18 e 100 anos.', variant: 'destructive' });
      return;
    }
    onContinue({ age: ageNum });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Qual é a sua idade?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Sua idade"
              className="w-48 text-center text-lg"
            />
        </div>
        <CardDescription className="max-w-md">
            Aqui solicitamos sua idade para criar seu plano individual. As pessoas mais velhas tendem a ter mais gordura corporal e um metabolismo mais lento do que as pessoas mais novas com o mesmo IMC.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={handleContinue} size="lg" disabled={!age}>Continuar</Button>
      </CardFooter>
    </Card>
  );
}
