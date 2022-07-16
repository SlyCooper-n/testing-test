import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.includes("/home")) {
    return NextResponse.redirect("/");
  }
};

// export const config = {
//   matcher: "/home",
// };
