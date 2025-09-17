'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { useMemo } from 'react';

type QuizData = {
  gender?: 'male' | 'female';
  knowledge?: string;
  goals?: string[];
  bodyType?: string;
  desiredBody?: string;
  problemAreas?: string[];
  dailyActivity?: string;
  energyLevels?: string;
  exerciseFrequency?: string;
  weightFluctuation?: string;
  lastTimeAtGoalWeight?: string;
  pastDiets?: string[];
  mainReason?: string;
  height?: number;
  currentWeight?: number;
  targetWeight?: number;
  age?: number;
  mealsPerDay?: string;
  excludedProteins?: string[];
  excludedVeggies?: string[];
  excludedGrains?: string[];
};

type Props = {
  data: Partial<QuizData>;
  onContinue: () => void;
};

const IMCBar = ({ imcValue }: { imcValue: number }) => {
    const getPosition = () => {
        if (imcValue < 18.5) return (imcValue / 18.5) * 25;
        if (imcValue < 25) return 25 + ((imcValue - 18.5) / (25 - 18.5)) * 25;
        if (imcValue < 30) return 50 + ((imcValue - 25) / (30 - 25)) * 25;
        if (imcValue >= 40) return 100;
        return 75 + ((imcValue - 30) / (40 - 30)) * 25;
    };

    const position = getPosition();

    return (
        <div className="w-full">
            <div className="relative w-full h-4 bg-gradient-to-r from-blue-300 via-green-300 to-red-400 rounded-full">
                <div style={{ left: `${position}%`}} className="absolute top-[-8px] transform -translate-x-1/2 flex flex-col items-center">
                    <span className="text-xs font-bold">VOCÊ</span>
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-primary"></div>
                </div>
            </div>
            <div className="flex justify-between text-xs mt-1">
                <span>Baixo peso</span>
                <span>Saudável</span>
                <span>Excesso</span>
                <span>Obesidade</span>
            </div>
        </div>
    );
};

export function Step22_Summary({ data, onContinue }: Props) {
  const { currentWeight, height, goals, exerciseFrequency } = data;

  const { imc, imcStatus, bodyFat } = useMemo(() => {
    if (!height || !currentWeight) return { imc: 0, imcStatus: '', bodyFat: 0 };
    const heightM = height / 100;
    const imcValue = currentWeight / (heightM * heightM);
    let status = '';
    if (imcValue < 18.5) status = 'abaixo do peso';
    else if (imcValue < 25) status = 'saudável';
    else if (imcValue < 30) status = 'excesso de peso';
    else status = 'obesidade';
    
    const age = data.age || 30;
    const genderFactor = data.gender === 'male' ? 1 : 0;
    const fat = (1.20 * imcValue) + (0.23 * age) - (10.8 * genderFactor) - 5.4;

    return { imc: imcValue, imcStatus: status, bodyFat: Math.max(0, fat) };
  }, [height, currentWeight, data.age, data.gender]);
  
  const activityLevel = useMemo(() => {
    switch (exerciseFrequency) {
        case 'Nunca': return 'Baixo';
        case 'Várias vezes por mês': return 'Moderado';
        case 'Várias vezes por semana': return 'Alto';
        case 'Quase todos os dias': return 'Muito Alto';
        default: return 'Não informado';
    }
  }, [exerciseFrequency]);

  const displayGoals = useMemo(() => {
    if (goals && goals.length > 0) {
      return goals.join(', ');
    }
    return 'Não informado';
  }, [goals]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">O seu resumo pessoal</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Índice de Massa Corporal (IMC)</h3>
            <IMCBar imcValue={imc} />
            <p className="text-red-500 font-bold mt-2">❗ O seu IMC é de {imc.toFixed(1)} o que é considerado {imcStatus}</p>
            <p className="text-sm text-muted-foreground mt-1">Há muito a ganhar perdendo um pouco de peso. Utilizaremos o seu IMC para criar o programa de perda de peso de que precisa.</p>
          </div>
          <div className="space-y-2">
             <p><strong>Gordura corporal:</strong> ~{bodyFat.toFixed(1)}%</p>
             <p><strong>Nível de atividade:</strong> {activityLevel}</p>
             <p><strong>Nível de energia:</strong> Baixo</p>
             <p><strong>Objetivo:</strong> {displayGoals}</p>
          </div>
        </div>
        <div className="flex justify-center">
             <Image
                src="https://i.imgur.com/V6997ol.png"
                alt="Mulher saudável"
                width={300}
                height={400}
                className="rounded-lg"
              />
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
