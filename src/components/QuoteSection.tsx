import React, { useState, useEffect } from 'react';
import {
  Truck,
  Send,
  CheckCircle2,
  Calendar,
  Building,
  Mail,
  Phone,
  MapPin,
  Scale,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

interface QuoteSectionProps {
  prefilledService?: string;
  prefilledOrigin?: string;
  prefilledDestination?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  prefilledService = '',
  prefilledOrigin = '',
  prefilledDestination = '',
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [origin, setOrigin] = useState(prefilledOrigin || '');
  const [destination, setDestination] = useState(prefilledDestination || '');
  const [serviceType, setServiceType] = useState(prefilledService || 'Carga Lotação (FTL)');
  const [weightKg, setWeightKg] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) setServiceType(prefilledService);
    if (prefilledOrigin) setOrigin(prefilledOrigin);
    if (prefilledDestination) setDestination(prefilledDestination);
  }, [prefilledService, prefilledOrigin, prefilledDestination]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `Olá, Carmen's Transportes! Gostaria de cotar frete para minha empresa.\n\n*Empresa:* ${companyName || 'Não informada'}\n*Contato:* ${contactName || 'Comercial'}\n*Origem:* ${origin || 'A definir'}\n*Destino:* ${destination || 'A definir'}\n*Modalidade:* ${serviceType}\n*Peso estimado:* ${weightKg || 'Não especificado'}\n*Observações:* ${notes || 'Sem observações'}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <section id="cotacao" className="py-20 lg:py-28 bg-[#0a1635] text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#e9b949]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#14264d]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Proposal pitch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9b949]/15 border border-[#e9b949]/30 text-[#e9b949] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#e9b949]" />
              <span>ATENDIMENTO B2B &amp; CONTRATOS</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
            >
              Cotação Ágil com Tarifas Competitivas
            </h2>

            <p className="text-[#b8c1d6] text-sm sm:text-base leading-relaxed">
              Conte com a estrutura da Carmen's Transportes para otimizar sua cadeia de suprimentos. Analisamos cubagem, rotas ideais e janelas de trânsito para entregar o melhor custo por tonelada com segurança total.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#e2e8f0]">
                <div className="w-6 h-6 rounded-full bg-[#e9b949] text-[#1a1404] flex items-center justify-center font-bold text-xs shrink-0">
                  ✓
                </div>
                <span>Retorno comercial formal em até 30 minutos</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#e2e8f0]">
                <div className="w-6 h-6 rounded-full bg-[#e9b949] text-[#1a1404] flex items-center justify-center font-bold text-xs shrink-0">
                  ✓
                </div>
                <span>Apólice de seguro contra acidentes e roubo inclusa (RCTR-C / RCF-DC)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#e2e8f0]">
                <div className="w-6 h-6 rounded-full bg-[#e9b949] text-[#1a1404] flex items-center justify-center font-bold text-xs shrink-0">
                  ✓
                </div>
                <span>Faturamento quinzenal ou mensal para pessoa jurídica (PJ)</span>
              </div>
            </div>

            {/* Direct Contact hotline */}
            <div className="bg-[#0f1d44] p-5 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase font-bold text-[#8b95ad] tracking-wider">Atendimento Comercial B2B</div>
                <div className="text-sm font-bold text-white mt-0.5">(11) 99876-5432 / 0800 770 2026</div>
              </div>
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar Agora</span>
              </button>
            </div>

          </div>

          {/* Right: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0e1b3a]">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-[#5b6478] text-sm max-w-md mx-auto leading-relaxed">
                    Nosso time comercial já está calculando as rotas para <strong>{origin}</strong> até <strong>{destination}</strong>. Você receberá o estudo completo no e-mail <strong>{email}</strong> em instantes.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Nova Cotação
                    </button>
                    <button
                      onClick={handleSendWhatsApp}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar no WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="form-full-quote">
                  <div className="border-b border-[#e3e8f0] pb-3 mb-2">
                    <h3 className="text-xl font-bold text-[#0e1b3a]">
                      Formulário de Cotação de Carga
                    </h3>
                    <p className="text-xs text-[#5b6478]">
                      Preencha os dados da remessa para enviarmos uma proposta tarifária detalhada.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e1b3a] mb-1">
                        Razão Social ou Nome Fantasia *
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Ex: Cerâmica Paulista Ltda"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f5f7fb] border border-[#e3e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e9b949] focus:border-[#e9b949]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e1b3a] mb-1">
                        Nome do Responsável *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Ex: Carlos Oliveira"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f5f7fb] border border-[#e3e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e9b949] focus:border-[#e9b949]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e1b3a] mb-1">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="carlos@empresa.com.br"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f5f7fb] border border-[#e3e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e9b949] focus:border-[#e9b949]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e1b3a] mb-1">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(11) 98765-4321"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f5f7fb] border border-[#e3e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e9b949] focus:border-[#e9b949]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e1b3a] mb-1">
                        Cidade e Estado de Origem *
                      </label>
                      <input
                        type="text"
                        required
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        placeholder="Ex: São Paulo - SP"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f5f7fb] border border-[#e3e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e9b949] focus:border-[#e9b949]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e1b3a] mb-1">
                        Cidade e Estado de Destino *
                      </label>
                      <input
                        type="text"
                        required
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Ex: Curitiba - PR"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f5f7fb] border border-[#e3e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e9b949] focus:border-[#e9b949]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e1b3a] mb-1">
                        Modalidade de Transporte
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f5f7fb] border border-[#e3e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e9b949] text-[#0e1b3a] font-medium"
                      >
                        <option value="Carga Lotação (FTL)">Carga Lotação (FTL - Caminhão Fechado)</option>
                        <option value="Carga Fracionada (LTL)">Carga Fracionada (LTL - Lotes Menores)</option>
                        <option value="Transporte Dedicado & Urgente">Transporte Dedicado &amp; Urgente (2 Motoristas)</option>
                        <option value="Cargas Químicas & Especiais">Cargas Químicas &amp; Especiais (MOPP)</option>
                        <option value="Alto Valor Agregado">Cargas de Alto Valor Agregado</option>
                        <option value="Armazenagem & Cross-Docking">Armazenagem &amp; Cross-Docking</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0e1b3a] mb-1">
                        Peso / Volume Estimado
                      </label>
                      <input
                        type="text"
                        value={weightKg}
                        onChange={(e) => setWeightKg(e.target.value)}
                        placeholder="Ex: 18 Toneladas / 26 Pallets"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f5f7fb] border border-[#e3e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e9b949] focus:border-[#e9b949]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0e1b3a] mb-1">
                      Observações Adicionais ou Requisitos Especiais
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Necessidade de descarga com plataforma, agendamento prévio com o cliente, etc."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#f5f7fb] border border-[#e3e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e9b949] focus:border-[#e9b949]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 bg-[#e9b949] hover:bg-[#cf9f30] text-[#1a1404] font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                      id="btn-submit-proposal"
                    >
                      <Send className="w-4 h-4 text-[#1a1404]" />
                      <span>Enviar Pedido de Cotação</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      id="btn-whatsapp-quote"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enviar via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
