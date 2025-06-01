'use client';
import { useRouter } from 'next/navigation';

export function useNavigate() {
  const router = useRouter();

  const navigate = (target: 'back' | string) => {
    if (target === 'back') {
      if (typeof window !== 'undefined' && window.history.length > 1) {
        router.back();
      } else {
        router.push('/');
      }
    } else {
      router.push(target);
    }
  };

  return navigate;
}
