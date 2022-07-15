import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.includes("/home")) {
    return NextResponse.redirect("/");
  }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/home",
};
