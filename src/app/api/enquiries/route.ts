import { NextResponse } from 'next/server';
import type { Enquiry } from '@/lib/types';

/**
 * In-memory enquiry log for the demo. Swap the two functions below for
 * PostgreSQL / Supabase queries and the rest of the app stays unchanged.
 */
const enquiryLog: Enquiry[] = [];

export async function GET() {
  return NextResponse.json({ ok: true, count: enquiryLog.length, enquiries: enquiryLog });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Enquiry;
    if (!body?.name || !body?.phone) {
      return NextResponse.json({ ok: false, error: 'Name and phone are required.' }, { status: 400 });
    }
    enquiryLog.unshift(body);
    return NextResponse.json({ ok: true, id: body.id }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not read the enquiry.' }, { status: 400 });
  }
}
