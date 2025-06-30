import CheckIcon2 from '@/components/icons/ChckIcon2';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function SuccessPage() {
  return (
    <section>
      <div className="container mx-auto py-44">
        <div className={'flex flex-col items-center'}>
          <div className={'w-fit bg-primary rounded-4xl p-1'}>
            <CheckIcon2 width={25} height={25} />
          </div>
          <p className={'font-bold text-center text-lg my-2'}>
            '거래소 이름 UID'의 <br />
            UID 연동이 완료되었어요
            <br />
            <span className={'text-front2 text-base'}>
              성공적입니다! 축하드려요!
            </span>
          </p>
          <Button>
            <Link href="/" className={'font-bold'}>
              확인
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SuccessPage;
