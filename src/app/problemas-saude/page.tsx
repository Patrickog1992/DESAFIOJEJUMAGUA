'use client';

import { HealthProblemsSelection } from '@/components/health-problems-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function HealthProblemsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (healthProblems: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('healthProblems', healthProblems.join(','));

    // If user selects "Nenhuma das opções acima" or has no health problems,
    // they can go to the accelerated timeline. Otherwise, they go to the standard loading page.
    if (healthProblems.includes('Nenhuma das opções acima')) {
      router.push(`/progresso-acelerado?${params.toString()}`);
    } else {
      router.push(`/plano-carregando?${params.toString()}`);
    }
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
        <HealthProblemsSelection onContinue={handleContinue} />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function HealthProblemsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <HealthProblemsPageContent />
    </Suspense>
  );
}
