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
        마크다운 형식(예: **굵게**, - 리스트, # 제목 등)으로 "0월 0일 리포트" 제목은 안 써도 돼.
        "오늘 하루는 00 하루 였군요!" 라는 문장으로 시작해줘.
        "{아이콘} 오늘 ${userName}님의 빛나는 점", "{아이콘} ${userName}님을 위한 칭찬과 응원"을 제목으로 이름은 성은 떼고 넣어줘.
        ${userName} 데이터가 없다면 "00님"을 "당신"으로 교체해줘.
        친근감이 있고 중간 중간에 아이콘도 넣어서 딱딱한 분위기 보단 부드렀으면 해.
        간략하게 작성하되 자존감 회복이 될 수 있도록 칭찬과 응원의 메세지도 넣어줘.
        기록 : ${JSON.stringify(habitRecord)}
        `;
        break;
      case "month":
        prompt = `
          아래는 ${dateLabel}의 습관 기록입니다.
          이 달의 습관기록을 보고 리포트를 작성해줘.
          마크다운 형식(예: **굵게**, - 리스트, # 제목 등)으로 간략하게 작성하되 자존감 회복이 될 수 있도록 칭찬과 응원의 메세지도 넣어줘.
          다음 달에 추천하는 습관이 있다면 같이 작성해줘.
          기록 : ${JSON.stringify(habitRecord)}
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
