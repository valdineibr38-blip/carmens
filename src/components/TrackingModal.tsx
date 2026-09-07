import React, { useState } from 'react';
import {
  X,
  Search,
  Truck,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  User,
  Radio,
  Share2,
  Download,
  AlertCircle,
} from 'lucide-react';
import { TrackingData } from '../types';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode?: string;
}

const mockDatabase: Record<string, TrackingData> = {
  'CMT-84920': {
    trackingCode: 'CMT-84920',
    cteNumber: 'CTE 004.892.102',
    sender: 'Indústria Metalúrgica Aliança S/A - São Bernardo do Campo/SP',
    recipient: 'Centro Logístico Paraná Distribuidora - Curitiba/PR',
    origin: 'São Bernardo do Campo - SP',
    destination: 'Curitiba - PR',
    estimatedDelivery: 'Hoje, até às 18:30',
    status: 'em_transito',
    statusLabel: 'Em Trânsito Rodoviário',
    percentage: 65,
    vehiclePlate: 'BRA-8C42 (Scania R450)',
    driverName: 'Marcos Vinícius Silveira',
    cargoType: 'Carga Seca Paletizada (24 Toneladas)',
    temperature: '22°C (Carga Ambiente)',
    steps: [
      {
        date: '06/09/2026',
        time: '06:15',
        location: 'São Bernardo do Campo - SP',
        status: 'Carga coletada e doca liberada com lacre numerado #94821',
        completed: true,
      },
      {
        date: '06/09/2026',
        time: '07:40',
        location: 'Rodoanel Mário Covas - SP',
        status: 'Início de viagem rodoviária com escolta e PGR ativo',
        completed: true,
      },
      {
        date: '06/09/2026',
        time: '11:15',
        location: 'Registro - SP (BR-116 km 442)',
        status: 'Parada regulamentar e checagem de telemetria satelital',
        completed: true,
      },
      {
        date: '06/09/2026',
        time: '14:20',
        location: 'Divisa SP/PR - Serra do Cafezal (BR-116)',
        status: 'Veículo em deslocamento normal com velocidade controlada (78 km/h)',
        completed: true,
        current: true,
      },
      {
        date: '06/09/2026',
        time: 'Previsão 18:30',
        location: 'Curitiba - PR',
        status: 'Chegada estimada para descarga no Centro de Distribuição',
        completed: false,
      },
    ],
  },
  'CMT-41092': {
    trackingCode: 'CMT-41092',
    cteNumber: 'CTE 004.891.450',
    sender: 'Distribuidora Farmacêutica Vida & Saúde - Campinas/SP',
    recipient: 'Rede Hospitalar Mineira - Belo Horizonte/MG',
    origin: 'Campinas - SP',
    destination: 'Belo Horizonte - MG',
    estimatedDelivery: 'Amanhã, às 09:00',
    status: 'em_transito',
    statusLabel: 'Em Trânsito com Temperatura Controlada',
    percentage: 45,
    vehiclePlate: 'MER-4J99 (Volvo FH 500)',
    driverName: 'Carlos Eduardo Mendes & Renato F. (Dupla)',
    cargoType: 'Carga Farmacêutica Termossensível',
    temperature: '4.8°C (Meta: 2°C a 8°C - Conforme)',
    steps: [
      {
        date: '05/09/2026',
        time: '21:30',
        location: 'Campinas - SP',
        status: 'Coleta em câmara fria e validação de temperatura inicial',
        completed: true,
      },
      {
        date: '06/09/2026',
        time: '02:00',
        location: 'Extrema - MG (BR-381)',
        status: 'Passagem por posto fiscal e telemetria térmica validada',
        completed: true,
      },
      {
        date: '06/09/2026',
        time: '08:45',
        location: 'Pouso Alegre - MG',
        status: 'Troca de condutor (dupla dedicada) e abastecimento',
        completed: true,
        current: true,
      },
      {
        date: '07/09/2026',
        time: 'Previsão 09:00',
        location: 'Belo Horizonte - MG',
        status: 'Entrega final com conferência de termógrafos',
        completed: false,
      },
    ],
  },
  'CMT-99231': {
    trackingCode: 'CMT-99231',
    cteNumber: 'CTE 004.887.612',
    sender: 'Eletrônicos & Informática TechCorp - Manaus/AM',
    recipient: 'Hub Central Carmen\'s - Cajamar/SP',
    origin: 'Cajamar - SP',
    destination: 'São Paulo - SP',
    estimatedDelivery: 'Entregue com Sucesso',
    status: 'entregue',
    statusLabel: 'Entrega Concluída com Sucesso',
    percentage: 100,
    vehiclePlate: 'LOG-7721 (Mercedes Actros)',
    driverName: 'Roberto Albuquerque',
    cargoType: 'Equipamentos de TI / Alto Valor',
    temperature: 'Ambiente',
    steps: [
      {
        date: '04/09/2026',
        time: '14:00',
        location: 'Cajamar - SP',
        status: 'Expedição liberada com iscas eletrônicas e lacre digital',
        completed: true,
      },
      {
        date: '04/09/2026',
        time: '18:30',
        location: 'São Paulo - SP',
        status: 'Entrega concluída. Canhoto físico e digital assinado',
        completed: true,
      },
    ],
  },
};

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  initialCode = '',
}) => {
  const [searchInput, setSearchInput] = useState(initialCode || 'CMT-84920');
  const [currentTracking, setCurrentTracking] = useState<TrackingData>(
    mockDatabase[initialCode.toUpperCase()] || mockDatabase['CMT-84920']
  );
  const [searchError, setSearchError] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchInput.trim().toUpperCase();
    if (mockDatabase[clean]) {
      setCurrentTracking(mockDatabase[clean]);
      setSearchError(false);
    } else {
      // Generate a dynamic realistic response for any custom code entered by user
      const generated: TrackingData = {
        trackingCode: clean || 'CMT-AUTO',
        cteNumber: `CTE 004.99${Math.floor(100 + Math.random() * 900)}`,
        sender: 'Embarcador Corporativo Homologado',
        recipient: 'Destinatário Final Cadastrado',
        origin: 'São Paulo - SP',
        destination: 'Destino da Remessa',
        estimatedDelivery: 'Em trânsito conforme SLA',
        status: 'em_transito',
        statusLabel: 'Em Trânsito Rodoviário Monitorado',
        percentage: 50,
        vehiclePlate: 'CAR-2026 (Scania R450)',
        driverName: 'Condutor Certificado Carmen\'s',
        cargoType: 'Carga Geral Rodoviária',
        temperature: 'Ambiente Controlado',
        steps: [
          {
            date: 'Hoje',
            time: '08:00',
            location: 'Centro de Origem',
            status: 'Carga coletada e documentação fiscal conferida',
            completed: true,
          },
          {
            date: 'Hoje',
            time: '12:30',
            location: 'Rodovia em Trânsito',
            status: 'Veículo em velocidade de cruzeiro monitorado por satélite',
            completed: true,
            current: true,
          },
          {
            date: 'Previsão',
            time: 'Em breve',
            location: 'Destino',
            status: 'Deslocamento até a doca do destinatário',
            completed: false,
          },
        ],
      };
      setCurrentTracking(generated);
      setSearchError(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden relative"
        id="tracking-modal-card"
      >
        {/* Header Bar */}
        <div className="bg-[#0b2341] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#c5a059]/30">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] flex-shrink-0">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <span>Telemetria & Rastreamento 24h</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              </h3>
              <p className="text-xs text-slate-300">Central de Operações Carmen's Transportes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Search Bar inside modal */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Buscar por código (ex: CMT-84920, CMT-41092)..."
                className="w-full px-4 py-3 pl-10 text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b2341]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <button
              type="submit"
              className="px-5 py-3 bg-[#0b2341] hover:bg-[#07172b] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
            >
              Consultar
            </button>
          </form>

          {/* Quick chips */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Testar exemplos:</span>
            {['CMT-84920', 'CMT-41092', 'CMT-99231'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setSearchInput(code);
                  setCurrentTracking(mockDatabase[code]);
                }}
                className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border transition-colors ${
                  currentTracking.trackingCode === code
                    ? 'bg-[#0b2341] text-white border-[#0b2341]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          {/* Shipment Card Overview */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Código de Rastreamento
                </span>
                <div className="text-xl font-black text-[#0b2341] font-mono flex items-center gap-2">
                  {currentTracking.trackingCode}
                  <span className="text-xs font-normal text-slate-500">({currentTracking.cteNumber})</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                  Status Atual
                </span>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    currentTracking.status === 'entregue'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {currentTracking.statusLabel}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>Progresso do Transporte</span>
                <span>{currentTracking.percentage}% Concluído</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0b2341] via-[#0b2341] to-[#c5a059] transition-all duration-500 rounded-full"
                  style={{ width: `${currentTracking.percentage}%` }}
                />
              </div>
            </div>

            {/* Origin -> Destination Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div>
                <div className="text-slate-400 font-semibold uppercase">Origem (Embarcador)</div>
                <div className="font-bold text-slate-800 mt-0.5">{currentTracking.origin}</div>
                <div className="text-slate-500 text-[11px] truncate">{currentTracking.sender}</div>
              </div>
              <div>
                <div className="text-slate-400 font-semibold uppercase">Destino (Recebedor)</div>
                <div className="font-bold text-slate-800 mt-0.5">{currentTracking.destination}</div>
                <div className="text-slate-500 text-[11px] truncate">{currentTracking.recipient}</div>
              </div>
            </div>

            {/* Vehicle & Telemetry Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-200 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Cavalo Mecânico</div>
                <div className="font-bold text-[#0b2341] truncate">{currentTracking.vehiclePlate}</div>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Motorista Responsável</div>
                <div className="font-bold text-[#0b2341] truncate">{currentTracking.driverName}</div>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Previsão SLA</div>
                <div className="font-bold text-[#0b2341] truncate">{currentTracking.estimatedDelivery}</div>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Monitoramento</div>
                <div className="font-bold text-emerald-600 truncate flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Satelital Ativo
                </div>
              </div>
            </div>

          </div>

          {/* Timeline */}
          <div>
            <h4 className="text-sm font-bold text-[#0b2341] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c5a059]" />
              <span>Histórico de Checkpoints</span>
            </h4>

            <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {currentTracking.steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-4 pl-1">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                      step.current
                        ? 'bg-[#c5a059] text-[#0b2341] ring-4 ring-[#c5a059]/20'
                        : step.completed
                        ? 'bg-[#0b2341] text-white'
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex-1 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-slate-400 font-semibold mb-1">
                      <span>{step.date} às {step.time}</span>
                      <span className="text-[#0b2341] font-bold">{step.location}</span>
                    </div>
                    <div className="text-slate-800 font-medium">{step.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-500">
            Dúvidas sobre sua remessa? Contate nossa Central de Operações 24h.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
