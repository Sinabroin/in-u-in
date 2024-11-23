import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeroSectionProps {
  email: string;
  setEmail: (email: string) => void;
}

export default function HeroSection({ email, setEmail }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#2A4ECD" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 py-24 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#2A4ECD] to-blue-600 text-transparent bg-clip-text">
          정성적 인터뷰 매칭을<br />
          보다 쉽고<br />
          간편하게
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          당신의 꿈을 향해 끝까지 함께할 IN U IN
        </p>
        <div className="flex justify-center gap-4">
          <Input 
            placeholder="이메일 주소를 입력하세요" 
            className="max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button size="lg" className="bg-[#2A4ECD] hover:bg-[#2A4ECD]/90 transition-transform hover:scale-105">
            무료 체험 시작하기
          </Button>
        </div>
      </div>
    </section>
  )
}