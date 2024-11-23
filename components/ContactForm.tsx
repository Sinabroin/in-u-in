import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ContactFormProps {
  contactForm: {
    name: string;
    email: string;
    phone: string;
  };
  setContactForm: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phone: string;
  }>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

export default function ContactForm({ contactForm, setContactForm, handleSubmit, isSubmitting }: ContactFormProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-12">지금 IN U IN과 함께하기</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="회사명/이름"
              value={contactForm.name}
              onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
              required
              className="focus:ring-2 focus:ring-[#2A4ECD] transition-shadow"
            />
          </div>
          <div>
            <Input
              placeholder="예) inuin@email.com"
              type="email"
              value={contactForm.email}
              onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
              required
              className="focus:ring-2 focus:ring-[#2A4ECD] transition-shadow"
            />
          </div>
          <div>
            <Input
              placeholder="예) 010-1234-5678"
              value={contactForm.phone}
              onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
              required
              className="focus:ring-2 focus:ring-[#2A4ECD] transition-shadow"
            />
          </div>
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
