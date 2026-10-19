'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ShieldCheck, ExternalLink } from 'lucide-react';
import { TESTIMONIALS_LIST, BUSINESS_INFO } from '@/lib/data';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_LIST[currentIndex];

  return (
    <section id="reviews" className="relative py-20 bg-neutral-950 overflow-hidden">
      {/* Subtle gold glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified 5.0 Star Client Satisfaction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
            Words of Praise from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
              Farrukhabad Families
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Real experiences from weddings, engagements, and grand celebrations managed personally by Vishal and the RV Events crew.
          </p>
        </div>

        {/* Featured Slider Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-neutral-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
            <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 text-amber-500/15 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/40">
                5.0 Google Rating
              </span>
            </div>

            {/* Quote Text */}
            <blockquote className="text-lg sm:text-xl font-serif text-white leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Hindi Translation Highlight */}
            {current.hindiQuote && (
              <p className="mt-3 text-sm text-amber-200/90 font-serif">
                &ldquo;{current.hindiQuote}&rdquo;
              </p>
            )}

            {/* Author info */}
            <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{current.clientName}</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </h4>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                  <span className="text-amber-400">{current.eventType}</span>
                  <span>·</span>
                  <span>{current.location}</span>
                  <span>·</span>
                  <span>{current.date}</span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="p-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-neutral-400 px-2">
                  {currentIndex + 1} / {TESTIMONIALS_LIST.length}
                </span>
                <button
                  onClick={nextReview}
                  className="p-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 text-white">
            <span className="font-bold">Google Business Listing:</span>
            <span>RV EVENTS AND MANAGEMENT FARRUKHABAD</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold underline"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
