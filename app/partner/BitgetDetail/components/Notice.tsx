function Notice({ name }: { name: string }) {
  return (
    <section className={'bg-bg1'}>
      <div className="container mx-auto py-8">
        <h2
          className={
            'text-base text-front2 mb-3 pl-2 relative after:block after:w-[3px] after:h-1/2 after:absolute after:left-0 after:top-0 after:bottom-0 after:my-auto after:bg-front2'
          }
        >
          유의사항
        </h2>
        <ul className={'list-disc pl-5 flex flex-col gap-3'}>
          <li className={'marker:text-front2'}>
            <p className={'text-front2 text-sm'}>
              {name}은 테더베이스와 공식 파트너십을 맺은 제휴 관계입니다.
            </p>
          </li>
          <li className={'marker:text-front2'}>
            <p className={'text-front2 text-sm'}>
              테더베이스 계정으로 거래하는 수수료는 거래소의 최대 수수료에 일정
              할인율을 적용한 수수료입니다. 트레이딩을 통한 수수료 페이백은 매일
              11:00 UTC시에 트레이더님의 테더베이스 계정으로 지급됩니다.
            </p>
          </li>
          <li className={'marker:text-front2'}>
            <p className={'text-front2 text-sm'}>
              테더베이스에서 출금한 자산은 {name}의 Spot 지갑에서 확인
              가능합니다.
            </p>
          </li>
          <li className={'marker:text-front2'}>
            <p className={'text-front2 text-sm'}>
              누적된 페이백의 보장 기간은 안전한 정보보호를 위해 탈퇴할 때까지만
              보관됩니다. 거래소에서 지급하는 증정금 및 보너스는 유효한
              리워드으로 잡히지 않으며, 증점금 및 보너스를 사용하기 전까지는
              페이백이 이뤄지지 않습니다.
            </p>
          </li>
          <li className={'marker:text-front2'}>
            <p className={'text-front2 text-sm'}>
              거래소별로 마감 인원이 정해져 있어 마감 이후에는 해당 거래소의
              페이백 서비스 이용이 제한될 수 있습니다.
            </p>
          </li>
          <li className={'marker:text-front2'}>
            <p className={'text-front2 text-sm'}>
              당사 혹은 거래소의 사정으로 페이백 조건은 변경될 수 있습니다.
            </p>
          </li>
          <li className={'marker:text-front2'}>
            <p className={'text-front2 text-sm'}>
              당사 혹은 거래소의 사정으로 제휴관계는 종료될 수 있으며, 이후에는
              페이백 서비스를 이용하기 어려울 수 있습니다.
            </p>
          </li>
          <li className={'marker:text-front2'}>
            <p className={'text-front2 text-sm'}>
              클릭 파밍(Click Farming)이나 워시 트레이딩(Wash Trading)을 포함한
              고빈도 거래(High frequency trading)는 거래소에서 규정 위반으로
              간주됩니다. 해당 행위가 발생된 트레이더 또는 UID에 대한 커미션
              중단 처리는 글로벌 플랫폼인 테더베이스에서도 동일하게 적용됩니다.
              또한 리스크 컨트롤 규정 위반과 고빈도 거래에 관한 내용은
              각거래소의 정책 규정을 참조해주시길 바랍니다.
            </p>
          </li>
          <li className={'marker:text-front2'}>
            <p className={'text-front2 text-sm'}>
              테더베이스 레퍼럴 코드로 가입한 거래소의 계정을 탈퇴할 경우,
              테더베이스에서 페이백 출금이 불가합니다.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Notice;
