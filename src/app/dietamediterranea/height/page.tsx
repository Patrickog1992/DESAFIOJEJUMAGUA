'use client';
import { Step18_Height } from '@/components/dietamediterranea/step18-height';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HeightPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { height: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('height', data.height.toString());
    router.push(`/dietamediterranea/current-weight?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step18_Height onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function HeightPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <HeightPageContent />
        </Suspense>
    )
}
