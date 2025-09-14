// src/lib/cookies.ts
import { serialize } from "cookie";

const COOKIE_NAME = process.env.COOKIE_NAME || "auct_session";
const ONE_WEEK = 7 * 24 * 60 * 60;

export function createSessionCookie(token: string) {
  const secure = process.env.NODE_ENV === "production";
  return serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: ONE_WEEK,
  });
}

export function clearSessionCookie() {
  return serialize(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0),
  });
}
