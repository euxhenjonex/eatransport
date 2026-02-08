import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-50px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.15)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-30px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.1)',
            filter: 'blur(60px)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {/* Logo text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '32px', fontWeight: 800, color: 'white' }}>EA</span>
            </div>
            <span style={{ fontSize: '56px', fontWeight: 800, color: 'white', letterSpacing: '-1px' }}>
              EA Transport
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '28px',
              color: '#94a3b8',
              fontWeight: 500,
              letterSpacing: '0.5px',
            }}
          >
            International Freight Transport
          </div>

          {/* Divider */}
          <div
            style={{
              width: '80px',
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
              marginTop: '8px',
              marginBottom: '8px',
            }}
          />

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
              marginTop: '8px',
            }}
          >
            {[
              { value: '8+', label: 'Years' },
              { value: '30+', label: 'Countries' },
              { value: '500+', label: 'Clients' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span style={{ fontSize: '36px', fontWeight: 800, color: '#3b82f6' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '16px', color: '#64748b', fontWeight: 500 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Route */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '16px',
              padding: '12px 32px',
              borderRadius: '999px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            <span style={{ fontSize: '18px', color: '#e2e8f0', fontWeight: 600 }}>
              Albania → Europe
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
