'use client';

import { VslFinal } from '@/components/vsl-final';
import { Suspense } from 'react';
import Image from 'next/image';

function VslFinalPageContent() {
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
        <VslFinal />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function VslFinalPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <VslFinalPageContent />
    </Suspense>
  );
}
