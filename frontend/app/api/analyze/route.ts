import { NextRequest, NextResponse } from 'next/server';

const AI_URL = process.env.AI_SERVICE_URL || 'http://ai:3001';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await fetch(`${AI_URL}/api/ai/analyze-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: 'AI service unavailable' }, { status: 503 });
  }
}
