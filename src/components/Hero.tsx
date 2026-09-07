import React, { useState } from 'react';
import {
  Search,
  Truck,
  ShieldCheck,
  Clock,
  Layers,
  ArrowRight,
  Boxes,
  MapPin,
  FileText,
  Phone,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import heroFleetImg from '../assets/images/carmens_fleet_hero_1788703970229.jpg';

interface HeroProps {
  onSearchTracking: (code: string) => void;
  onQuickQuote: (origin: string, dest: string, weight: string) => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearchTracking,
  onQuickQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'track' | 'quote' | 'central'>('track');
  const [trackingInput, setTrackingInput] = useState('');
  const [documentInput, setDocumentInput] = useState('');
  const [originCep, setOriginCep] = useState('');
  const [destCep, setDestCep] = useState('');

  // Quick quote state
  const [originInput, setOriginInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');
  const [cargoWeightInput, setCargoWeightInput] = useState('');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const codeToSearch = trackingInput.trim() || 'CMT-84920';
    onSearchTracking(codeToSearch);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickQuote(originInput || originCep, destinationInput || destCep, cargoWeightInput);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-[#0a1635] text-white"
    >
      {/* Background with Road Texture & Ambient Navy Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroFleetImg}
          alt="Frota Carmen's Transportes na rodovia ao entardecer"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1635] via-[#0a1635]/90 to-[#14264d]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_20%,rgba(36,58,114,0.45)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:50px_50px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e9b949]/12 border border-[#e9b949]/35 text-xs font-semibold uppercase tracking-wider text-[#e9b949]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e9b949]" />
              <span>LOGÍSTICA RODOVIÁRIA INTELIGENTE & CARGAS FRACIONADAS</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl xl:text-[54px] font-extrabold tracking-tight leading-[1.08] text-white"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
            >
              Excelência e Pontualidade na{' '}
              <span className="text-[#e9b949]">
                Logística Rodoviária do Brasil.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#b8c1d6] max-w-2xl leading-relaxed font-normal">
              Conectamos polos industriais, centros de distribuição e grandes eixos de consumo com precisão cirúrgica, telemetria 24h e a máxima segurança operacional.
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  const quoteElem = document.getElementById('cotacao');
                  if (quoteElem) {
                    quoteElem.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onQuickQuote('', '', '');
                  }
                }}
                id="hero-primary-quote-btn"
                className="px-6 py-3.5 rounded-xl font-bold text-[#1a1404] bg-[#e9b949] hover:bg-[#cf9f30] active:scale-95 shadow-lg shadow-[#e9b949]/20 flex items-center gap-2.5 transition-all cursor-pointer"
              >
                <Truck className="w-4 h-4 text-[#1a1404]" />
                <span>Solicitar Cotação B2B</span>
              </button>

              <button
                onClick={() => {
                  const frotaElem = document.getElementById('frota');
                  if (frotaElem) {
                    frotaElem.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                id="hero-explore-services-btn"
                className="px-5 py-3.5 rounded-xl font-semibold text-white bg-transparent hover:bg-white/10 border border-white/25 hover:border-white/50 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-white" />
                <span>Conhecer Soluções & Frota</span>
              </button>
            </div>
          </div>

          {/* Right Column: Tracking Card Widget */}
          <div className="lg:col-span-5">
            <div
              className="bg-white text-[#0e1b3a] rounded-2xl p-6 shadow-2xl border border-white/40 relative overflow-hidden"
              id="hero-dispatch-widget"
            >
              {/* Tabs */}
              <div className="flex gap-1 bg-[#f5f7fb] p-1 rounded-xl mb-4.5">
                <button
                  onClick={() => setActiveTab('track')}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'track'
                      ? 'bg-white text-[#0f1d44] shadow-xs'
                      : 'text-[#5b6478] hover:text-[#0e1b3a]'
                  }`}
                  id="hero-tab-track"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Rastrear Carga</span>
                </button>
                <button
                  onClick={() => setActiveTab('quote')}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'quote'
                      ? 'bg-white text-[#0f1d44] shadow-xs'
                      : 'text-[#5b6478] hover:text-[#0e1b3a]'
                  }`}
                  id="hero-tab-quote"
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Simular Frete</span>
                </button>
                <button
                  onClick={() => setActiveTab('central')}
                  className={`py-2.5 px-3 rounded-lg text-[11px] font-bold uppercase transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'central'
                      ? 'bg-white text-[#0f1d44] shadow-xs'
                      : 'text-[#5b6478] hover:text-[#0e1b3a]'
                  }`}
                  id="hero-tab-central"
                >
                  <span>CENTRAL 24H</span>
                </button>
              </div>

              {/* Tab 1: Rastrear Carga */}
              {activeTab === 'track' && (
                <form onSubmit={handleTrackSubmit} className="space-y-3" id="form-hero-track">
                  <div className="text-[11px] font-bold tracking-wider text-[#5b6478] uppercase text-center mb-1">
                    NÚMERO DO CTE, NF-E OU CÓDIGO DE RASTREIO
                  </div>

                  <div className="flex items-center gap-2 bg-[#f5f7fb] border border-[#e3e8f0] px-3 py-2.5 rounded-lg">
                    <FileText className="w-4 h-4 text-[#5b6478] shrink-0" />
                    <input
                      type="text"
                      value={trackingInput}
                      onChange={(e) => setTrackingInput(e.target.value)}
                      placeholder="Ex: CT-e 84920 ou 3524..."
                      className="w-full border-0 bg-transparent outline-none text-[#0e1b3a] font-semibold text-sm placeholder:text-slate-400"
                      id="hero-tracking-input"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#f5f7fb] border border-[#e3e8f0] p-2 rounded-lg">
                      <span className="block text-[10px] font-bold text-[#5b6478] uppercase mb-0.5">CNPJ/CPF</span>
                      <input
                        type="text"
                        value={documentInput}
                        onChange={(e) => setDocumentInput(e.target.value)}
                        placeholder="00.000.000/0001"
                        className="w-full border-0 bg-transparent outline-none text-xs font-semibold text-[#0e1b3a]"
                      />
                    </div>
                    <div className="bg-[#f5f7fb] border border-[#e3e8f0] p-2 rounded-lg">
                      <span className="block text-[10px] font-bold text-[#5b6478] uppercase mb-0.5">CEP - INÍCIO</span>
                      <input
                        type="text"
                        value={originCep}
                        onChange={(e) => setOriginCep(e.target.value)}
                        placeholder="00000-000"
                        className="w-full border-0 bg-transparent outline-none text-xs font-semibold text-[#0e1b3a]"
                      />
                    </div>
                    <div className="bg-[#f5f7fb] border border-[#e3e8f0] p-2 rounded-lg">
                      <span className="block text-[10px] font-bold text-[#5b6478] uppercase mb-0.5">CEP - DESTINO</span>
                      <input
                        type="text"
                        value={destCep}
                        onChange={(e) => setDestCep(e.target.value)}
                        placeholder="00000-000"
                        className="w-full border-0 bg-transparent outline-none text-xs font-semibold text-[#0e1b3a]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 py-1 text-xs text-[#5b6478]">
                    <span>Exemplos para teste:</span>
                    {['CMT-84920', 'CMT-41092'].map((code) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => {
                          setTrackingInput(code);
                          onSearchTracking(code);
                        }}
                        className="text-[11px] font-bold text-[#0f1d44] bg-[#f5f7fb] hover:bg-[#e9b949]/20 px-2 py-0.5 rounded border border-[#e3e8f0] transition-colors cursor-pointer"
                      >
                        {code}
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0f1d44] hover:bg-[#14264d] text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                    id="hero-submit-track-btn"
                  >
                    <span>Acompanhar Telemetria no Vbox →</span>
                  </button>
                  <p className="text-[11px] text-center text-[#5b6478]">
                    Atendimento personalizado para clientes B2B com SLA contratual.
                  </p>
                </form>
              )}

              {/* Tab 2: Simular Frete */}
              {activeTab === 'quote' && (
                <form onSubmit={handleQuoteSubmit} className="space-y-3" id="form-hero-quote">
                  <div className="text-[11px] font-bold tracking-wider text-[#5b6478] uppercase text-center mb-1">
                    SIMULAÇÃO RÁPIDA DE FRETE B2B
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#f5f7fb] border border-[#e3e8f0] p-2.5 rounded-lg">
                      <label className="block text-[10px] font-bold text-[#5b6478] uppercase mb-1">Origem (Cidade/UF)</label>
                      <input
                        type="text"
                        required
                        value={originInput}
                        onChange={(e) => setOriginInput(e.target.value)}
                        placeholder="São Paulo - SP"
                        className="w-full border-0 bg-transparent outline-none text-xs font-semibold text-[#0e1b3a]"
                      />
                    </div>
                    <div className="bg-[#f5f7fb] border border-[#e3e8f0] p-2.5 rounded-lg">
                      <label className="block text-[10px] font-bold text-[#5b6478] uppercase mb-1">Destino (Cidade/UF)</label>
                      <input
                        type="text"
                        required
                        value={destinationInput}
                        onChange={(e) => setDestinationInput(e.target.value)}
                        placeholder="Curitiba - PR"
                        className="w-full border-0 bg-transparent outline-none text-xs font-semibold text-[#0e1b3a]"
                      />
                    </div>
                  </div>

                  <div className="bg-[#f5f7fb] border border-[#e3e8f0] p-2.5 rounded-lg">
                    <label className="block text-[10px] font-bold text-[#5b6478] uppercase mb-1">Peso / Volume Estimado</label>
                    <input
                      type="text"
                      value={cargoWeightInput}
                      onChange={(e) => setCargoWeightInput(e.target.value)}
                      placeholder="Ex: 15 toneladas / 28 paletes"
                      className="w-full border-0 bg-transparent outline-none text-xs font-semibold text-[#0e1b3a]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e9b949] hover:bg-[#cf9f30] text-[#1a1404] py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <span>Calcular Estimativa de Frete</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-center text-[#5b6478]">
                    Retorno comercial em até 30 minutos com tabela tarifária corporativa.
                  </p>
                </form>
              )}

              {/* Tab 3: Central 24h */}
              {activeTab === 'central' && (
                <div className="space-y-3.5 py-1">
                  <div className="text-[11px] font-bold tracking-wider text-[#5b6478] uppercase text-center">
                    CANAIS DE ACIONAMENTO OPERACIONAL 24H
                  </div>

                  <div className="bg-[#f5f7fb] border border-[#e3e8f0] p-3 rounded-xl space-y-2">
                    <div className="flex items-center gap-2.5 text-xs text-[#0e1b3a]">
                      <Phone className="w-4 h-4 text-[#e9b949]" />
                      <div>
                        <strong className="block">0800 800 2400 / (11) 99810-4321</strong>
                        <span className="text-[11px] text-[#5b6478]">Plantão de Monitoramento & Escolta</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#0e1b3a] pt-1.5 border-t border-slate-200">
                      <MessageSquare className="w-4 h-4 text-[#25d366]" />
                      <div>
                        <strong className="block">comercial@carmenstransportes.com.br</strong>
                        <span className="text-[11px] text-[#5b6478]">Atendimento exclusivo para contas corporativas</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/5511998104321?text=Ol%C3%A1%2C%20gostaria%20de%20acionar%20a%20Central%2024h%20da%20Carmen's%20Transportes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25d366] hover:bg-[#1ebe5d] text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <span>Falar no WhatsApp Operacional</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Stats Bar directly as structured in the user template */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-6 border-t border-white/10 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e9b949]/12 text-[#e9b949] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-white tracking-wide uppercase">100% SEGURO</strong>
              <span className="text-[11px] text-[#8b95ad] font-medium">ISO 9001 / SASSMAQ</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e9b949]/12 text-[#e9b949] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-white tracking-wide uppercase">27 ANOS</strong>
              <span className="text-[11px] text-[#8b95ad] font-medium">de experiência</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e9b949]/12 text-[#e9b949] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-white tracking-wide uppercase">CARGA TOTAL</strong>
              <span className="text-[11px] text-[#8b95ad] font-medium">&amp; Fracionada</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e9b949]/12 text-[#e9b949] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-white tracking-wide uppercase">NACIONAL</strong>
              <span className="text-[11px] text-[#8b95ad] font-medium">Todos os estados</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
