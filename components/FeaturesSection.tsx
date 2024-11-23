import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Sliders, Lightbulb, IconType } from "lucide-react";

const features: {
  icon: IconType;
  title: string;
  description: string;
  action: string;
}[] = [
  { icon: Mic, title: "정성적 인터뷰 참여자 모집", description: "정성적 인터뷰에 참여할 인터뷰 희망자를 보다 쉽게", action: "인터뷰 생성하기" },
  { icon: Sliders, title: "인터뷰 제안 기능", description: "자신이 원하는 조건의 인터뷰 희망자 검색 및 인터뷰 신청 기능", action: "인터뷰 희망자 보러가기" },
  { icon: Lightbulb, title: "참여할 인터뷰 탐색", description: "인터뷰 희망자들은 인터뷰 모집자가 생성한 인터뷰에 지원 가능", action: "인터뷰 보러가기" },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          IN U IN이 제공하는 최고의 인터뷰 솔루션을 통해<br />
          내 손안의 인터뷰 관리를 경험해보세요.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow"
              aria-labelledby={`feature-title-${index}`}
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon
                      className="w-8 h-8 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3
                  id={`feature-title-${index}`}
                  className="text-lg font-semibold mb-2"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button
                  variant="link"
                  className="text-primary hover:underline"
                  aria-label={feature.action}
                >
                  {feature.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
