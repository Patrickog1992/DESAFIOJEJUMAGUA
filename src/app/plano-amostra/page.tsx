'use client';

import { SamplePlan } from '@/components/sample-plan';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';
import type { QuizData } from '../page';

function SamplePlanPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/progresso-acelerado?${params.toString()}`);
  };

  const quizData: Partial<QuizData> = {
    gender: searchParams.get('gender') as 'male' | 'female' | undefined,
    weight: searchParams.get('weight') || undefined,
    targetWeight: searchParams.get('targetWeight') || undefined,
    name: searchParams.get('name') || undefined,
    // Adicione outros dados do quiz que são necessários para o SamplePlan
  };


  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center flex-grow w-full mb-8">
        <Image
          src="https://i.imgur.com/OIEU6Mk.png"
          alt="Logo"
          width={100}
          height={100}
          className="mb-8"
        />
        <SamplePlan quizData={quizData} onContinue={handleContinue} />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function SamplePlanPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SamplePlanPageContent />
    </Suspense>
  );
}
