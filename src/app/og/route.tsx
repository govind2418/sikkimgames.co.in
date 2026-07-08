import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Sikkim Game';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #ffffff 0%, #ecfdf5 55%, #d1fae5 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 20px',
            borderRadius: '999px',
            border: '1px solid rgba(5,150,105,0.35)',
            background: 'rgba(5,150,105,0.06)',
            color: '#047857',
            fontSize: '22px',
            marginBottom: '32px',
          }}
        >
          sikkimgames.co.in
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '68px',
            fontWeight: 800,
            color: '#0c1713',
            lineHeight: 1.15,
            maxWidth: '950px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '28px',
            fontSize: '28px',
            color: '#3f5850',
          }}
        >
          Login • Register • Download • Wingo Prediction • Colour Prediction
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
