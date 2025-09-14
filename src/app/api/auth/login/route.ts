import { NextResponse } from 'next/server';

const users = [
  { email: 'test@example.com', password: 'password123' },
  { email: 'user@example.com', password: 'mypassword' }
];

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}