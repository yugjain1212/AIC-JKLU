import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSc_ays-tYzkVYyVDodSbNc-QZywKF7ps0KIs_y9bemJUlJsjg/formResponse';

// Google Form Field Entry IDs for https://forms.gle/jiRLD4jACjhQcCxv5:
// - Email: entry.62629543
// - Your Name: entry.1654618535
// - Startup Name: entry.360114461
// - Alternate E-mail: entry.572865494
// - Describe: entry.146631457

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, startupName, alternateEmail, describe } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const formParams = new URLSearchParams();
    formParams.append('entry.62629543', email.trim());
    formParams.append('emailAddress', email.trim());
    formParams.append('entry.1654618535', (name || '').trim());
    formParams.append('entry.360114461', (startupName || '').trim());
    formParams.append('entry.572865494', (alternateEmail || '').trim());
    formParams.append('entry.146631457', (describe || '').trim());

    const response = await fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      body: formParams.toString(),
    });

    if (response.ok || response.status === 200 || response.type === 'opaque') {
      return NextResponse.json({
        success: true,
        message: 'Application successfully submitted.',
      });
    }

    // Google Forms might redirect (302) or return 200 with HTML
    if (response.status >= 200 && response.status < 400) {
      return NextResponse.json({
        success: true,
        message: 'Application successfully submitted.',
      });
    }

    const responseText = await response.text().catch(() => '');
    console.error('Google Form submission response error:', response.status, responseText.slice(0, 200));

    return NextResponse.json(
      {
        success: false,
        error: 'Unable to submit application to Google Form at this time.',
      },
      { status: response.status || 500 }
    );
  } catch (error) {
    console.error('API /api/apply error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal server error occurred while processing the application.',
      },
      { status: 500 }
    );
  }
}
