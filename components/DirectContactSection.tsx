'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, Calendar, CheckCircle, Sparkles, User, Navigation } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '@/lib/data';

interface DirectContactSectionProps {
  preselectedService?: string;
}

export default function DirectContactSection({ preselectedService }: DirectContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: preselectedService || 'Wedding and engagement',
    venue: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const text = `*New Event Booking Inquiry - RV Events Farrukhabad* 👑
👤 *Client Name:* ${formData.name}
📞 *Phone Number:* ${formData.phone}
📅 *Event Date:* ${formData.date || 'To be decided'}
🎉 *Service Requested:* ${formData.service}
📍 *Venue / Location:* ${formData.venue || 'Farrukhabad / Fatehgarh area'}
📝 *Special Notes:* ${formData.notes || 'None'}

Please check your availability and contact me with a custom package quote.`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    setSubmissionRef('RV-' + Math.floor(100000 + Math.random() * 900000));
    setIsSubmitted(true);
  };

  const handleDirectWebSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill your name and phone number.');
      return;
    }
    setSubmissionRef('RV-' + Math.floor(100000 + Math.random() * 900000));
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Connect Directly with Vishal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
            Book Your Event Consultation in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
              Farrukhabad
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Visit our office at Bewar Road, Bholepur, or message us directly on WhatsApp for immediate response and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Vishal Founder Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/40 border border-amber-500/40 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 font-serif font-bold text-2xl shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  V
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-amber-400">Founder & Event Director</div>
                  <h3 className="text-xl font-serif font-bold text-white">Vishal</h3>
                  <p className="text-xs text-neutral-300">RV Events and Management Farrukhabad</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.rawPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Vishal%20ji,%20I%20would%20like%20to%20discuss%20an%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Address & Timings Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Business Location & Office</h4>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-[11px] text-amber-400/80 mt-1">
                    Landmark: {BUSINESS_INFO.landmark}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Plus Code: <span className="font-mono text-neutral-200">{BUSINESS_INFO.googlePlusCode}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-neutral-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Operational Hours</h4>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    {BUSINESS_INFO.workingHours} (Google Verified)
                  </p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">
                    ● Emergency wedding call support available 24/7 during events
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-amber-300 border border-neutral-700 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <div className="text-xs font-semibold text-neutral-300 mb-2">Available Across All Nearby Tehsils:</div>
              <div className="flex flex-wrap gap-1.5">
                {BUSINESS_INFO.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-neutral-900 text-amber-200 border border-neutral-800"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-amber-500/30 backdrop-blur-xl shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Thank You, {formData.name}!</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Your inquiry reference number is <strong className="text-amber-400">{submissionRef}</strong>. Vishal will personally contact you on <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${BUSINESS_INFO.rawPhone}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 text-neutral-950 font-bold text-sm hover:brightness-110"
                    >
                      Call Vishal Now: {BUSINESS_INFO.phone}
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-800 text-neutral-200 font-semibold text-sm hover:bg-neutral-700 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                        Direct Event Booking Form
                      </h3>
                      <p className="text-xs text-neutral-400">
                        Takes less than 1 minute to receive custom packages & date verification
                      </p>
                    </div>
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Your Full Name (आपका नाम) *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Contact / WhatsApp Number (मोबाइल नंबर) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Event Date */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Tentative Event Date (कार्यक्रम की तारीख)
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Required Service (आवश्यक सेवा)
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-400"
                      >
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-neutral-900">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Venue or Area */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Venue / City / Tehsil (स्थान अथवा मैरिज लॉन का नाम)
                    </label>
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="e.g. Fatehgarh Lawn, Bewar Road, Farrukhabad"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Special Requirements or Decor Vision (कोई विशेष फरमाइश)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. We need bride entry with cold pyro fireworks and yellow haldi theme..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-neutral-950 bg-gradient-to-r from-emerald-400 to-green-500 hover:brightness-110 shadow-lg cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-neutral-950" />
                      <span>Inquire via WhatsApp (Instant)</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleDirectWebSubmit}
                      className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-amber-200 bg-neutral-950 border border-amber-500/50 hover:bg-neutral-800 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Submit Request Online</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
