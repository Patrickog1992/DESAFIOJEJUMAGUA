'use client';

import { BodyShapeSelection } from '@/components/body-shape-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function BodyShapePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (selectedShape: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('bodyShape', encodeURIComponent(selectedShape));
    
    router.push(
      `/jejum-intermitente?${params.toString()}`
    );
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
        <BodyShapeSelection onContinue={handleContinue} />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function BodyShapePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <BodyShapePageContent />
    </Suspense>
  );
}
