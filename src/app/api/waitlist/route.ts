import { NextResponse } from 'next/server';

const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || '';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const entry = {
      name,
      email,
      company: company || '',
      product: 'orchestly',
      timestamp: new Date().toISOString(),
    };

    console.log('[WAITLIST:orchestly]', JSON.stringify(entry));

    // Send to Google Sheet
    if (GOOGLE_SHEET_URL) {
      try {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entry),
        });
      } catch (err) {
        console.error('[WAITLIST:orchestly] Google Sheet error:', err);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
