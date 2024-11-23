import { CheckCircle } from "lucide-react";

interface Benefit {
  title: string;
  items: string[];
}

export default function ServiceBenefits() {
  const benefits: Benefit[] = [
    {
      title: "맞춤 인터뷰를 편리하게 선정",
      items: [
        "원하는 주제로 인터뷰 희망자 모집 가능",
        "연령대, 직업, 거주 형태, 라이프 사이클, 고객 여부, 인터뷰 형식, 소요 시간에 따라 인터뷰이를 검색 및 추천받기 가능",
      ],
    },
    {
      title: "인터뷰 조건 설정",
      items: [
        "인터뷰 희망자와 인터뷰 종류 및 시간 매칭",
        "인터뷰 분석 노트 3개월마다 제공",
      ],
    },
    {
      title: "인터뷰 관리",
      items: [
        "나의 구글 캘린더와 인터뷰 일정 연동",
        "인터뷰 내용 녹음시 자동 정리",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          기존보다 빠르고 정확한 인터뷰 관리 서비스
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
              aria-labelledby={`benefit-title-${index}`}
            >
              <h3
                id={`benefit-title-${index}`}
                className="font-semibold mb-4 text-primary"
              >
                {benefit.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {benefit.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start"
                    aria-label={item}
                  >
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
