'use client';
import { Step6_BodyType } from '@/components/dietamediterranea/step6-body-type';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function BodyTypePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { bodyType: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('bodyType', data.bodyType);
    router.push(`/dietamediterranea/desired-body?${params.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step6_BodyType onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function BodyTypePage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <BodyTypePageContent />
        </Suspense>
    )
}
