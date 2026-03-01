import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Disable deck in production, keep accessible locally for polishing
  if (
    process.env.NODE_ENV === 'production' &&
    request.nextUrl.pathname.startsWith('/deck')
  ) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/deck/:path*', '/deck'],
};
