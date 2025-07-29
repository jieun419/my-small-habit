import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { getUserInfo } from "@/api/server/user";
import { routes } from "@/constants/path";

const publicRoutes = ["/", "/login", "/signup"]; // 로그인 후 접근 불가

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // 유저 정보 조회
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (
    !user &&
    !request.nextUrl.pathname.startsWith(routes.commonPath.signup) &&
    !request.nextUrl.pathname.startsWith(routes.commonPath.login) &&
    !request.nextUrl.pathname.startsWith(routes.apiPath.auth.root)
  ) {
    // 로그인 페이지로 리다이렉트
    const url = request.nextUrl.clone();
    url.pathname = routes.commonPath.login;
    return NextResponse.redirect(url);
  } else if (user && publicRoutes.includes(request.nextUrl.pathname)) {
    // 로그인 후 홈 페이지로 리다이렉트
    const url = request.nextUrl.clone();

    const { data } = await getUserInfo();

    if (data && data.status === "basic") {
      url.pathname = routes.userPath.habit.record.root();
    }

    url.pathname = routes.userPath.habit.add;
    return NextResponse.redirect(url);
  }
}
