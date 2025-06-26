import { NextRequest } from "next/server";

import { updateSession } from "./lib/supabase/middleware";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
