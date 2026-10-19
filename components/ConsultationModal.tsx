'use client';

import React, { useState } from 'react';
import { X, Calendar, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '@/lib/data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialService }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'Wedding and engagement');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please enter your name and phone number');
      return;
    }

    const text = `*Event Consultation Request - RV Events Farrukhabad* 👑
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📅 *Event Date:* ${date || 'Yet to decide'}
🎉 *Service:* ${service}

Hello Vishal ji, I would like to schedule an event consultation with you. Please call or WhatsApp me!`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-neutral-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-white bg-neutral-800/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white">Consultation Request Sent!</h3>
            <p className="text-xs text-neutral-300">
              Vishal will reach out to you directly on <strong className="text-amber-400">{phone}</strong>.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Free Event Consultation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Schedule with Vishal
            </h3>
            <p className="text-xs text-neutral-300">
              Discuss your stage theme, bride/groom entry ideas, catering & pricing for Farrukhabad.
            </p>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Deepak Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 8090123175"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Service Type</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.title} className="bg-neutral-900">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Approximate Event Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-neutral-950" />
                <span>Confirm & Send on WhatsApp</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-amber-300 bg-neutral-950 border border-amber-500/30 hover:bg-neutral-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Or Call Vishal Directly ({BUSINESS_INFO.phone})</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
