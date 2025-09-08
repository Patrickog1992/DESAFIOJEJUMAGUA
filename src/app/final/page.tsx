'use client';

import { FinalPage } from '@/components/final-page';
import { useRouter } from 'next/navigation';

export default function FinalPageRoute() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/');
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <FinalPage onContinue={handleContinue} />
    </main>
  );
}
