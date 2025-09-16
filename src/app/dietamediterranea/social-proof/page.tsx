'use client';
import { Step2_SocialProof } from '@/components/dietamediterranea/step2-social-proof';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SocialProofPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/knowledge-level?${searchParams.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step2_SocialProof onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function SocialProofPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <SocialProofPageContent />
        </Suspense>
    )
}
