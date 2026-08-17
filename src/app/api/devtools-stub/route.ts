import { NextResponse } from 'next/server';

// Silences the Chrome DevTools probe:
// GET /.well-known/appspecific/com.chrome.devtools.json
export async function GET() {
  return NextResponse.json({});
}
