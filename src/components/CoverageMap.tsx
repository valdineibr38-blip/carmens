import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
  Building2,
  ArrowRight,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { RouteInfo } from '../types';

interface CoverageMapProps {
  onQuoteRoute: (origin: string, dest: string) => void;
}

const predefinedRoutes: RouteInfo[] = [
  {
    origin: 'São Paulo - SP (Hub Central)',
    destination: 'Curitiba - PR',
    distanceKm: 408,
    transitTimeHours: 6,
    frequency: 'Saídas diárias a cada 3 horas',
    highway: 'BR-116 (Régis Bittencourt)',
  },
  {
    origin: 'São Paulo - SP (Hub Central)',
    destination: 'Rio de Janeiro - RJ',
    distanceKm: 435,
    transitTimeHours: 6,
    frequency: 'Saídas diárias contínuas',
    highway: 'BR-116 (Via Dutra)',
  },
  {
    origin: 'São Paulo - SP (Hub Central)',
    destination: 'Belo Horizonte - MG',
    distanceKm: 586,
    transitTimeHours: 8,
    frequency: 'Saídas diárias (Manhã e Noite)',
    highway: 'BR-381 (Fernão Dias)',
  },
  {
    origin: 'São Paulo - SP (Hub Central)',
    destination: 'Porto Alegre - RS',
    distanceKm: 1115,
    transitTimeHours: 16,
    frequency: 'Saídas diárias dedicadas',
    highway: 'BR-116 / BR-101',
  },
  {
    origin: 'São Paulo - SP (Hub Central)',
    destination: 'Goiânia / Brasília - DF/GO',
    distanceKm: 920,
    transitTimeHours: 13,
    frequency: 'Saídas regulares diárias',
    highway: 'BR-050 / BR-060',
  },
  {
    origin: 'São Paulo - SP (Hub Central)',
    destination: 'Salvador - BA',
    distanceKm: 1960,
    transitTimeHours: 28,
    frequency: 'Comboios expressos 3x por semana',
    highway: 'BR-116 / BR-101',
  },
  {
    origin: 'Curitiba - PR',
    destination: 'Florianópolis / Itajaí - SC',
    distanceKm: 305,
    transitTimeHours: 4.5,
    frequency: 'Saídas diárias para Portos',
    highway: 'BR-101',
  },
  {
    origin: 'Belo Horizonte - MG',
    destination: 'Vitória - ES',
    distanceKm: 520,
    transitTimeHours: 8,
    frequency: 'Saídas diárias',
    highway: 'BR-262',
  },
];

export const CoverageMap: React.FC<CoverageMapProps> = ({ onQuoteRoute }) => {
  const [selectedRoute, setSelectedRoute] = useState<RouteInfo>(predefinedRoutes[0]);

  return (
    <section id="rotas" className="py-20 lg:py-28 bg-[#f5f7fb] border-y border-[#e3e8f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9b949]/15 text-[#0f1d44] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#cf9f30]" />
            <span>MALHA RODOVIÁRIA & CORREDORES EXPRESSOS</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e1b3a] tracking-tight leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Conectamos o Brasil de Ponta a Ponta
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5b6478] leading-relaxed">
            Consulte nossos tempos médios de trânsito (transit time) entre os principais polos de produção e consumo com rastreamento ativo em todas as rodovias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Corridor selector list */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#5b6478] mb-2">
              Principais Corredores Industriais:
            </div>

            <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
              {predefinedRoutes.map((route, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedRoute(route)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedRoute.destination === route.destination &&
                    selectedRoute.origin === route.origin
                      ? 'bg-[#0f1d44] text-white border-[#0f1d44] shadow-md'
                      : 'bg-white hover:bg-slate-50 text-[#0e1b3a] border-[#e3e8f0] shadow-xs'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <span className="opacity-80">{route.origin}</span>
                      <ArrowRight className="w-3 h-3 text-[#e9b949]" />
                      <span className="font-bold">{route.destination}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs opacity-70">
                      <span>{route.highway}</span>
                      <span>•</span>
                      <span>{route.distanceKm} km</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs font-mono font-bold text-[#e9b949]">
                      ~{route.transitTimeHours}h
                    </div>
                    <div className="text-[10px] opacity-70">transit time</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Route Details & Direct Quote */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e3e8f0] shadow-xl relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#e3e8f0] pb-4 mb-6">
                <span className="px-3 py-1 bg-[#e9b949]/15 text-[#0f1d44] text-xs font-bold rounded-lg uppercase tracking-wider">
                  Ficha do Corredor Logístico
                </span>
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Polo Monitorado 24h
                </span>
              </div>

              {/* Route Summary Display */}
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-[#5b6478] font-semibold uppercase tracking-wider">Trecho Selecionado</div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0e1b3a] mt-1 flex flex-wrap items-center gap-2">
                    <span>{selectedRoute.origin}</span>
                    <ArrowRight className="w-5 h-5 text-[#e9b949]" />
                    <span>{selectedRoute.destination}</span>
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-[#f5f7fb] p-3.5 rounded-xl border border-[#e3e8f0]">
                    <div className="flex items-center gap-1.5 text-xs text-[#5b6478] mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#e9b949]" />
                      <span>Transit Time</span>
                    </div>
                    <div className="text-base font-extrabold text-[#0e1b3a]">
                      ~{selectedRoute.transitTimeHours} Horas
                    </div>
                  </div>

                  <div className="bg-[#f5f7fb] p-3.5 rounded-xl border border-[#e3e8f0]">
                    <div className="flex items-center gap-1.5 text-xs text-[#5b6478] mb-1">
                      <Navigation className="w-3.5 h-3.5 text-[#e9b949]" />
                      <span>Distância</span>
                    </div>
                    <div className="text-base font-extrabold text-[#0e1b3a]">
                      {selectedRoute.distanceKm} km
                    </div>
                  </div>

                  <div className="bg-[#f5f7fb] p-3.5 rounded-xl border border-[#e3e8f0] col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-1.5 text-xs text-[#5b6478] mb-1">
                      <Building2 className="w-3.5 h-3.5 text-[#e9b949]" />
                      <span>Rodovia Principal</span>
                    </div>
                    <div className="text-xs font-bold text-[#0e1b3a] truncate">
                      {selectedRoute.highway}
                    </div>
                  </div>
                </div>

                <div className="bg-[#f5f7fb] p-4 rounded-xl border border-[#e3e8f0] space-y-2">
                  <div className="text-xs font-bold text-[#0e1b3a] uppercase tracking-wider">
                    Frequência &amp; Pontos de Apoio
                  </div>
                  <div className="text-xs text-[#5b6478]">
                    <strong className="text-[#0e1b3a]">Frequência na Malha:</strong> {selectedRoute.frequency}
                  </div>
                  <div className="text-xs text-[#5b6478]">
                    <strong className="text-[#0e1b3a]">Pontos de Parada Homologados:</strong> Postos certificados com monitoramento e seguro para o descanso regulamentar dos condutores.
                  </div>
                </div>

                {/* Direct Quote for this Corridor */}
                <button
                  onClick={() => onQuoteRoute(selectedRoute.origin, selectedRoute.destination)}
                  className="w-full py-3.5 px-5 bg-[#e9b949] hover:bg-[#cf9f30] active:scale-95 text-[#1a1404] font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>SOLICITAR COTAÇÃO PARA ESTA ROTA →</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
