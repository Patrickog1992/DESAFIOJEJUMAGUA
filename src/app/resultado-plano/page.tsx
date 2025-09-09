'use client';

import { PlanResult } from '@/components/plan-result';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PlanResultPageContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name') || '';
  const currentWeight = Number(searchParams.get('weight'));
  const targetWeight = Number(searchParams.get('targetWeight'));
  const height = Number(searchParams.get('height'));
  const walkingTime = searchParams.get('walkingTime') || '20 minutos';
  const waterIntake = searchParams.get('waterIntake') || '1 copo ou menos';
  const gender = searchParams.get('gender') as 'male' | 'female' | null;

  return (
    <main className="min-h-screen w-full bg-background">
      <PlanResult
        name={name}
        currentWeight={currentWeight}
        targetWeight={targetWeight}
        height={height}
        walkingTime={walkingTime}
        waterIntake={waterIntake}
        gender={gender}
      />
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
