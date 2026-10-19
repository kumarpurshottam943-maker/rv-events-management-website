'use client';

import React from 'react';

interface RoyalLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
  className?: string;
}

export default function RoyalLogo({ size = 'md', showSubtext = true, className = '' }: RoyalLogoProps) {
  const isSm = size === 'sm';
  const isMd = size === 'md';
  const isLg = size === 'lg';
  const isXl = size === 'xl';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Outer Emblem Container */}
      <div
        className={`relative flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 ${
          isSm ? 'p-1' : isMd ? 'p-2' : isLg ? 'p-3' : 'p-4'
        }`}
      >
        {/* SVG Recreation of the Authentic RV Events Logo */}
        <svg
          viewBox="0 0 320 280"
          className={`drop-shadow-[0_4px_20px_rgba(212,175,55,0.35)] ${
            isSm ? 'w-16 h-14' : isMd ? 'w-24 h-20' : isLg ? 'w-36 h-32' : 'w-48 h-42'
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF3B0" />
              <stop offset="25%" stopColor="#E6C364" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="75%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#F3E5AB" />
            </linearGradient>
            <linearGradient id="goldShine" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7E5C0F" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Ambient Glow */}
          <circle cx="160" cy="90" r="85" fill="url(#goldGlow)" />

          {/* Top Frame Wings / Border */}
          <path
            d="M 20 80 L 110 80 M 210 80 L 300 80"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 20 80 L 20 150 M 300 80 L 300 150"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Accent Dots on Outer Frame */}
          <circle cx="34" cy="96" r="9" fill="url(#goldGrad)" />
          <circle cx="286" cy="96" r="9" fill="url(#goldGrad)" />

          {/* Central Medallion Outer Circle */}
          <circle
            cx="160"
            cy="90"
            r="58"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
          />
          {/* Dotted Inner Ring */}
          <circle
            cx="160"
            cy="90"
            r="50"
            stroke="url(#goldGrad)"
            strokeWidth="2"
            strokeDasharray="2.5 5"
          />

          {/* Elegant Monogram 'RV' */}
          <g transform="translate(160, 96)">
            {/* 'R' */}
            <text
              x="-24"
              y="14"
              textAnchor="middle"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="52"
              fontStyle="italic"
              fontWeight="bold"
              fill="url(#goldGrad)"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
            >
              R
            </text>
            {/* 'V' overlapping elegantly */}
            <text
              x="18"
              y="14"
              textAnchor="middle"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="54"
              fontStyle="italic"
              fontWeight="bold"
              fill="url(#goldGrad)"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
            >
              V
            </text>
          </g>

          {/* Baroque Scrollwork / Filigree Left Side */}
          <path
            d="M 125 125 C 105 130, 80 145, 60 170 C 45 190, 35 220, 60 220 C 80 220, 95 195, 100 175 C 105 155, 125 145, 145 140"
            stroke="url(#goldGrad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 60 170 C 40 160, 30 180, 50 195"
            stroke="url(#goldGrad)"
            strokeWidth="3"
            fill="none"
          />
          {/* Scrollwork Right Side */}
          <path
            d="M 195 125 C 215 130, 240 145, 260 170 C 275 190, 285 220, 260 220 C 240 220, 225 195, 220 175 C 215 155, 195 140, 175 140"
            stroke="url(#goldGrad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 260 170 C 280 160, 290 180, 270 195"
            stroke="url(#goldGrad)"
            strokeWidth="3"
            fill="none"
          />

          {/* Central Floral Leaflets under Circle */}
          <path
            d="M 160 140 L 160 175 M 150 145 Q 135 155 130 170 M 170 145 Q 185 155 190 170"
            stroke="url(#goldGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Lower Banner Curvature */}
          <path
            d="M 35 170 Q 160 260 285 170 Q 160 280 35 170 Z"
            fill="#0A0A0A"
            stroke="url(#goldGrad)"
            strokeWidth="3"
          />

          {/* Banner Text: 'Events and management' */}
          <text
            x="160"
            y="200"
            textAnchor="middle"
            fontFamily="'Brush Script MT', 'Great Vibes', cursive, 'Dancing Script', sans-serif"
            fontSize="26"
            fontStyle="italic"
            fontWeight="bold"
            fill="#FFFFFF"
            letterSpacing="1"
          >
            Events and management
          </text>

          {/* Town Name: Farrukhabad with bars */}
          <text
            x="160"
            y="226"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="18"
            fontWeight="bold"
            fontStyle="italic"
            fill="url(#goldGrad)"
            letterSpacing="2"
          >
            — Farrukhabad —
          </text>

          {/* Phone Number at base */}
          <text
            x="160"
            y="250"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="16"
            fontWeight="800"
            letterSpacing="1.5"
            fill="#FFFFFF"
          >
            8090123175
          </text>
        </svg>
      </div>

      {showSubtext && !isSm && (
        <div className="text-center mt-1">
          <span className="block text-xs uppercase tracking-widest text-amber-400/90 font-medium">
            Royal Celebrations & Wedding Architecture
          </span>
        </div>
      )}
    </div>
  );
}
