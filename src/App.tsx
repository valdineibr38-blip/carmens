/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FleetAndTechnology } from './components/FleetAndTechnology';
import { CoverageMap } from './components/CoverageMap';
import { Testimonials } from './components/Testimonials';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { TrackingModal } from './components/TrackingModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';

export default function App() {
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [activeTrackingCode, setActiveTrackingCode] = useState('CMT-84920');

  // Policy modal state
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [activePolicyTab, setActivePolicyTab] = useState<PolicyType>('termos');

  // Prefilled quote fields
  const [quoteService, setQuoteService] = useState('');
  const [quoteOrigin, setQuoteOrigin] = useState('');
  const [quoteDestination, setQuoteDestination] = useState('');

  const handleOpenTracking = (code?: string) => {
    if (code) {
      setActiveTrackingCode(code);
    }
    setIsTrackingModalOpen(true);
  };

  const handleOpenPolicy = (tab: PolicyType) => {
    setActivePolicyTab(tab);
    setIsPolicyModalOpen(true);
  };

  const scrollToQuote = () => {
    const quoteElement = document.getElementById('cotacao') || document.getElementById('solicitar-cotacao');
    if (quoteElement) {
      const yOffset = -70;
      const y = quoteElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleQuickQuote = (origin: string, dest: string, weight: string) => {
    setQuoteOrigin(origin);
    setQuoteDestination(dest);
    scrollToQuote();
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setQuoteService(serviceTitle);
    scrollToQuote();
  };

  const handleQuoteRoute = (origin: string, dest: string) => {
    setQuoteOrigin(origin);
    setQuoteDestination(dest);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#e9b949] selection:text-[#1a1404] relative">
      {/* Sticky Header */}
      <Header
        onOpenTracking={() => handleOpenTracking()}
        onOpenQuote={scrollToQuote}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Fleet Visual & Quick Tracking / Quote Widget */}
        <Hero
          onSearchTracking={handleOpenTracking}
          onQuickQuote={handleQuickQuote}
        />

        {/* 2. Transportation Services & Solutions Portfolio */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 3. Fleet, Telemetry & 24h Operational Security */}
        <FleetAndTechnology onSelectVehicleForQuote={handleSelectServiceForQuote} />

        {/* 4. National Corridors & Transit Time Calculator */}
        <CoverageMap onQuoteRoute={handleQuoteRoute} />

        {/* 5. Client Testimonials & Enterprise Trust Badges */}
        <Testimonials />

        {/* 6. Comprehensive Freight Quote & B2B Proposal Section */}
        <QuoteSection
          prefilledService={quoteService}
          prefilledOrigin={quoteOrigin}
          prefilledDestination={quoteDestination}
        />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenPolicy={handleOpenPolicy} />

      {/* Live Cargo Tracking Telemetry Modal */}
      <TrackingModal
        isOpen={isTrackingModalOpen}
        onClose={() => setIsTrackingModalOpen(false)}
        initialCode={activeTrackingCode}
      />

      {/* Governance, Terms, Privacy & LGPD, Ethics Modal */}
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
        initialTab={activePolicyTab}
      />
    </div>
  );
}

