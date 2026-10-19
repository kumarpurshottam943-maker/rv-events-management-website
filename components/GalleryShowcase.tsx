'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, MapPin, Sparkles, X, MessageCircle, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from '@/lib/data';

export default function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'stages' | 'entries' | 'haldi_mehandi' | 'weddings' | 'home'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Setups' },
    { id: 'stages', label: 'Royal Stages' },
    { id: 'entries', label: 'Bride & Groom Entries' },
    { id: 'haldi_mehandi', label: 'Haldi & Mehandi' },
    { id: 'weddings', label: 'Wedding Mandaps' },
    { id: 'home', label: 'Home Illumination' },
  ] as const;

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Real Local Event Portfolios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
            Grand Setups Crafted in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
              Farrukhabad & Fatehgarh
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            A glimpse into our signature mandap architectures, magical low-fog entries, cold pyro fireworks, and festive flower canopies.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                  : 'bg-neutral-900/80 text-neutral-300 hover:text-amber-300 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(212,175,55,0.2)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover overlay hint */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-neutral-950/70 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption & Location */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-1 text-[11px] text-amber-400 font-medium mb-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-400 line-clamp-2 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link Banner */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 hover:text-amber-200 hover:border-amber-400 text-xs sm:text-sm font-medium transition-all"
          >
            <span>Follow our latest event reels & photos on Instagram</span>
            <span className="font-bold underline">{BUSINESS_INFO.instagram}</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/80 text-neutral-300 hover:text-white border border-neutral-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-72 sm:h-96 md:h-[480px] w-full bg-neutral-950">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Info Bar */}
            <div className="p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedPhoto.location}</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-white">{selectedPhoto.title}</h4>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">{selectedPhoto.description}</p>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Vishal%20ji,%20I%20love%20the%20setup%20"${encodeURIComponent(selectedPhoto.title)}"%20from%20your%20gallery.%20Can%20we%20do%20something%20similar%20for%20my%20event?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire This Look</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
