// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString(),
  };
  return NextResponse.json(data);
}
