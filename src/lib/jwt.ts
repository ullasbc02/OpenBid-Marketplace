// src/lib/jwt.ts
import { sign, verify, Jwt } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET as string;
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

export function signJwt(payload: object) {
  return sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

export function verifyJwt<T = any>(token: string): T | null {
  try {
    return verify(token, SECRET) as T;
  } catch (e) {
    return null;
  }
}
