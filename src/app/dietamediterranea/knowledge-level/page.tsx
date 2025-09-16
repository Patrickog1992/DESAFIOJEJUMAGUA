'use client';
import { Step3_KnowledgeLevel } from '@/components/dietamediterranea/step3-knowledge-level';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function KnowledgeLevelPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { knowledge: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('knowledge', data.knowledge);
    router.push(`/dietamediterranea/diet-info?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
       <div className="flex flex-col items-center justify-center flex-grow w-full mb-8">
        <Image
            src="https://i.imgur.com/Ds0KCiY.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-8"
        />
        <div className="w-full max-w-4xl">
            <Step3_KnowledgeLevel onContinue={handleContinue} />
        </div>
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Dieta mediterrânea todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function KnowledgeLevelPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <KnowledgeLevelPageContent />
        </Suspense>
    )
}
