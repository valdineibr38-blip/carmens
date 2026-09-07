import React, { useState, useEffect } from 'react';
import {
  Search,
  PhoneCall,
  Menu,
  X,
  FileText,
  ShieldCheck,
  Truck,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { CarmensLogo } from './CarmensLogo';

interface HeaderProps {
  onOpenTracking: () => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTracking, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b2341]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3 border-b border-[#c5a059]/20'
          : 'bg-gradient-to-b from-[#0b2341]/90 via-[#0b2341]/70 to-transparent py-4 sm:py-5'
      }`}
    >
      {/* Top micro bar for corporate info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Lockup */}
          <a
            href="#"
            className="group flex items-center transition-all hover:opacity-95 py-0.5"
            id="header-brand-link"
          >
            <CarmensLogo variant="horizontal" theme="light" className="w-auto" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav-menu">
            <button
              onClick={() => scrollToSection('inicio')}
              className="px-3 py-1.5 text-sm font-medium text-slate-200 hover:text-[#e9b949] transition-colors rounded-md cursor-pointer"
              id="nav-link-inicio"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="px-3 py-1.5 text-sm font-medium text-slate-200 hover:text-[#e9b949] transition-colors rounded-md cursor-pointer"
              id="nav-link-servicos"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('frota')}
              className="px-3 py-1.5 text-sm font-medium text-slate-200 hover:text-[#e9b949] transition-colors rounded-md cursor-pointer"
              id="nav-link-frota"
            >
              Frota & Segurança
            </button>
            <button
              onClick={() => scrollToSection('rotas')}
              className="px-3 py-1.5 text-sm font-medium text-slate-200 hover:text-[#e9b949] transition-colors rounded-md cursor-pointer"
              id="nav-link-rotas"
            >
              Rotas Nacionais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="px-3 py-1.5 text-sm font-medium text-slate-200 hover:text-[#e9b949] transition-colors rounded-md cursor-pointer"
              id="nav-link-contato"
            >
              Contato
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Track button */}
            <button
              onClick={onOpenTracking}
              id="header-quick-tracking-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all shadow-sm cursor-pointer"
              title="Rastrear envio em tempo real"
            >
              <Search className="w-3.5 h-3.5 text-[#e9b949]" />
              <span>Rastrear Carga</span>
            </button>

            {/* Request Freight Quote CTA */}
            <button
              onClick={onOpenQuote}
              id="header-quote-cta-btn"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold text-[#1a1404] bg-[#e9b949] hover:bg-[#cf9f30] active:scale-95 shadow-md shadow-[#e9b949]/20 rounded-lg transition-all cursor-pointer"
            >
              <Truck className="w-3.5 h-3.5 text-[#1a1404]" />
              <span>COTAR FRETE</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenTracking}
              className="p-2 text-slate-200 hover:text-[#c5a059] bg-slate-800/60 rounded-md"
              id="mobile-track-icon-btn"
              aria-label="Rastrear"
            >
              <Search className="w-4 h-4 text-[#c5a059]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#c5a059] focus:outline-none"
              id="mobile-menu-toggle-btn"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-[#0b2341] border-b border-[#c5a059]/30 px-4 pt-3 pb-6 space-y-3 mt-2 animate-in fade-in slide-in-from-top-3 duration-200 shadow-xl"
          id="mobile-menu-container"
        >
          <div className="flex flex-col space-y-2 pt-2">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#e9b949] rounded-md"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#e9b949] rounded-md"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('frota')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#e9b949] rounded-md"
            >
              Frota & Segurança
            </button>
            <button
              onClick={() => scrollToSection('rotas')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#e9b949] rounded-md"
            >
              Rotas Nacionais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#e9b949] rounded-md"
            >
              Contato
            </button>
          </div>

          <div className="pt-4 border-t border-slate-700/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracking();
              }}
              className="w-full py-2.5 px-4 bg-slate-800 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 border border-slate-700"
            >
              <Search className="w-4 h-4 text-[#e9b949]" />
              <span>Rastrear Carga</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 px-4 bg-[#e9b949] hover:bg-[#cf9f30] text-[#1a1404] rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <Truck className="w-4 h-4 text-[#1a1404]" />
              <span>COTAR FRETE</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
