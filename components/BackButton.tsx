'use client';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.back();
      }}
    >
      뒤로가기
    </Button>
  );
};

export default BackButton;
