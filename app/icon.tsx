import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#FFB800">
          <path d="M7 2h8c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z" />
          <path d="M17 5h2c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-2" />
          <path d="M5 18h10v2H5z" opacity="0.6" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
