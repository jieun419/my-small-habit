import { NextRequest, NextResponse } from "next/server";

import { routes } from "@/constants/path";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token_hash = searchParams.get("token_hash");
  const next = searchParams.get("next") ?? routes.userPath.habit.add;

  if (token_hash) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: "magiclink",
    });
    if (!error) {
      // 성공 후 원하는 경로로 리다이렉트
      return NextResponse.redirect(new URL(next, req.url));
    }
  }
  // 에러 페이지로 리다이렉트
  return NextResponse.redirect(new URL("/error", req.url));
}
