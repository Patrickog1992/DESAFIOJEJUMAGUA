'use client';

import { AgeInput } from '@/components/age-input';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function AgeInputPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (age: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('ageRange', age);
    router.push(`/altura?${params.toString()}`);
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
        <AgeInput onContinue={handleContinue} />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function AgeInputPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <AgeInputPageContent />
    </Suspense>
  );
}
