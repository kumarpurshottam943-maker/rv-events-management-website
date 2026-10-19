'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_INFO } from '@/lib/data';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative py-20 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us 4 Pillars */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>The RV Events Farrukhabad Advantage</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Why Farrukhabad Families Trust Us
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Local Farrukhabad Team",
                hindi: "स्थानीय विश्वसनीय टीम",
                desc: "Headquartered in Bholepur, Fatehgarh. We know all local venues, wedding lawns, and vendors personally."
              },
              {
                title: "Safety & Smokeless Pyro",
                hindi: "100% सुरक्षित कोल्ड आतिशबाजी",
                desc: "Certified cold-fire sparkulars safe for indoor banquet halls, stage clothes, and child safety."
              },
              {
                title: "Owner Vishal's Oversight",
                hindi: "विशाल जी की सीधी निगरानी",
                desc: "From initial design sketches to final garland coordination, Vishal is on-site throughout your celebration."
              },
              {
                title: "Transparent Quotations",
                hindi: "साफ और स्पष्ट बजट",
                desc: "No hidden charges or surprise last-minute bills. Everything agreed in advance with genuine material quality."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-amber-400 mb-0.5">{pillar.hindi}</div>
                  <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Common Inquiries (अक्सर पूछे जाने वाले सवाल)
          </h3>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900/70 border border-neutral-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-800/40 transition-colors"
                >
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {item.q}
                    </h4>
                    <p className="text-xs text-amber-300/80 font-medium mt-0.5">
                      {item.hindiQ}
                    </p>
                  </div>
                  <div className="p-1 rounded-full bg-neutral-800 text-neutral-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-neutral-300 space-y-2 border-t border-neutral-800/60 pt-3">
                    <p className="leading-relaxed">{item.a}</p>
                    <p className="text-amber-200/90 font-serif leading-relaxed bg-neutral-950/50 p-3 rounded-xl border border-amber-500/10">
                      {item.hindiA}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
