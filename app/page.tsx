'use client'; // 클라이언트 컴포넌트로 지정

import LandingPage from '@/components/LandingPage';

export default function Home() {
  return (
    <>
      {/* SEO 관련 메타 태그 추가 */}
      <head>
        <title>IN U IN | 인터뷰 관리 솔루션</title>
        <meta
          name="description"
          content="IN U IN은 맞춤형 인터뷰 관리 솔루션을 제공합니다. 간편하고 효율적인 인터뷰 관리를 경험해보세요."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main>
        <LandingPage />
      </main>
    </>
  );
}
