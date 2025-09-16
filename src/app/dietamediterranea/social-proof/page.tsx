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
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step2_SocialProof onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function SocialProofPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <SocialProofPageContent />
        </Suspense>
    )
}
