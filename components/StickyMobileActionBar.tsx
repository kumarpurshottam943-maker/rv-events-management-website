'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function StickyMobileActionBar() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Vishal%20ji,%20I%20am%20calling/messaging%20from%20your%20RV%20Events%20Farrukhabad%20website.%20I%20need%20details%20for%20an%20event.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-neutral-950/95 backdrop-blur-lg border-t border-amber-500/30 sm:hidden shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 font-black text-xs shadow-lg active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-neutral-950 text-neutral-950 animate-pulse" />
          <span>Call Vishal Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black text-xs shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white text-white" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
