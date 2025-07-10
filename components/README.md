# 레이아웃 컴포넌트

이 디렉토리에는 제공해주신 비율에 맞는 레이아웃 컴포넌트들이 포함되어 있습니다.

## 레이아웃 비율

```
┌────────────────────────────┐
│   상단 제목 영역 (1)       │
├────────────────────────────┤
│                            │
│                            │
│                            │
│                            │
│                            │
│   메인 컨텐츠 영역 (10)     │
│                            │
│                            │
│                            │
│                            │
│                            │
├────────────────────────────┤
│   광고 배너 영역 (1)        │
└────────────────────────────┘
```

- **상단 제목 영역**: 전체 높이의 1/12
- **메인 컨텐츠 영역**: 전체 높이의 10/12
- **광고 배너 영역**: 전체 높이의 1/12

## 컴포넌트 목록

### 1. LayoutContainer
- 전체 레이아웃을 감싸는 컨테이너
- 다크모드/라이트모드 자동 지원
- 화면 전체 높이를 차지

### 2. MainContentSection
- 메인 컨텐츠 영역
- Props: `children` (React.ReactNode)
- 스크롤 가능한 영역
- 내부에 컨텐츠를 자유롭게 배치 가능

### 3. AdBannerSection
- 광고 배너 영역

### 4. MainLayout
- 모든 컴포넌트를 조합한 메인 레이아웃
- Props: `children` (React.ReactNode, optional)
- 기본 컨텐츠 제공

## 사용 예시

### 기본 사용법
```tsx
import { MainLayout } from '../components/MainLayout';

export default function MyScreen() {
  return (
    <MainLayout>
      {/* 여기에 컨텐츠를 넣으세요 */}
      <Text>내 컨텐츠</Text>
    </MainLayout>
  );
}
```

### 개별 컴포넌트 사용법
```tsx
import { LayoutContainer } from '../components/LayoutContainer';
import { MainContentSection } from '../components/MainContentSection';
import { AdBannerSection } from '../components/AdBannerSection';

export default function CustomScreen() {
  return (
    <LayoutContainer>
      <MainContentSection>
        <Text>커스텀 컨텐츠</Text>
      </MainContentSection>
      <AdBannerSection />
    </LayoutContainer>
  );
}
```

## 특징

- **반응형 디자인**: 다양한 화면 크기에 대응
- **다크모드 지원**: 자동으로 라이트/다크 모드 전환
- **재사용 가능**: 각 컴포넌트를 독립적으로 사용 가능
- **타입 안전성**: TypeScript로 작성되어 타입 안전성 보장
- **접근성**: 터치 피드백과 적절한 색상 대비 제공 (AdBannerSection에는 해당 없음)

## 파일 구조

```
components/
├── LayoutContainer.tsx      # 메인 컨테이너
├── MainContentSection.tsx   # 메인 컨텐츠 영역
├── AdBannerSection.tsx      # 광고 배너 영역
├── MainLayout.tsx          # 전체 레이아웃 조합
└── README.md               # 이 파일
``` 