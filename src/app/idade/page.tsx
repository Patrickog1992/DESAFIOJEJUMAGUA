'use client';

import { AgeSelection } from '@/components/age-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function AgeSelectionPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');

  const handleContinue = (age: string) => {
    if (gender) {
      router.push(`/altura?gender=${gender}&ageRange=${encodeURIComponent(age)}`);
    } else {
      // Fallback in case gender is not in the URL, though it should be.
      router.push('/');
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
