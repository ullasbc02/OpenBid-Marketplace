import { NextRequest, NextResponse } from 'next/server';
// ... do auth work, set cookies, etc.
export default async function Home() {
  const res = await fetch('http://localhost:3000/api/server', { cache: 'no-store' });
  const data = await res.json();
  return NextResponse.json({ message: data.message });
}