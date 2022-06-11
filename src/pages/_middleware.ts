import { NextRequest, NextResponse } from "next/server";
import { setUserCookies } from "../lib/auth";

export function middleware(req: NextRequest) {
  return setUserCookies(req, NextResponse.next());
}
