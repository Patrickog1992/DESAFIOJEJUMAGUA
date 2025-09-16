'use client';
import { Step21_Age } from '@/components/dietamediterranea/step21-age';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function AgePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { age: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('age', data.age.toString());
    router.push(`/dietamediterranea/summary?${params.toString()}`);
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
            <Step21_Age onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function AgePage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <AgePageContent />
        </Suspense>
    )
}
