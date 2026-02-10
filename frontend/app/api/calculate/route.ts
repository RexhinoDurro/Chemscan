import { NextRequest, NextResponse } from 'next/server';

const CHEMISTRY_URL = process.env.CHEMISTRY_SERVICE_URL || 'http://chemistry:8001';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await fetch(`${CHEMISTRY_URL}/api/chemistry/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: 'Chemistry service unavailable' }, { status: 503 });
  }
}
