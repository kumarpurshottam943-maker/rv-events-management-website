'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, MessageCircle, ArrowRight, Check, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { SERVICES_LIST, ServiceItem, BUSINESS_INFO } from '@/lib/data';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForBooking }: ServicesSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'wedding' | 'decor' | 'entry' | 'parties' | 'corporate'>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Royal Services (सभी सेवाएं)' },
    { id: 'wedding', label: 'Weddings & Banquets' },
    { id: 'entry', label: 'Bride & Groom Entries' },
    { id: 'decor', label: 'Stage, Haldi & Home Decor' },
    { id: 'parties', label: 'Birthdays & Celebrations' },
    { id: 'corporate', label: 'Corporate & School Events' },
  ] as const;

  const filteredServices = selectedFilter === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === selectedFilter);

  const getServiceWhatsAppUrl = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Namaste Vishal ji (RV Events Farrukhabad), I am interested in booking "${service.title}". Please share available packages and date availability.`
    );
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="services" className="relative py-20 bg-neutral-950 overflow-hidden">
      {/* Decorative Golden Ambient Backing */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Comprehensive Event Solutions in Farrukhabad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
            Our Grand & Luxury{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
              Event Services
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
            From intimate home celebrations to 2,000+ guest royal weddings on Bewar Road, we turn ordinary venues into opulent palace settings.
          </p>
        </div>

        {/* Filter Segmented Control Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-neutral-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                  : 'bg-neutral-900/80 text-neutral-300 hover:text-amber-300 border border-neutral-800 hover:border-amber-500/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Price starting indicator */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-neutral-950/85 border border-amber-500/40 text-amber-300 text-xs font-semibold backdrop-blur-md">
                  Starts {service.priceStartingFrom}
                </div>

                {/* Hindi Title Kicker */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-950/80 text-amber-200/90 text-[11px] font-medium border border-neutral-800">
                  {service.hindiTitle}
                </div>
              </div>

              {/* Service Details Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 space-y-1.5">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Book This Service</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getServiceWhatsAppUrl(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-emerald-400 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/40 rounded-lg transition-colors flex items-center gap-1 text-xs font-medium"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Catalog List from screenshot summary */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-amber-500/20 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-white">
                All Specialized Services Offered by RV Events Farrukhabad
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Verified from our official business registry at Bewar Rd, Bholepur, Fatehgarh
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors w-fit shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Discuss with Vishal</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs text-neutral-300">
            {[
              "Anniversary party planning",
              "Baby shower planning",
              "Birthday party planning",
              "Catering & Banquets",
              "Corporate events",
              "Decorations & Lighting",
              "Event decor design",
              "Outdoor event planning",
              "School & College event",
              "Theme party & DJ setup",
              "Wedding and engagement",
              "Bride & Groom Entry",
              "Home Decoration",
              "Haldi & Mehandi",
              "Reception Party",
              "Stage Decoration"
            ].map((srv, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-neutral-950/60 border border-neutral-800/60">
                <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                <span className="font-medium text-neutral-200">{srv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
