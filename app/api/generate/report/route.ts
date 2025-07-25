import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const key = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: key });

export async function POST(req: NextRequest) {
  try {
    const { habitRecord, type, dateLabel, userName } = await req.json();

    let prompt = "";

    switch (type) {
      case "day":
        prompt = `
        아래는 ${dateLabel}의 습관 기록입니다.
        오늘 하루의 ${userName}님 습관기록을 보고 리포트를 작성해줘.
        기록 : ${JSON.stringify(habitRecord)}

        **아래의 마크다운 구조를 반드시 그대로 따라 작성해줘.**
        - 각 섹션의 제목, 순서, 마크다운 스타일(굵게, 리스트 등)을 꼭 지켜줘.
        - 각 섹션은 반드시 # 제목으로 구분해.
        - 리스트는 -로 시작하고, 중요 포인트 부분은 **굵게** 표시해.
        - 예시와 다르게 작성하지 마.
        - 간략하게 작성하되 친근하고 부드러운 말투로, 자존감이 올라가도록 칭찬과 응원을 꼭 넣어줘.
        - 가독성 신경 쓰면서 맥락을 보고 줄 바꿈 꼭 해줘.
        - [마크다운 리포트 구조 예시] 내용에서 "00님"은 "${userName}님" 으로 작성해 주고, ${userName} 이름 성을 빼서 친근감 있게 해줘, ${userName} 데이터 없다면 "${userName}님"을 "당신"으로 변경해줘.

        **[마크다운 리포트 구조 예시]**

        - "오늘 하루는 00 하루 였군요!" 라는 문장으로 시작해줘.
        - 2~3줄 정도 덧 붙여줘.
        - 줄 바꿈 꼭 해주고 가독성을 위해 두줄 바꿈도 고려해줘.

        ### 🌟 오늘 00님의 빛나는 점
        - 리스트 형식으로 {제목}:{내용} 형식으로 배치해줘.
        - 어느 부분이 빛났는지 세세하게 알려주되 간략하게 작성해줘.
        - 똑같은 하루를 보냈어도 그 하루 하루는 다르게 특별하다는 걸 알려줘.

        ### 💌 00님을 위한 칭찬과 응원
        - 칭찬과 응원 메세지를 넣어줘.
        - 가독성을 위해 너무 길지 않되 진정성 있게 작성해줘.
        - 줄 바꿈 꼭 해주고 가독성을 위해 두줄 바꿈도 고려해줘.
        `;
        break;
      case "month":
        prompt = `
          아래는 ${dateLabel}의 습관 기록입니다.
          이 달의 습관기록을 보고 리포트를 작성해줘.
        
          기록 : ${JSON.stringify(habitRecord)}

          **아래의 마크다운 구조를 반드시 그대로 따라 작성해줘.**
          - 각 섹션의 제목, 순서, 마크다운 스타일(굵게, 리스트 등)을 꼭 지켜줘.
          - 각 섹션은 반드시 # 제목으로 구분해.
          - 리스트는 -로 시작하고, 중요 포인트 부분은 **굵게** 표시해.
          - 예시와 다르게 작성하지 마.
          - 간략하게 작성하되 친근하고 부드러운 말투로, 자존감이 올라가도록 칭찬과 응원을 꼭 넣어줘.
          - 가독성 신경 쓰면서 맥락을 보고 줄 바꿈 꼭 해줘.
          - 예시에서 "00님"은 "${userName}님" 으로 작성해 주고, 이름 성을 빼서 친근감 있게 해줘, ${userName} 데이터 없다면 "${userName}님"을 "당신"으로 변경해줘.

          **[마크다운 리포트 구조 예시]**

          - 이번 달 습관 기록을 보고 분석 리포트를 작성해줘.
          - 어떤 시간대/요일에 기록을 많이하고, 주로 어떤 기분이 많았고, 어떤 습관을 꾸준히 지키고 있는지 등을 알려줘

          ### 🌟 이번 달 빛나는 점
          - 리스트 형식으로 {제목}:{내용} 형식으로 배치해줘.
          - 어느 부분이 빛났는지 세세하게 알려주되 간략하게 작성해줘.
          - 똑같은 하루를 보냈어도 그 하루 하루는 다르게 특별하다는 걸 알려줘.

           ### 🚀 다음 달 추천 습관
          - 이번 달 습관 기록 등을 보고 다음 달에 실천하면 좋을 것 같은 습관을 추천해줘.
          - 그 이유도 간략하게 넣어줘.
          - 2~3개 정도 리스트 형식으로 추천해줘.

          ### 💌 칭찬과 응원
          - 칭찬과 응원 메세지를 넣어줘.
          - 가독성을 위해 너무 길지 않되 진정성 있게 작성해줘.
          - 줄 바꿈 꼭 해주고 가독성을 위해 두줄 바꿈도 고려해줘.
          `;
        break;
      case "year":
        prompt = `
          아래는 ${dateLabel}의 습관 기록입니다.
          이 해의 습관기록을 보고 리포트를 작성해줘.
          마크다운 형식(예: **굵게**, - 리스트, # 제목 등)으로 간략하게 작성하되 자존감 회복이 될 수 있도록 칭찬과 응원의 메세지도 넣어줘.
          내년에도 습관 유지 될 수 있도록 조언도 넣어줘.
          기록 : ${JSON.stringify(habitRecord)}
          `;
        break;
      default:
        prompt = "습관 기록이 없습니다.";
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const text = response?.candidates?.[0]?.content?.parts?.[0]?.text;
    return NextResponse.json(text || "리포트 생성에 문제가 발생했어요 :(");
  } catch (error) {
    console.error("AI 리포트 생성 에러 발생!", error);
    return NextResponse.json({ error: error ?? "에러 발생!!!" });
  }
}
