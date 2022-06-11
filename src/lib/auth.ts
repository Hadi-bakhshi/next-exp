// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { SignJWT, jwtVerify } from "jose";
import { USER_TOKEN, JWT_SECRET_KEY } from "./constants";
import { jsonResponse } from "./utils";

interface UserJwtPayload {
  jti: string;
  iat: number;
}

export async function verifyAuth(request: NextRequest) {
  const token = request.cookies[USER_TOKEN];
  if (!token) {
    return jsonResponse(401, { error: { message: " خطای عدم وجود توکن" } });
  }

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET_KEY)
    );
    return verified.payload as UserJwtPayload;
  } catch (error) {
    return jsonResponse(401, { message: "توکن شما منقضی شده است" });
  }
}

export async function setUserCookies(
  request: NextRequest,
  response: NextResponse
) {
  const cookie = request.cookies[USER_TOKEN];
  if (!cookie) {
    const token = await new SignJWT({})
      .setProtectedHeader({ alg: "HS512" })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(new TextEncoder().encode(JWT_SECRET_KEY));
    response.cookie(USER_TOKEN, token, { httpOnly: true });
  }
  return response;
}
