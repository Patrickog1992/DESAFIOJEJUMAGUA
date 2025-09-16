'use client';
import { Step7_DesiredBody } from '@/components/dietamediterranea/step7-desired-body';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function DesiredBodyPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { desiredBody: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('desiredBody', data.desiredBody);
    router.push(`/dietamediterranea/problem-areas?${params.toString()}`);
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
            <Step7_DesiredBody onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function DesiredBodyPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <DesiredBodyPageContent />
        </Suspense>
    )
}
