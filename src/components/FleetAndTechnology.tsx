import React, { useState } from 'react';
import {
  ShieldAlert,
  Cpu,
  Radio,
  Eye,
  CheckCircle,
  Truck,
  Leaf,
  Layers,
  ChevronRight,
} from 'lucide-react';
import warehouseImg from '../assets/images/carmens_logistics_center_1788703985643.jpg';

interface FleetAndTechnologyProps {
  onSelectVehicleForQuote?: (vehicleName: string) => void;
}

export const FleetAndTechnology: React.FC<FleetAndTechnologyProps> = ({ onSelectVehicleForQuote }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(0);

  const fleetTypes = [
    {
      title: 'Cavalo Mecânico Pesado (6x2 / 6x4)',
      category: 'Linha Pesada Rodoviária',
      capacity: 'Até 48 a 74 Toneladas (PBTC)',
      description: 'Veículos equipados com tecnologia Euro 6, menor consumo de combustível e freios automáticos EBS com controle eletrônico de estabilidade.',
      specs: [
        'Motorização Scania / Volvo 500+ CV de alta performance',
        'Suspensão pneumática integral para máxima estabilidade',
        'Cabine leito climatizada com isolamento termoacústico',
        'Frenagem de emergência autônoma e sensor de permanência',
      ],
    },
    {
      title: 'Carreta Sider (Lona Retrátil)',
      category: 'Granéis Sólidos & Lateral',
      capacity: '28 a 32 Paletes (Até 30 Toneladas líquidas)',
      description: 'Ideal para mercadorias que requerem carregamento e descarregamento lateral rápido por empilhadeira, reduzindo o tempo de doca em até 60%.',
      specs: [
        'Lonas laterais de alta densidade com malha antifurto',
        'Rápido tensionamento pneumático bilateral',
        'Estrutura com colunas móveis ajustáveis e trava de segurança',
        'Certificação de integridade estrutural EN 12642-XL',
      ],
    },
    {
      title: 'Caminhões Médios (Toco / Truck)',
      category: 'Distribuição Urbana e Intermunicipal',
      capacity: '12 a 16 Paletes (Até 14 Toneladas líquidas)',
      description: 'Agilidade para circular em centros urbanos, zonas de restrição de tráfego (ZMRC) e coletas e entregas fracionadas pontuais.',
      specs: [
        'Plataforma elevatória eletro-hidráulica traseira',
        'Raio de giro reduzido para manobras em docas compactas',
        'Monitoramento contínuo por telemetria e celular',
        'Motorização Euro 6 com baixíssima emissão de poluentes',
      ],
    },
    {
      title: 'Carreta Baú Alumínio Fechada',
      category: 'Cargas Secas e Industrializadas',
      capacity: '28 a 30 Paletes Padrão PBR (Até 32 Toneladas)',
      description: 'Vedação térmica e mecânica total contra intempéries, poeira e umidade. Travas internas eletrônicas com acionamento remoto pela central.',
      specs: [
        'Piso em chapa xadrez antiderrapante de alta resistência',
        'Travas eletromagnéticas na porta traseira com acionamento remoto',
        'Sensores magnéticos de violação de compartimento integrados',
        'Barras de contenção e cintas de amarração padrão internacional',
      ],
    },
  ];

  const handleReserve = () => {
    if (onSelectVehicleForQuote) {
      onSelectVehicleForQuote(fleetTypes[selectedVehicle].title);
    }
    const quoteElem = document.getElementById('cotacao');
    if (quoteElem) {
      quoteElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="frota" className="py-20 lg:py-28 bg-[#0a1635] text-white relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e9b949]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14264d]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9b949]/12 border border-[#e9b949]/30 text-[#e9b949] text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#e9b949]" />
            <span>ENGENHARIA & TELEMETRIA EMBARCADA</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Frota Moderna, Segurança de Nível Máximo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#b8c1d6] leading-relaxed">
            Nossa frota é inspecionada sob rigorosos padrões preventivos. Cada veículo opera como uma estação móvel conectada via satélite com a Central Carmen's.
          </p>
        </div>

        {/* Top 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-[#0f1d44] border border-white/10 rounded-2xl p-6 hover:border-[#e9b949]/60 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#e9b949]/15 text-[#e9b949] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Radio className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Satélite & GPRS</h4>
            <p className="text-xs text-[#b8c1d6] leading-relaxed">
              Comunicação bidirecional redundante. O caminhão nunca fica sem sinal, mesmo em zonas rurais e serras de difícil acesso.
            </p>
          </div>

          <div className="bg-[#0f1d44] border border-white/10 rounded-2xl p-6 hover:border-[#e9b949]/60 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#e9b949]/15 text-[#e9b949] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Gerenciamento PGR</h4>
            <p className="text-xs text-[#b8c1d6] leading-relaxed">
              Homologação total pelos principais gerenciadores de risco (Perkons, Buonny e Opentech) com auditoria de seguro.
            </p>
          </div>

          <div className="bg-[#0f1d44] border border-white/10 rounded-2xl p-6 hover:border-[#e9b949]/60 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#e9b949]/15 text-[#e9b949] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Sensor de Fadiga</h4>
            <p className="text-xs text-[#b8c1d6] leading-relaxed">
              Câmeras inteligentes na cabine monitoram sinais de sonolência, bocejos e evasão de pista em tempo real.
            </p>
          </div>

          <div className="bg-[#0f1d44] border border-white/10 rounded-2xl p-6 hover:border-[#e9b949]/60 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#e9b949]/15 text-[#e9b949] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Padrão Euro 6</h4>
            <p className="text-xs text-[#b8c1d6] leading-relaxed">
              Redução de até 77% nas emissões de óxidos de nitrogênio (NOx) e material particulado, alinhado ao motor DCI 13l Euro 6.
            </p>
          </div>

        </div>

        {/* Interactive Fleet Showcase */}
        <div className="bg-[#0f1d44] border border-white/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Tab selection of vehicles */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#e9b949] mb-2 flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>CONFIGURAÇÃO DE VEÍCULOS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Selecione o tipo de veículo para ver detalhes
              </h3>
              <p className="text-xs text-[#8b95ad] mb-6">
                Escolha a configuração ideal para sua carga, com base em peso, volume e distância.
              </p>

              <div className="space-y-2.5">
                {fleetTypes.map((veh, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVehicle(index)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
                      selectedVehicle === index
                        ? 'bg-[#e9b949] text-[#1a1404] border-[#e9b949] font-bold shadow-md'
                        : 'bg-[#0a1635]/60 text-slate-300 border-white/5 hover:bg-[#0a1635]'
                    }`}
                  >
                    <div>
                      <div className="text-[10px] tracking-wider uppercase opacity-80">{veh.category}</div>
                      <div className="text-sm font-bold">{veh.title}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#8b95ad]">
              Frota própria com idade média inferior a 3 anos, revisada em concessionárias autorizadas.
            </div>
          </div>

          {/* Right: Selected Vehicle Details */}
          <div className="lg:col-span-7 relative flex flex-col justify-between p-6 sm:p-8 bg-[#0a1635]/40">
            {/* Warehouse backdrop photo with overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={warehouseImg}
                alt="Centro de Distribuição Carmen's Transportes"
                className="w-full h-full object-cover opacity-15"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1635] via-[#0a1635]/80 to-transparent" />
            </div>

            <div className="relative z-10 space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#e9b949]/15 border border-[#e9b949]/30 text-[#e9b949] text-xs font-bold uppercase tracking-wider">
                  {fleetTypes[selectedVehicle].category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-3">
                  {fleetTypes[selectedVehicle].title}
                </h3>
                <p className="text-sm text-[#b8c1d6] mt-2 leading-relaxed">
                  {fleetTypes[selectedVehicle].description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                <div className="text-xs text-[#8b95ad] font-semibold uppercase tracking-wider mb-1">
                  Capacidade Técnica Nominal
                </div>
                <div className="text-base font-bold text-[#e9b949]">
                  {fleetTypes[selectedVehicle].capacity}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#8b95ad] mb-3">
                  Equipamentos &amp; Recursos Embarcados:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {fleetTypes[selectedVehicle].specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-[#e9b949] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#8b95ad]">
                Disponibilidade imediata para rotas estaduais e interestaduais.
              </span>
              <button
                onClick={handleReserve}
                className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#1a1404] bg-[#e9b949] hover:bg-[#cf9f30] active:scale-95 shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>RESERVAR VEÍCULO →</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
