import { NextResponse } from 'next/server';
import prisma  from '../../../../lib/prisma';


export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Find user by email using findFirst
  const user = await prisma.users.findUnique({
    where: { email: email },
  });
  console.log(user);
  // Check if user exists and password matches
  if (user && user.password === password) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
