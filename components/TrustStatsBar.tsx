'use client';

import React from 'react';
import { Star, Award, HeartHandshake, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function TrustStatsBar() {
  const stats = [
    {
      icon: Star,
      value: "5.0 ★",
      label: "Google Verified Rating",
      sublabel: "Flawless Client Feedback",
      color: "text-amber-400",
    },
    {
      icon: Award,
      value: "100+",
      label: "Grand Events Executed",
      sublabel: "Across Farrukhabad & Fatehgarh",
      color: "text-amber-300",
    },
    {
      icon: Sparkles,
      value: "15+",
      label: "Bride & Groom Entry Concepts",
      sublabel: "Cold Pyro, Fog, Palki & Chariot",
      color: "text-yellow-400",
    },
    {
      icon: HeartHandshake,
      value: "100%",
      label: "Tailored Packages",
      sublabel: "Luxury Looks for Every Budget",
      color: "text-amber-400",
    },
  ];

  return (
    <div className="relative z-20 -mt-8 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-neutral-900/90 border border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 1 ? 'pt-4 lg:pt-0' : idx === 1 ? 'pt-0' : ''
                } px-2`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-2xl sm:text-3xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {stat.label}
                </span>
                <span className="text-[11px] text-neutral-400 mt-0.5">
                  {stat.sublabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
