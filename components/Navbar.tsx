'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin, Sparkles } from 'lucide-react';
import RoyalLogo from './RoyalLogo';
import { BUSINESS_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Cost Estimator', href: '#calculator' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'Contact & Map', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-amber-500/20 py-2 shadow-2xl'
            : 'bg-gradient-to-b from-neutral-950/95 via-neutral-950/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Title */}
            <Link href="/" className="flex items-center gap-3 group text-left">
              <RoyalLogo size="sm" showSubtext={false} className="shrink-0" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-wide">
                    RV EVENTS
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase font-semibold tracking-wider text-amber-500/80 border border-amber-500/30 px-1.5 py-0.5 rounded">
                    Farrukhabad
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-neutral-400 group-hover:text-amber-300/80 transition-colors">
                  आर्वी इवेंट्स एंड मैनेजमेंट · Bholepur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors relative py-1 hover:border-b-2 hover:border-amber-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Phone call pill */}
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-500/40 rounded-full hover:bg-amber-900/40 transition-all"
                title="Call Vishal Now"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              {/* Consultation CTA */}
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-full hover:brightness-110 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Event</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="p-2 text-amber-400 bg-amber-950/40 border border-amber-500/30 rounded-full"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-300 hover:text-amber-400 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-950/98 border-b border-amber-500/30 px-5 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-neutral-200 hover:text-amber-400 transition-colors py-1.5 border-b border-neutral-900"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Event Consultation</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/40 rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Vishal</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Vishal%20ji,%20I%20want%20to%20inquire%20about%20event%20planning%20in%20Farrukhabad.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 rounded-xl"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pt-2 text-center text-xs text-neutral-400 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Bewar Rd, Bholepur, Fatehgarh, Farrukhabad</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
