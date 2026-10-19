'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustStatsBar from '@/components/TrustStatsBar';
import ServicesSection from '@/components/ServicesSection';
import BudgetEstimator from '@/components/BudgetEstimator';
import GalleryShowcase from '@/components/GalleryShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import DirectContactSection from '@/components/DirectContactSection';
import Footer from '@/components/Footer';
import StickyMobileActionBar from '@/components/StickyMobileActionBar';
import ConsultationModal from '@/components/ConsultationModal';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Wedding and engagement');

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    setIsBookingOpen(true);
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-amber-400 selection:text-neutral-950 font-sans">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Dynamic Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Quick Trust & Stats Bar */}
        <TrustStatsBar />

        {/* 3. Our Comprehensive Services */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 4. Interactive Event Cost / Budget Estimator Widget */}
        <BudgetEstimator />

        {/* 5. Filterable Visual Gallery Showcase */}
        <GalleryShowcase />

        {/* 6. Client Testimonials & 5-Star Reviews Slider */}
        <TestimonialsSection />

        {/* 7. Why Choose Us & FAQs */}
        <FAQSection />

        {/* 8. Easy Inquiry & Location Contact Section */}
        <DirectContactSection preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar for instant calling & WhatsApp */}
      <StickyMobileActionBar />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
