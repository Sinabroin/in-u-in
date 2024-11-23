import './globals.css'; // 전역 스타일 import
import { Metadata } from 'next'; // SEO 및 메타데이터 설정을 위한 Next.js 도구

export const metadata: Metadata = {
  title: 'IN U IN | 인터뷰 관리 솔루션',
  description: 'IN U IN은 맞춤형 인터뷰 관리 솔루션을 제공합니다. 간편하고 효율적인 인터뷰 관리를 경험해보세요.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
