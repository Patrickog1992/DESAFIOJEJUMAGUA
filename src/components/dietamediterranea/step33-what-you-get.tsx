'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

type Props = {
  onContinue: () => void;
};

const features = [
    { title: 'Mais de 500 Receitas Mediterrânicas', description: 'Plano personalizado perfeito para você e que o ajudará a perder peso da forma mais agradável.' },
    { title: 'Mais de 100 Treinos e Exercícios', description: 'Treinos simples, exercícios de ioga, guias de meditação e muito mais para o ajudar a perder peso mais rapidamente e a ver resultados mais cedo.' },
    { title: 'Desafios Motivacionais', description: 'Desafios saudáveis concebidos para o manter consistente e motivado, levando a sua jornada de perda de peso e bem-estar para o próximo nível.' },
    { title: 'Guias de Nutrição e Saúde', description: 'Guias aprofundados sobre nutrição, treinos, estilo de vida saudável e outras dicas úteis escritas pelos melhores especialistas em nutrição, treinadores pessoais e psicólogos.' },
    { title: 'Acompanhamento e visualização do progresso', description: 'Todas as ferramentas no seu bolso para acompanhar e visualizar o seu progresso incrível e atingir os seus objetivos de peso a tempo.' },
]

export function Step33_WhatYouGet({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">O que inclui o seu plano Dieta Mediterrânea</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map(feature => (
            <div key={feature.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mt-1">
                    <Check className="h-5 w-5" />
                </div>
                <div>
                    <h4 className="font-bold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
            </div>
        ))}
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
