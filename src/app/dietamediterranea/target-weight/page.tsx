'use client';
import { Step20_TargetWeight } from '@/components/dietamediterranea/step20-target-weight';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function TargetWeightPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentWeight = searchParams.get('currentWeight');

  const handleContinue = (data: { targetWeight: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('targetWeight', data.targetWeight.toString());
    router.push(`/dietamediterranea/age?${params.toString()}`);
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
            <Step20_TargetWeight onContinue={handleContinue} currentWeight={currentWeight ? parseInt(currentWeight) : undefined} />
        </div>
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Dieta mediterrânea todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function TargetWeightPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <TargetWeightPageContent />
        </Suspense>
    )
}
