'use client';

import React, { useState } from 'react';
import { Calculator, MessageCircle, Sparkles, Check, Users, MapPin, IndianRupee, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface AddonOption {
  id: string;
  name: string;
  cost: number;
  description: string;
}

export default function BudgetEstimator() {
  const [eventType, setEventType] = useState<'wedding' | 'haldi' | 'engagement' | 'birthday' | 'anniversary' | 'corporate'>('wedding');
  const [guestCount, setGuestCount] = useState<number>(300);
  const [venueType, setVenueType] = useState<'lawn' | 'banquet' | 'home'>('lawn');
  const [includeCatering, setIncludeCatering] = useState<boolean>(false);
  const [cateringPerPlate, setCateringPerPlate] = useState<number>(550);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'grand-entry',
    'royal-stage'
  ]);

  const eventTypeOptions = [
    { id: 'wedding', name: 'Royal Wedding & Reception', baseCost: 45000, desc: 'Complete mandap, entry, stage & ritual decor' },
    { id: 'haldi', name: 'Haldi & Mehandi Theme', baseCost: 15000, desc: 'Yellow marigold, swing, urli & photobooth' },
    { id: 'engagement', name: 'Engagement & Ring Ceremony', baseCost: 25000, desc: 'Floral ring backdrop, stage & ambient lights' },
    { id: 'birthday', name: 'Grand Birthday Party', baseCost: 12000, desc: 'Theme balloons, LED sign, cake table & sound' },
    { id: 'anniversary', name: 'Anniversary Celebration', baseCost: 15000, desc: 'Romantic couple stage, fairy lights & music' },
    { id: 'corporate', name: 'School / Corporate Event', baseCost: 28000, desc: 'Truss, sound system, seating & backdrop' },
  ] as const;

  const addonsList: AddonOption[] = [
    { id: 'grand-entry', name: 'Grand Bride/Groom Entry', cost: 15000, description: 'Dry ice fog + 8 cold pyro sparkulars + floral chhatar' },
    { id: 'royal-stage', name: 'Imperial Stage Decoration', cost: 20000, description: 'Gold pillars, fresh imported roses, chandelier backdrop' },
    { id: 'revolving-stage', name: 'Hydraulic Revolving Varmala Stage', cost: 18000, description: '360° rotating flower platform with CO2 jets' },
    { id: 'dj-sound', name: 'JBL / Line Array DJ & Trussing', cost: 15000, description: 'Heavy bass sound setup with moving beam heads' },
    { id: 'home-lighting', name: 'House & Courtyard Fairy Lights', cost: 8000, description: 'Full exterior ambient LED warm strings & torans' },
    { id: 'photo-booth', name: 'Royal Vintage Photo Booth', cost: 6000, description: 'Custom printed theme backdrop with fun handheld props' },
  ];

  const currentEvent = eventTypeOptions.find(e => e.id === eventType) || eventTypeOptions[0];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  // Cost calculation
  const baseCost = currentEvent.baseCost;
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = addonsList.find(a => a.id === addonId);
    return sum + (item ? item.cost : 0);
  }, 0);

  const cateringCost = includeCatering ? guestCount * cateringPerPlate : 0;
  const guestLogisticsFactor = guestCount > 500 ? (guestCount - 500) * 20 : 0;

  const totalMin = Math.round((baseCost + addonsTotal + cateringCost + guestLogisticsFactor) * 0.95);
  const totalMax = Math.round((baseCost + addonsTotal + cateringCost + guestLogisticsFactor) * 1.15);

  const formatINR = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  const getWhatsAppBookingUrl = () => {
    const selectedAddonNames = selectedAddons
      .map(id => addonsList.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `*Namaste Vishal ji (RV Events Farrukhabad)* 👑
I checked your website and want to discuss an event plan:

📌 *Event Type:* ${currentEvent.name}
👥 *Expected Guests:* ${guestCount} persons
📍 *Venue Type:* ${venueType === 'lawn' ? 'Open Lawn / Ground' : venueType === 'banquet' ? 'Banquet Hall' : 'Home / Courtyard'}
✨ *Add-on Services Selected:* ${selectedAddonNames || 'None'}
🍲 *Catering Included:* ${includeCatering ? `Yes (${guestCount} plates)` : 'No / Decor Only'}

Please check date availability and send me your best customized package for Farrukhabad. Thank you!`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="calculator" className="relative py-20 bg-neutral-950 border-t border-b border-amber-500/25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Smart Farrukhabad Event Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
            Interactive Event{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
              Customizer & Planner
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Select your preferences tailored for weddings and parties in Farrukhabad, Fatehgarh, and send your requirements directly to Vishal on WhatsApp!
          </p>
        </div>

        {/* Estimator Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Event Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                1. Select Event Type (कार्यक्रम का प्रकार)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {eventTypeOptions.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEventType(item.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      eventType === item.id
                        ? 'bg-amber-950/50 border-amber-500 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm text-white">{item.name}</div>
                    <div className="text-[10px] text-amber-400/80 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  2. Estimated Guest Count (अतिथियों की संख्या)
                </label>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950 border border-amber-500/40 text-amber-300 text-xs font-bold">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{guestCount} Guests</span>
                </div>
              </div>
              <input
                type="range"
                min="50"
                max="1500"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>Intimate (50)</span>
                <span>Standard (300)</span>
                <span>Grand (800)</span>
                <span>Mega (1500+)</span>
              </div>
            </div>

            {/* Step 3: Venue Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                3. Venue Setting (स्थान का प्रकार)
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'lawn', label: 'Open Lawn / Ground', sub: 'Fatehgarh / Bewar Rd' },
                  { id: 'banquet', label: 'AC Banquet Hall', sub: 'Hotel / Resort' },
                  { id: 'home', label: 'Home & Courtyard', sub: 'Terrace & Lawn' },
                ].map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVenueType(v.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      venueType === v.id
                        ? 'bg-amber-950/50 border-amber-500 text-amber-200'
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{v.label}</div>
                    <div className="text-[10px] text-neutral-400">{v.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Special Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                4. Select Royal Add-ons (विशेष सजावट एवं एंट्री विकल्प)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-neutral-950/80 border-amber-500/80 text-white'
                          : 'bg-neutral-950/40 border-neutral-800/80 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          isChecked ? 'bg-amber-500 border-amber-400 text-neutral-950' : 'border-neutral-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">{addon.name}</span>
                        </div>
                        <p className="text-[10px] text-neutral-400 mt-0.5 leading-snug">{addon.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Catering Option Toggle */}
            <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-white block">Include Food & Catering Services?</span>
                <span className="text-[11px] text-neutral-400">
                  Full Awadhi & North Indian spread with live chaat stalls
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeCatering(!includeCatering)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    includeCatering
                      ? 'bg-amber-400 text-neutral-950 shadow-md'
                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {includeCatering ? 'Included (हाँ)' : 'Decor Only (नहीं)'}
                </button>
              </div>
            </div>
          </div>

          {/* Estimate Summary Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-neutral-950 to-neutral-900 border border-amber-500/40 rounded-2xl p-6 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    RV Events Farrukhabad
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-medium border border-amber-500/30">
                  Ready to Book
                </span>
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-neutral-400">Selected Event Summary</span>
                <div className="text-xl sm:text-2xl font-serif font-bold text-amber-300 mt-1">
                  {currentEvent.name}
                </div>
                <p className="text-xs text-neutral-300 mt-2">
                  Guests: <span className="text-white font-bold">{guestCount}</span> | Venue: <span className="text-white font-bold capitalize">{venueType}</span>
                </p>
              </div>

              {/* Selection List */}
              <div className="mt-6 space-y-2.5 text-xs text-neutral-300 border-t border-neutral-800 pt-4">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Selected Add-ons:</span>
                  <span className="font-semibold text-amber-400">{selectedAddons.length} Items</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Catering Service:</span>
                  <span className="font-semibold text-white">{includeCatering ? 'Included' : 'Not Included'}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200/90 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Vishal’s Direct Best Quotation</span>
                </div>
                <p className="text-[10px] text-neutral-400">
                  Get exact customized pricing directly on WhatsApp based on your venue size and flower decoration choices.
                </p>
              </div>
            </div>

            {/* Direct Send to WhatsApp CTA */}
            <div className="mt-6 pt-4 border-t border-neutral-800">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-neutral-950 bg-gradient-to-r from-emerald-400 to-green-500 hover:brightness-110 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-neutral-950" />
                <span>Send Details to WhatsApp</span>
              </a>
              <div className="text-center mt-2">
                <span className="text-[10px] text-neutral-400">
                  Vishal will review your choices and reply on WhatsApp within 15 minutes!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
