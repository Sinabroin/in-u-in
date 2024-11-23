import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 min-h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text"
          aria-label="IN U IN 홈으로 이동"
        >
          IN U IN
        </Link>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-8">
          <Link
            href="/customer-center"
            className="text-sm text-gray-600 hover:text-primary transition-colors"
            aria-label="고객문의 페이지로 이동"
          >
            고객문의
          </Link>
          <Link
            href="/services"
            className="text-sm text-gray-600 hover:text-primary transition-colors"
            aria-label="서비스 소개 페이지로 이동"
          >
            서비스 소개
          </Link>
          <Link
            href="/faq"
            className="text-sm text-gray-600 hover:text-primary transition-colors"
            aria-label="자주 묻는 질문 페이지로 이동"
          >
            자주 묻는 질문
          </Link>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="로그인 페이지로 이동"
          >
            로그인
          </Button>
        </nav>
      </div>
    </header>
  );
}
