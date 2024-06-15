import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest, res: NextResponse) => {
  if (req.cookies.get("user")) {
    return NextResponse.redirect(new URL("/game", req.url));
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};

export const config = {
  matcher: "/",
};
