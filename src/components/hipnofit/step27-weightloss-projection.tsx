'use client';

import type { HipnoFitQuizData } from '@/app/hipnofit/page';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { format, addDays, addMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

type Props = {
  data: Partial<HipnoFitQuizData>;
  onContinue: () => void;
};

export function Step27_WeightLossProjection({ data, onContinue }: Props) {
    const { weight, targetWeight } = data;

    const chartData = useMemo(() => {
        const today = new Date();
        const endDate = addDays(today, 45);
        return [
            { date: format(today, 'dd/MM'), weight: weight || 0 },
            { date: format(endDate, 'dd/MM'), weight: targetWeight || 0 }
        ];
    }, [weight, targetWeight]);

    const targetDate = useMemo(() => {
        return format(addMonths(new Date(), 2), 'dd/MM/yyyy', { locale: ptBR });
    }, []);

    return (
        <Card className="shadow-lg border-green-200">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-green-600 font-headline">Você vai perder {((weight || 0) - (targetWeight || 0))} kg em até 45 dias!</CardTitle>
                <CardDescription className="text-lg">Comece a ver resultados nos primeiros 7 dias!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="font-semibold text-center text-xl">Gráfico de perda de peso:</p>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                            <Tooltip />
                            <Line type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={3}>
                                <LabelList dataKey="weight" position="top" formatter={(value: number) => `${value}kg`} />
                            </Line>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-center text-lg">Com base em suas respostas, prevemos que você atingirá sua meta antes de <span className="font-bold">{targetDate}</span></p>
            </CardContent>
            <CardFooter className="justify-center">
                <Button size="lg" onClick={onContinue}>Continuar</Button>
            </CardFooter>
        </Card>
    );
}
