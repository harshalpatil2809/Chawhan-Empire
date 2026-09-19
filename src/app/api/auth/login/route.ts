import { NextResponse } from 'next/server';

/**
 * DEMO AUTHENTICATION.
 * Credentials come from env vars with demo defaults so nothing secret is
 * committed. Replace this route with a real auth provider before launch.
 */
const DEMO_EMAIL = process.env.DEMO_ADMIN_EMAIL ?? 'admin@buildcraft.demo';
const DEMO_PASSWORD = process.env.DEMO_ADMIN_PASSWORD ?? 'demo123';

export async function POST(request: Request) {
  let payload: { email?: string; password?: string };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const email = (payload.email ?? '').trim().toLowerCase();
  const password = payload.password ?? '';

  if (!email || !password) {
    return NextResponse.json(
      { ok: false, error: 'Enter both email and password.' },
      { status: 400 }
    );
  }

  if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: 'Those credentials do not match the demo account.' },
      { status: 401 }
    );
  }

  return NextResponse.json({ ok: true, email });
}
