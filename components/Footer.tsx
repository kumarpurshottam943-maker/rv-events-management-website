'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Instagram, Star, Heart, Clock, Mail } from 'lucide-react';
import RoyalLogo from './RoyalLogo';
import { BUSINESS_INFO } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-neutral-400 pt-16 pb-28 sm:pb-16 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="space-y-4">
            <RoyalLogo size="md" showSubtext={false} className="items-start" />
            <p className="text-xs text-neutral-400 leading-relaxed">
              Farrukhabad&apos;s premier luxury event planner. Transforming weddings, grand entries, stage decor, and family celebrations into royal realities.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 Star Rated Local Business</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Contact & Founder
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">Founder:</span>
                <span className="text-white font-medium">{BUSINESS_INFO.founder} ({BUSINESS_INFO.role})</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="text-neutral-300 hover:text-amber-400 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +91 {BUSINESS_INFO.rawPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-pink-400 transition-colors"
                >
                  {BUSINESS_INFO.instagram}
                </a>
              </div>
            </div>
          </div>

          {/* Location & Address */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Office & Territory
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-neutral-300 leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="text-[11px] text-neutral-400 pl-6.5">
                Landmark: {BUSINESS_INFO.landmark}
              </div>
              <div className="text-[11px] text-neutral-400 pl-6.5">
                Plus Code: {BUSINESS_INFO.googlePlusCode}
              </div>
              <div className="flex items-center gap-2.5 pl-0 mt-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-neutral-300">{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Service Areas */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Wedding & Entry Services
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Interactive Budget Estimator
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Stage & Mandap Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Local Farrukhabad Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Directions & Direct Booking
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-3">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="text-amber-200/80 font-serif">
            {BUSINESS_INFO.hindiName} · फर्रुखाबाद, उत्तर प्रदेश
          </p>
        </div>
      </div>
    </footer>
  );
}
