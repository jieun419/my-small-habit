import { NextRequest, NextResponse } from "next/server";

import { routes } from "./constants/path";

// https://nextjs-ko.org/docs/app/building-your-application/routing/middleware
const allowedOrigins = ["http://localhost:3000", "https://my-small-habit.vercel.app"];

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)"],
};

const publicRoutes = ["/", "/login", "/signup"]; // 로그인 후 접근 불가

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");
  const currentPath = request.nextUrl.pathname;
  const isPublic = publicRoutes.includes(currentPath);

  if (!token && !isPublic) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (token && isPublic) {
    const url = request.nextUrl.clone();
    url.pathname = routes.userPath.habit.add;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
