import React from 'react';

export function AbstractBg() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* ── PRIMARY ORB — top right, dominant violet ── */}
      <div
        className="absolute"
        style={{
          top: '-15%',
          right: '-5%',
          width: '760px',
          height: '760px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(109,40,217,0.22) 40%, transparent 70%)',
          filter: 'blur(72px)',
        }}
      />

      {/* ── SECONDARY ORB — bottom left, softer ── */}
      <div
        className="absolute"
        style={{
          bottom: '-12%',
          left: '-8%',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.40) 0%, rgba(124,58,237,0.15) 40%, transparent 68%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── MID ORB — center page left side ── */}
      <div
        className="absolute"
        style={{
          top: '38%',
          left: '-12%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.30) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />

      {/* ── ACCENT ORB — hero center highlight ── */}
      <div
        className="absolute"
        style={{
          top: '5%',
          left: '28%',
          width: '420px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(196,181,253,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── DEEP BOTTOM GLOW — footer area ── */}
      <div
        className="absolute"
        style={{
          bottom: '-5%',
          right: '15%',
          width: '400px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(109,40,217,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── DOT GRID ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.22 }}
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(167,139,250,0.55)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* ── DIAGONAL ACCENT LINES — top right corner ── */}
      <svg
        className="absolute top-0 right-0 w-[500px] h-[500px]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.07 }}
      >
        {[0, 70, 140, 210, 280, 350].map((offset, i) => (
          <line
            key={i}
            x1={500 - offset} y1="0"
            x2="500" y2={offset}
            stroke="white" strokeWidth="1"
          />
        ))}
        {[0, 70, 140, 210, 280, 350].map((offset, i) => (
          <line
            key={`b${i}`}
            x1="0" y1={offset}
            x2={500 - offset} y2="500"
            stroke="white" strokeWidth="0.7"
          />
        ))}
      </svg>

      {/* ── CONCENTRIC CIRCLES — bottom left ── */}
      <svg
        className="absolute bottom-[4%] left-[2%] w-[300px] h-[300px]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.09 }}
      >
        <circle cx="150" cy="150" r="140" stroke="rgba(167,139,250,1)" strokeWidth="1" />
        <circle cx="150" cy="150" r="100" stroke="rgba(167,139,250,1)" strokeWidth="0.8" />
        <circle cx="150" cy="150" r="60" stroke="rgba(167,139,250,1)" strokeWidth="0.6" />
        <circle cx="150" cy="150" r="25" stroke="rgba(167,139,250,1)" strokeWidth="0.5" />
      </svg>

      {/* ── ROTATED SQUARE ACCENT — top center-right ── */}
      <svg
        className="absolute top-[14%] right-[16%] w-[130px] h-[130px]"
        viewBox="0 0 130 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.10, transform: 'rotate(30deg)' }}
      >
        <rect x="8" y="8" width="114" height="114" stroke="rgba(167,139,250,1)" strokeWidth="1" rx="10" />
        <rect x="28" y="28" width="74" height="74" stroke="rgba(167,139,250,1)" strokeWidth="0.7" rx="5" />
      </svg>

      {/* ── HORIZONTAL RULE LINES — mid page ── */}
      <svg
        className="absolute top-[44%] left-0 w-full h-[160px]"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.04 }}
      >
        <line x1="0" y1="30" x2="1440" y2="30" stroke="white" strokeWidth="1" />
        <line x1="0" y1="80" x2="1440" y2="80" stroke="white" strokeWidth="0.7" />
        <line x1="0" y1="130" x2="1440" y2="130" stroke="white" strokeWidth="1" />
      </svg>
    </div>
  );
}
