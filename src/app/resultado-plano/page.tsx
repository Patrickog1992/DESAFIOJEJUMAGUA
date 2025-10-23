
'use client';

import { PlanResult } from '@/components/plan-result';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PlanResultPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/oferta-unica?${params.toString()}`);
  };

  const name = searchParams.get('name') || '';
  const currentWeight = Number(searchParams.get('weight'));
  const targetWeight = Number(searchParams.get('targetWeight'));
  const height = Number(searchParams.get('height'));
  const walkingTime = searchParams.get('walkingTime') || '20 minutos';
  const waterIntake = searchParams.get('waterIntake') || '1 copo ou menos';
  const gender = searchParams.get('gender') as 'male' | 'female' | null;

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center flex-grow w-full mb-8">
        <PlanResult
          name={name}
          currentWeight={currentWeight}
          targetWeight={targetWeight}
          height={height}
          walkingTime={walkingTime}
          waterIntake={waterIntake}
          gender={gender}
          onContinue={handleContinue}
        />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function PlanResultPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PlanResultPageContent />
    </Suspense>
  );
}
