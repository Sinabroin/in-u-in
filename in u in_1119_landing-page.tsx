'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Sliders, Lightbulb } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">IN U IN</Link>
          <nav className="flex items-center gap-8">
            <Link href="/customer-center" className="text-sm text-gray-600">고객문의</Link>
            <Link href="/services" className="text-sm text-gray-600">서비스 소개</Link>
            <Link href="/faq" className="text-sm text-gray-600">자주 묻는 질문</Link>
            <Button variant="outline" className="border-[#2A4ECD] text-[#2A4ECD]">로그인</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2A4ECD]">
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
            <Button size="lg" className="bg-[#2A4ECD] hover:bg-[#2A4ECD]/90">무료 체험 시작하기</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            IN U IN이 제공하는 최고의 인터뷰 솔루션을 통해<br />
            내 손안의 인터뷰 관리를 경험해보세요.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#2A4ECD]/10 rounded-full flex items-center justify-center">
                    <Mic className="w-8 h-8 text-[#2A4ECD]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">정성적 인터뷰 참여자 모집</h3>
                <p className="text-gray-600">정성적 인터뷰에 참여할 인터뷰 희망자를 보다 쉽게</p>
                <Button variant="link" className="mt-4 text-[#2A4ECD]">인터뷰 생성하기</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#2A4ECD]/10 rounded-full flex items-center justify-center">
                    <Sliders className="w-8 h-8 text-[#2A4ECD]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">인터뷰 제안 기능</h3>
                <p className="text-gray-600">자신이 원하는 조건의 인터뷰 희망자 검색 및 인터뷰 신청 기능</p>
                <Button variant="link" className="mt-4 text-[#2A4ECD]">인터뷰 희망자 보러가기</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#2A4ECD]/10 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-[#2A4ECD]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">참여할 인터뷰 탐색</h3>
                <p className="text-gray-600">인터뷰 희망자들은 인터뷰 모집자가 생성한 인터뷰에 지원 가능</p>
                <Button variant="link" className="mt-4 text-[#2A4ECD]">인터뷰 보러가기</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            기존보다 빠르고 정확한 인터뷰 관리 서비스
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">맞춤 인터뷰를 편리하게 선정</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 원하는 주제로 인터뷰 희망자 모집 가능</li>
                <li>• 연령대, 직업, 거주 형태, 라이프 사이클, 고객 여부, 인터뷰 형식, 소요 시간에 따라 인터뷰이를 검색 및 추천받기 가능</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">인터뷰 조건 설정</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 인터뷰 희망자와 인터뷰 종류 및 시간 매칭</li>
                <li>• 인터뷰 분석 노트 3개월마다 제공</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">인터뷰 관리</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 나의 구글 캘린더와 인터뷰 일정 연동</li>
                <li>• 인터뷰 내용 녹음시 자동 정리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">인터뷰 관리 서비스</h2>
          <Tabs defaultValue="free" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger 
                value="free" 
                className="data-[state=active]:bg-[#2A4ECD] data-[state=active]:text-white"
              >
                무료
              </TabsTrigger>
              <TabsTrigger 
                value="subscription"
                className="data-[state=active]:bg-[#2A4ECD] data-[state=active]:text-white"
              >
                구독제
              </TabsTrigger>
              <TabsTrigger 
                value="consulting"
                className="data-[state=active]:bg-[#2A4ECD] data-[state=active]:text-white"
              >
                인터뷰 컨설팅
              </TabsTrigger>
            </TabsList>

            <TabsContent value="free">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-[#2A4ECD] text-xl font-bold mb-6">체험을 통해 경험해보세요!</h3>
                  <ul className="space-y-4 mb-6">
                    <li>• 정성적 인터뷰 관련 전자책 증정</li>
                    <li>• 정성적 인터뷰 관련 컨설팅 1회</li>
                  </ul>
                  <div className="text-sm text-gray-500">
                    매일 오전 11시 & 오후 5시마다<br />
                    무료 인터뷰 매칭 후보 업데이트
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscription">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-[#2A4ECD] text-xl font-bold mb-2">구독을 통해 경험해보세요!</div>
                  <div className="text-lg mb-6">50000원/월</div>
                  <ul className="space-y-4">
                    <li>• 정성적 인터뷰 자동 기록 가능</li>
                    <li>• 인터뷰 분석 노트 3개월마다 제공</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consulting">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-[#2A4ECD] text-xl font-bold mb-6">특화된 인터뷰 컨설팅</div>
                  <ul className="space-y-4 mb-6">
                    <li>• 정성적 인터뷰</li>
                    <li>• 동행 컨설팅</li>
                    <li>• 재교 가능</li>
                  </ul>
                  <div className="text-sm text-gray-500">
                    1년 장기 계약시 5% 할인
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-2xl font-bold text-center mb-12">지금 IN U IN과 함께하기</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="회사명/이름"
                value={contactForm.name}
                onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <Input
                placeholder="예) inuin@email.com"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <Input
                placeholder="예) 010-1234-5678"
                value={contactForm.phone}
                onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <Button type="submit" className="w-full bg-[#2A4ECD] hover:bg-[#2A4ECD]/90" size="lg">
              문의하기
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}