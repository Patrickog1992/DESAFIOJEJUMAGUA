'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/quiz');
  }, [router]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <p>Carregando o quiz...</p>
    </main>
  );
}
