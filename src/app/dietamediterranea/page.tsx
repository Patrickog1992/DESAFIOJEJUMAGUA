'use client';
import { Step1_GenderSelection } from '@/components/dietamediterranea/step1-gender-selection';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function DietaMediterraneaPageContent() {
  const router = useRouter();

  const handleContinue = (data: { gender: 'male' | 'female' }) => {
    router.push(`/dietamediterranea/social-proof?gender=${data.gender}`);
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
            <Step1_GenderSelection onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function DietaMediterraneaPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <DietaMediterraneaPageContent />
        </Suspense>
    )
}
