import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PricingSection() {
  const tabs: { value: string; label: string }[] = [
    { value: "free", label: "무료" },
    { value: "subscription", label: "구독제" },
    { value: "consulting", label: "인터뷰 컨설팅" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">인터뷰 관리 서비스</h2>
        <Tabs defaultValue="free" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-white transition-colors"
                aria-controls={`${tab.value}-tab`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent id="free-tab" value="free">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-primary text-xl font-bold mb-6">
                  체험을 통해 경험해보세요!
                </h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    정성적 인터뷰 관련 전자책 증정
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    정성적 인터뷰 관련 컨설팅 1회
                  </li>
                </ul>
                <div className="text-sm text-gray-500">
                  매일 오전 11시 & 오후 5시마다<br />
                  무료 인터뷰 매칭 후보 업데이트
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent id="subscription-tab" value="subscription">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary text-xl font-bold mb-2">
                  구독을 통해 경험해보세요!
                </div>
                <div className="text-3xl font-bold mb-6">
                  50,000원<span className="text-lg font-normal">/월</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    정성적 인터뷰 자동 기록 가능
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    인터뷰 분석 노트 3개월마다 제공
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent id="consulting-tab" value="consulting">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary text-xl font-bold mb-6">
                  특화된 인터뷰 컨설팅
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    정성적 인터뷰
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    동행 컨설팅
                  </li>
                </ul>
                <div className="text-sm text-gray-500">1년 장기 계약시 5% 할인</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
