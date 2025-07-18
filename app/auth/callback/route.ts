import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { routes } from "@/constants/path";
import { createServer } from "@/lib/supabase/server";

/**
 * 세션 쿠키는 Supabase가 자동으로 관리(프론트에서 별도 쿠키 저장 필요 없음)
 * 인증 성공 후 원하는 경로로 안전하게 리다이렉트
 * @param request - 요청 객체
 * @returns 리다이렉트 응답
 */
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next");

  if (code) {
    const supabase = await createServer();
    try {
      // 코드를 세션으로 교환
      await supabase.auth.exchangeCodeForSession(code);
    } catch (error) {
      // 오류 처리
      console.error("Failed to exchange code for session: ", error);
      // 오류 응답 반환
    }
  }
  // next.js 캐시 무효화
  revalidatePath("/", "layout");

  let redirectTo = new URL(routes.userPath.habit.add, requestUrl.origin);

  if (next) {
    // next 파라미터 디코딩
    const decodedNext = decodeURIComponent(next);
    // next 파라미터 유효성 검사
    redirectTo = new URL(decodedNext, requestUrl.origin);
  }
  return NextResponse.redirect(redirectTo);
}
