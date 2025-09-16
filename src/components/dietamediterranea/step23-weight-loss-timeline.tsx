'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import type { QuizData } from '@/app/dietamediterranea/page';
import { useMemo } from 'react';
import { format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type Props = {
  data: QuizData;
  onContinue: () => void;
};

export function Step23_WeightLossTimeline({ data, onContinue }: Props) {
  const { currentWeight, targetWeight } = data;

  const chartData = useMemo(() => {
      const today = new Date();
      const endDate = addDays(today, 60);

      return [
          { date: format(today, 'dd/MM/yyyy', { locale: ptBR }), weight: currentWeight },
          { date: format(endDate, 'dd/MM/yyyy', { locale: ptBR }), weight: targetWeight }
      ]
  }, [currentWeight, targetWeight]);
  
  const endDateFormatted = format(addDays(new Date(), 60), 'dd/MM/yyyy', { locale: ptBR });

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Prevemos que irá pesar {targetWeight} kg em {endDateFormatted}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" strokeWidth={3}>
                 <LabelList dataKey="weight" position="top" formatter={(value: number) => `${value}kg`} />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
         <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">🙌 Boas notícias!</p>
          <p className="text-green-700">Com base no feedback dos utilizadores da Dieta Mediterrânea, prevemos que atingirá o seu peso-alvo de {targetWeight}kg em {endDateFormatted}</p>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
