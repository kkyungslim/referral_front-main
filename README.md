# 레퍼럴

### 설치

```
# 모듈 설치
npm i

# 개발 서버 실행
npm run dev

# 로컬에서 배포 테스트하기
npm run build
npm run start
```

- 기본 버전 정보

> 넥스트 15.2.1
> 리액트 19.0.0
> 테일윈드 4
> 샤드(shadcn) 2.3.0 (2025.03.16 기준, https://ui.shadcn.com/)
>
> - 샤드씨엔은 깃헙에서 직접 복사하여 사용 (https://github.com/shadcn-ui/ui)

### 디자인 컴포넌트

- 기본적으로 tailwind(v4)와 shadcn 사용
- shadcn은 이하 샤드로 통칭
- components/ 폴더 안에 버튼, 카드 등이 들어있습니다.

```typescript
// tailwind 테마 및 샤드 설정방법

//1. globals.css에 :root{}에 색상변수 추가
:root {
  --primary: #ff6900;
}

//2. 이를 테일윈드에서 사용하기 위해 globals.css 하단의 @theme{}에 추가
@theme inline {
  --color-primary: var(--primary);
  // --primary는 위의 :root에서 추가한 이름
  // 이후로 테일윈드에서 bg-primary, text-primary 등으로 사용가능
}

//3. 샤드 컴포넌트에서 위에서 정의한 것들을 사용하기 위해 variant 추가
// 예시로 버튼에 variant를 추가한다면 components/button.tsx에서
// * variant는 "primary", "secondary"라는 식으로 컴포넌트 안에서 테마를 지정하는 이름으로 생각하시면 됩니다.
const buttonVariants = {
  //...
  variant : {
    // 아래와 같이 쓰면 2번에서 정의한 primary, primary-foreground를 사용하는 식
    primary : "bg-primary text-primary-foreground"
  }
}

```
