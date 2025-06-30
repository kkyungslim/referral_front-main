import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import TooltipIcon from '@/components/icons/TooltipIcon';
import CircularProgressBar from '@/components/CircularProgressBar';

function FeeInfo() {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className={'my-6 font-bold'}>OKX</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <div className={'border-b-2 pb-1'}>
              <h4 className={'text-primary font-bold'}>수수료</h4>
            </div>
            <Card
              className={'border-primary border-3 mt-5 items-center gap-1 '}
            >
              <h3 className={'text-primary font-bold'}>60%</h3>
              <div
                className={'text-center border-t-3 pt-2 border-primary w-full'}
              >
                <h4 className={'text-front2 font-bold'}>
                  수수료
                  <br />
                  페이백
                </h4>
                <p className={'text-sm text-front2 '}>(기본30%)</p>
              </div>
            </Card>
          </div>
          <div>
            <div className={'border-b-2 pb-1'}>
              <h4 className={'font-bold text-front2'}>
                <span className={'mr-1'}>수수료율</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <TooltipIcon width={17} height={17} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className={'text-xs font-semibold'}>
                        페이백을 고려한
                        <br />
                        수수료율이에요.
                        <br />
                        OKX 정책에
                        <br />
                        따른 수수료 공제가
                        <br /> 발생할 수 있어요.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h4>
            </div>
            <div className={'w-full mt-5'}>
              <div className={''}>
                <h5 className={'text-left text-front2'}>
                  <span className={'font-bold'}>지정가</span>{' '}
                  <span
                    className={
                      'opacity-60 font-semibold relative inline-block before:absolute before:w-full before:h-[2px] before:block before:bg-front2 before:top-0 before:bottom-0 before:my-auto'
                    }
                  >
                    0.02%
                  </span>
                </h5>
                <h4 className={'text-primary font-bold text-right'}>0.008%</h4>
              </div>
              <div className={'mt-4'}>
                <h5 className={'text-left text-front2'}>
                  <span className={'font-bold'}>시장가</span>{' '}
                  <span
                    className={
                      'opacity-60 font-semibold relative inline-block before:absolute before:w-full before:h-[2px] before:block before:bg-front2 before:top-0 before:bottom-0 before:my-auto'
                    }
                  >
                    0.05%
                  </span>
                </h5>
                <h4 className={'text-primary font-bold text-right'}>0.020%</h4>
              </div>
            </div>
          </div>
          <div className={''}>
            <div className={'border-b-2 pb-1'}>
              <h4 className={'text-front2 font-bold'}>마감률</h4>
            </div>
            <div className={'mt-5'}>
              <CircularProgressBar progress={93} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeeInfo;
