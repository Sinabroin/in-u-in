'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleInputChange = (field: keyof typeof contactForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: data.message || '문의가 성공적으로 제출되었습니다!' 
        })
        setContactForm({ name: '', email: '', phone: '' })
      } else {
        throw new Error(data.message || '문의 제출 중 오류가 발생했습니다.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: '문의 제출 중 오류가 발생했습니다. 다시 시도해 주세요.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-12">지금 IN U IN과 함께하기</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              id="name"
              aria-label="회사명/이름"
              placeholder="회사명/이름"
              value={contactForm.name}
              onChange={handleInputChange("name")}
              required
              className="focus:ring-2 focus:ring-[#2A4ECD] transition-shadow"
            />
          </div>
          <div>
            <Input
              id="email"
              aria-label="이메일"
              placeholder="예) inuin@email.com"
              type="email"
              value={contactForm.email}
              onChange={handleInputChange("email")}
              required
              className="focus:ring-2 focus:ring-[#2A4ECD] transition-shadow"
            />
          </div>
          <div>
            <Input
              id="phone"
              aria-label="전화번호"
              placeholder="예) 010-1234-5678"
              value={contactForm.phone}
              onChange={handleInputChange("phone")}
              required
              className="focus:ring-2 focus:ring-[#2A4ECD] transition-shadow"
            />
          </div>
          {submitStatus.type && (
            <div className={`p-4 rounded-md ${
              submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {submitStatus.message}
            </div>
          )}
          <Button 
            type="submit" 
            className="w-full bg-[#2A4ECD] hover:bg-[#2A4ECD]/90 transition-colors" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? '제출 중...' : '문의하기'}
          </Button>
        </form>
      </div>
    </section>
  )
}
