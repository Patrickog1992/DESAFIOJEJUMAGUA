'use client';
import { Step17_MainReason } from '@/components/dietamediterranea/step17-main-reason';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function MainReasonPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { mainReason: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mainReason', data.mainReason);
    router.push(`/dietamediterranea/height?${params.toString()}`);
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
            <Step17_MainReason onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function MainReasonPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <MainReasonPageContent />
        </Suspense>
    )
}
