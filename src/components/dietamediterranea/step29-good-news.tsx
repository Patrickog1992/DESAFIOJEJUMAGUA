'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { useMemo } from 'react';
import { format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type Props = {
  onContinue: () => void;
};

export function Step29_GoodNews({ onContinue }: Props) {
  const chartData = useMemo(() => {
    const today = new Date();
    const endDate = addDays(today, 45);

    return [
      { date: format(today, 'dd/MM'), weight: 80 }, // Example weights
      { date: format(endDate, 'dd/MM'), weight: 70 },
    ];
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-600">TEMOS UMA BOA NOTÍCIA!</CardTitle>
        <CardDescription>COM BASE NA SUA RESPOSTA VOCÊ VAI CONSEGUIR CHEGAR AO SEU PESO IDEAL EM MENOS DIAS</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 40, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['dataMin - 5', 'dataMax + 5']} hide />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={3}>
                <LabelList dataKey="weight" position="top" formatter={(value: number) => `${value}kg`} />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-lg">Com base nas suas preferências alimentares, criámos</p>
        <p className="text-4xl font-bold text-primary my-2">500+</p>
        <p className="text-lg">Combinações de refeições que são perfeitas para si e que o ajudarão a atingir o seu objetivo de peso da forma mais agradável!</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
