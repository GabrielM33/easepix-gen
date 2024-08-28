import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import crypto from 'crypto';

const hash = (data: string) => crypto.createHash('sha256').update(data).digest('hex');

export async function POST(req: NextRequest) {
  try {
    const { event_name, event_id, event_time, user_data, custom_data } = await req.json();

    const payload = {
      event_name,
      event_time,
      action_source: 'website',
      user_data: {
        em: user_data?.em?.map(hash) || [], // Hash email addresses
        // Hash other user data fields if needed
      },
      custom_data,
    };

    const response = await fetch(`https://graph.facebook.com/v14.0/${process.env.FACEBOOK_PIXEL_ID}/events?access_token=${process.env.FACEBOOK_CONVERSIONS_API_ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [payload],
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      return NextResponse.json({ error: result }, { status: response.status });
    }
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Server Error', error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Server Error', error: 'Unknown error' }, { status: 500 });
    }
  }
}
