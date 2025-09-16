'use client';
import { Step30_Summary2 } from '@/components/dietamediterranea/step30-summary2';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function Summary2PageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/fat-burning-rate?${searchParams.toString()}`);
  };

  const data = {
    gender: searchParams.get('gender') as 'male' | 'female' | undefined,
    height: Number(searchParams.get('height')),
    currentWeight: Number(searchParams.get('currentWeight')),
    age: Number(searchParams.get('age')),
  }

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
            <Step30_Summary2 onContinue={handleContinue} data={data} />
        </div>
      </div>
    </main>
  );
}

export default function Summary2Page() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Summary2PageContent />
        </Suspense>
    )
}
