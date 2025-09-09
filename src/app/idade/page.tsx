'use client';

import { AgeSelection } from '@/components/age-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function AgeSelectionPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (age: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('ageRange', age); // Though it's a single age, we use the same param name for simplicity
    
    // Check if coming from the initial flow or the final flow
    if (searchParams.has('gender')) {
      router.push(`/objetivo?${params.toString()}`);
    } else {
       // This is the flow after the final page, it should probably go somewhere else,
       // but for now, we'll assume it might restart or go to a summary.
       // Let's keep the original logic for now which was to go to `objetivo`.
       router.push(`/objetivo?${params.toString()}`);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <Image
          src="https://i.imgur.com/OIEU6Mk.png"
          alt="Logo"
          width={100}
          height={100}
          className="mb-8"
        />
        <AgeSelection onContinue={handleContinue} />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function AgeSelectionPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <AgeSelectionPageContent />
    </Suspense>
  );
}
