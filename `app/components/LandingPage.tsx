'use client'

import { useState } from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import ServiceBenefits from './ServiceBenefits'
import PricingSection from './PricingSection'
import ContactForm from './ContactForm'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })
      if (response.ok) {
        alert('문의가 성공적으로 제출되었습니다!')
        setContactForm({ name: '', email: '', phone: '' })
      } else {
        alert('문의 제출 중 오류가 발생했습니다. 다시 시도해 주세요.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('문의 제출 중 오류가 발생했습니다. 다시 시도해 주세요.')
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection email={email} setEmail={setEmail} />
      <FeaturesSection />
      <ServiceBenefits />
      <PricingSection />
      <ContactForm 
        contactForm={contactForm} 
        setContactForm={setContactForm} 
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  )
}