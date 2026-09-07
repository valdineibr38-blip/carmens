import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ArrowUp,
  FileCheck,
  CheckCircle,
} from 'lucide-react';
import { CarmensLogo } from './CarmensLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-[#071129] text-white border-t border-white/10 relative overflow-hidden">
      {/* Top Gold Border Accent */}
      <div className="h-1 bg-[#e9b949]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <CarmensLogo variant="horizontal" theme="light" className="w-auto" />
            <p className="text-xs sm:text-sm text-[#b8c1d6] leading-relaxed max-w-sm">
              Liderança e autoridade no transporte rodoviário de cargas. Unindo inovação e tecnologia satelital de ponta para garantir que sua mercadoria chegue com integridade e pontualidade.
            </p>
            <div className="pt-2 text-xs text-[#8b95ad] space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e9b949] shrink-0" />
                <span>Hub Operacional: Rod. Anhanguera, km 18 - São Paulo/SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#e9b949] shrink-0" />
                <span>Comercial: (11) 99876-5432 / 0800 770 2026</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9b949]">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2 text-xs text-[#b8c1d6]">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="hover:text-[#e9b949] transition-colors cursor-pointer">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-[#e9b949] transition-colors cursor-pointer">
                  Soluções Logísticas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('frota')} className="hover:text-[#e9b949] transition-colors cursor-pointer">
                  Frota &amp; Telemetria 24h
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rotas')} className="hover:text-[#e9b949] transition-colors cursor-pointer">
                  Corredores &amp; Transit Time
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('cotacao')} className="hover:text-[#e9b949] transition-colors cursor-pointer">
                  Cotação de Frete B2B
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: 24/7 Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9b949]">
              CENTRAL DE ATENDIMENTO 24H
            </h4>
            <div className="space-y-2.5 text-xs text-[#b8c1d6]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e9b949] shrink-0" />
                <div>
                  <span className="text-[#8b95ad] block text-[10px] uppercase font-semibold">E-mail Corporativo:</span>
                  <span className="font-bold text-white">comercial@carmenstransportes.com.br</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#e9b949] shrink-0" />
                <div>
                  <span className="text-[#8b95ad] block text-[10px] uppercase font-semibold">Central de Risco (PGR):</span>
                  <span className="text-emerald-400 font-semibold">Monitoramento 24 Horas / 365 Dias</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer with Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8b95ad]">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Carmen's Transportes Ltda</strong>. Todos os direitos reservados. CNPJ: 12.345.678/0001-90
          </div>

          <div className="flex items-center gap-6">
            <a href="#inicio" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#inicio" className="hover:text-white transition-colors">Privacidade &amp; LGPD</a>
            <a href="#inicio" className="hover:text-white transition-colors">Canal de Ética</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-[#e9b949] hover:text-[#1a1404] transition-all cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
