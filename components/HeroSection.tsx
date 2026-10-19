'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, Calendar, Star, Sparkles, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import RoyalLogo from './RoyalLogo';
import { BUSINESS_INFO } from '@/lib/data';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Vishal%20ji,%20I%20am%20looking%20for%20event%20planning%20services%20with%20RV%20Events%20Farrukhabad.%20Please%20share%20details.`;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080808]">
      {/* Background Ambience & Wedding Stage Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Royal Indian Wedding Stage Farrukhabad"
          fill
          priority
          className="object-cover object-center opacity-25 filter brightness-75 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Rich Obsidian Vignette & Radial Gold Glows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-[#080808]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Brand Emblem */}
        <div className="mb-4 sm:mb-6 animate-fade-in">
          <RoyalLogo size="lg" showSubtext={false} />
        </div>

        {/* Local Verification & Trust Ribbon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-amber-300">5.0 Star Rated Local Event Planner</span>
          </div>
          <span className="text-neutral-500">·</span>
          <div className="flex items-center gap-1 text-xs text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Bholepur, Fatehgarh (Farrukhabad)</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white max-w-4xl leading-[1.18] sm:leading-[1.15]">
          Transforming Your Dreams into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 drop-shadow-[0_2px_15px_rgba(245,158,11,0.4)]">
            Royal Realities
          </span>{' '}
          in Farrukhabad!
        </h1>

        {/* Hindi Tagline */}
        <p className="mt-3 text-sm sm:text-base font-medium text-amber-200/90 font-serif">
          {BUSINESS_INFO.hindiName} — फर्रुखाबाद एवं फतेहगढ़ का प्रमुख लक्ज़री इवेंट पार्टनर
        </p>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
          {BUSINESS_INFO.subTagline}. Bespoke themes, flawless coordination, and unforgettable celebrations orchestrated by <strong className="text-amber-400 font-semibold">{BUSINESS_INFO.founder}</strong>.
        </p>

        {/* 3 Prominent Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl">
          {/* Button 1: Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:brightness-110 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5 text-neutral-950 animate-bounce" />
            <span>📞 Call Now: {BUSINESS_INFO.rawPhone}</span>
          </a>

          {/* Button 2: Chat on WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-emerald-100 bg-emerald-900/40 border border-emerald-500/50 hover:bg-emerald-800/50 shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>💬 Chat on WhatsApp</span>
          </a>

          {/* Button 3: Book Event Consultation */}
          <button
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-amber-200 bg-neutral-900/90 border border-amber-500/50 hover:border-amber-400 hover:bg-neutral-800 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-5 h-5 text-amber-400" />
            <span>📅 Book Event Consultation</span>
          </button>
        </div>

        {/* Feature Pills / Badges without generic slop */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-6 border-t border-neutral-800/80 text-neutral-400 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Customized Royal Themes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>100% Punctual Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Direct Lead: Vishal</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Star className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Pocket-Friendly Packages</span>
          </div>
        </div>
      </div>
    </section>
  );
}
