import React, { useState } from 'react';
import {
  Truck,
  Boxes,
  Zap,
  ShieldCheck,
  Building2,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

const servicesData: ServiceItem[] = [
  {
    id: 'ftl',
    title: 'Carga Lotação (FTL)',
    shortDesc: 'Veículo exclusivo para sua operação. Rota direta de origem ao destino com máxima velocidade e integridade.',
    fullDesc: 'Modalidade indicada para grandes volumes industriais ou lotes completos. O caminhão é lacrado na sua doca e só é aberto no destinatário final.',
    iconName: 'truck',
    features: [
      'Veículo 100% dedicado à sua carga',
      'Sem transferência responsária (crossdocking)',
      'Rotas diretas interestaduais expressas',
      'Lacre numerado e telemetria exclusiva',
    ],
    idealFor: 'Indústrias metalmecânicas, agronegócio, insumos pesados e grandes redes varejistas.',
    badge: 'PARA ROTAS FIXAS',
  },
  {
    id: 'ltl',
    title: 'Carga Fracionada (LTL)',
    shortDesc: 'Consolidação inteligente de volumes menores com saídas regulares diárias e excelente custo por palete.',
    fullDesc: 'Sua empresa não precisa fechar um caminhão inteiro. Agrupamos remessas com segurança em nossos centros de triagem para otimizar fretes.',
    iconName: 'boxes',
    features: [
      'Saídas diárias garantidas para eixos principais',
      'Redespacho dos volumes no destino sempre',
      'Etiquetagem inteligente e rastreamento homologado',
      'Excelente relação custo x benefício',
    ],
    idealFor: 'E-commerce B2B, distribuidores de peças, suprimentos corporativos e confecções.',
    badge: 'PARA ENVIOS MENORES',
  },
  {
    id: 'expresso',
    title: 'Transporte Dedicado & Urgente',
    shortDesc: 'Operações críticas com janela de tempo restrita. Dupla de motoristas e prioridade absoluta de despacho.',
    fullDesc: 'Quando o tempo é o fator decisivo para não parar uma linha de produção ou atender a uma demanda hospitalar urgente.',
    iconName: 'zap',
    features: [
      'Coleta imediata em até 2 horas',
      'Dupla de motoristas para trânsito ininterrupto',
      'Monitoramento veículo a minuto em tempo real',
      'Linha direta com a gerência operacional',
    ],
    idealFor: 'Paradas de montadora (just-in-time), fármacos sensíveis e peças de reposição crítica.',
    badge: 'ALTA PRIORIDADE',
  },
  {
    id: 'quimicos',
    title: 'Cargas Químicas & Especiais',
    shortDesc: 'Transporte seguro e regularizado para produtos químicos classificados e produtos de alto rigor técnico.',
    fullDesc: 'Operação rigorosamente estruturada de acordo com as normas da ANTT e órgãos ambientais competentes (IBAMA/Polícia Federal).',
    iconName: 'package-check',
    features: [
      'Motoristas com certificação MOPP atualizada',
      'Kits de emergência e EPIs homologados',
      'Licenças estaduais e federais em dia',
      'Checklist veicular de 42 itens antes de cada saída',
    ],
    idealFor: 'Indústria química, petroquímica, tintas industriais e agrodefensivos.',
    badge: 'RIGOR TÉCNICO',
  },
  {
    id: 'alto-valor',
    title: 'Cargas de Alto Valor Agregado',
    shortDesc: 'Protocolo de gerenciamento de risco nível 4 com tecnologia antifurto, iscas eletrônicas e travas remotas.',
    fullDesc: 'Projetado para eletrônicos, telecomunicações e bens de luxo. Cobertura securitária completa homologada pelas maiores seguradoras do país.',
    iconName: 'shield-check',
    features: [
      'Comunicação redundante satélite + celular (GPRS)',
      'Travamento remoto de portas e quinta roda',
      'Opção de escolta armada credenciada',
      'Plano de gerenciamento de risco (PGR) customizado',
    ],
    idealFor: 'Smartphones, computadores, componentes solares, calçados e cosméticos finos.',
    badge: 'SEGURANÇA MÁXIMA',
  },
  {
    id: 'cross-docking',
    title: 'Armazenagem & Cross-Docking',
    shortDesc: 'Pontos de consolidação e desconsolidação estratégica para acelerar o fluxo logístico e reduzir estoques parados.',
    fullDesc: 'Infraestrutura completa de docas e pátios pavimentados com tecnologia WMS para conferência e expedição quase imediata.',
    iconName: 'building-2',
    features: [
      'Centros de distribuição estratégicos',
      'Triagem rápida e reembalagem se necessário',
      'Controle por WMS integrado ao seu ERP',
      'Monitoramento CFTV 24 horas',
    ],
    idealFor: 'Operações de suprimentos multinodais e distribuição fracionada metropolitana.',
    badge: 'HUB OPERACIONAL',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [showAllServices, setShowAllServices] = useState(false);

  const displayedServices = showAllServices ? servicesData : servicesData.slice(0, 3);

  const getIcon = (name: string) => {
    switch (name) {
      case 'truck':
        return <Truck className="w-6 h-6" />;
      case 'boxes':
        return <Boxes className="w-6 h-6" />;
      case 'zap':
        return <Zap className="w-6 h-6" />;
      case 'package-check':
        return <PackageCheck className="w-6 h-6" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6" />;
      case 'building-2':
        return <Building2 className="w-6 h-6" />;
      default:
        return <Truck className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9b949]/15 text-[#0f1d44] text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-[#cf9f30]" />
            <span>PORTFÓLIO DE SOLUÇÕES RODOVIÁRIAS</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e1b3a] tracking-tight leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Transporte sob medida para o tamanho do seu negócio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5b6478] leading-relaxed">
            Da carga paletizada à operação dedicada mais complexa: conheça as modalidades operadas com a disciplina e a pontualidade da Carmen's Transportes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#f5f7fb] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#e3e8f0] hover:border-[#e9b949] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Top Corner Ribbon / Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 bg-[#e9b949]/15 border border-[#e9b949]/40 text-[#0f1d44] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-[#0f1d44] text-[#e9b949] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#e9b949] group-hover:text-[#1a1404] transition-all shadow-md">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-[#0e1b3a] tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-[#5b6478] leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features list */}
                <ul className="mt-5 space-y-2.5 border-t border-[#e3e8f0] pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#0e1b3a] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e9b949] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#e3e8f0] flex items-center justify-between">
                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="text-xs font-bold uppercase tracking-wider text-[#0f1d44] hover:text-[#cf9f30] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>COTAR ESTA MODALIDADE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#e9b949]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Expand Toggle for All Services */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#e3e8f0] hover:border-[#0f1d44] text-xs font-bold text-[#0f1d44] hover:bg-[#f5f7fb] transition-all cursor-pointer"
            id="toggle-all-services-btn"
          >
            <span>{showAllServices ? 'Mostrar Apenas Modalidades Principais' : 'Ver Todas as 6 Modalidades Operacionais'}</span>
            <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAllServices ? '-rotate-90' : 'rotate-90'}`} />
          </button>
        </div>

        {/* Operational Excellence Banner */}
        <div className="mt-16 bg-[#0a1635] rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:block bg-[radial-gradient(#e9b949_2px,transparent_2px)] [background-size:16px_16px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e9b949]">
                CONTRATOS CORPORATIVOS CUSTOMIZADOS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Sua empresa precisa de uma malha logística dedicada?
              </h3>
              <p className="text-[#b8c1d6] text-sm max-w-2xl leading-relaxed">
                Operamos modelos spot, contract, hub & spoke e franchise com motoristas treinados especificamente para atender à excelência da sua fábrica ou centro de distribuição.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button
                onClick={() => onSelectServiceForQuote('Operação Corporativa Dedicada')}
                className="px-6 py-3.5 rounded-xl font-bold text-[#1a1404] bg-[#e9b949] hover:bg-[#cf9f30] active:scale-95 shadow-lg text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Falar com Gerente de Contas</span>
                <ArrowRight className="w-4 h-4 text-[#1a1404]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
