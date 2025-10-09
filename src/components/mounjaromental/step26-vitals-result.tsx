'use client';

import type { MounjaroMentalQuizData } from '@/app/mounjaromental/page';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

type Props = {
  data: Partial<MounjaroMentalQuizData>;
  onContinue: () => void;
};

export function Step26_VitalsResult({ data, onContinue }: Props) {
    const { age, height, weight } = data;

    const { metabolicAge, imc } = useMemo(() => {
        const ageNum = age ? parseInt(age.split('-')[0]) : 30;
        const metaAge = ageNum + 10;

        let imcValue = 0;
        if (height && weight) {
            const heightInMeters = height / 100;
            imcValue = weight / (heightInMeters * heightInMeters);
        }
        return { metabolicAge: metaAge, imc: imcValue };
    }, [age, height, weight]);

    return (
        <Card className="shadow-lg border-blue-200">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-blue-600 font-headline">SUCESSO ! O Método MounjaroMental vai funcionar para você !</CardTitle>
                <CardDescription className="text-lg">A mudança de mentalidade é segura para você?</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
                <div className="bg-green-100 text-green-800 p-3 rounded-lg flex items-center justify-center gap-2">
                    <Check className="h-5 w-5" />
                    <span className="font-semibold">Você é um ótimo candidato para a mudança de mentalidade voltada ao controle de peso.</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                    <div className="bg-red-100 text-red-800 p-4 rounded-lg">
                        <p className="font-semibold">Sua idade metabólica:</p>
                        <p className="font-bold text-2xl">{metabolicAge} anos</p>
                        <p className="text-sm">Seu corpo está envelhecendo mais rápido do que deveria.</p>
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
                        <p className="font-semibold">Índice de Massa Corporal (IMC):</p>
                        <p className="font-bold text-2xl">{imc.toFixed(1)}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-center">
                <Button size="lg" onClick={onContinue}>Continuar</Button>
            </CardFooter>
        </Card>
    );
}
