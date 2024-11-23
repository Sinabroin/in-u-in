import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-[#2A4ECD] to-blue-600 text-transparent bg-clip-text">IN U IN</Link>
        <nav className="flex items-center gap-8">
          <Link href="/customer-center" className="text-sm text-gray-600 hover:text-[#2A4ECD] transition-colors">고객문의</Link>
          <Link href="/services" className="text-sm text-gray-600 hover:text-[#2A4ECD] transition-colors">서비스 소개</Link>
          <Link href="/faq" className="text-sm text-gray-600 hover:text-[#2A4ECD] transition-colors">자주 묻는 질문</Link>
          <Button variant="outline" className="border-[#2A4ECD] text-[#2A4ECD] hover:bg-[#2A4ECD] hover:text-white transition-colors">로그인</Button>
        </nav>
      </div>
    </header>
  )
}
