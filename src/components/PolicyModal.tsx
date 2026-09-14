import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  FileText,
  Lock,
  AlertTriangle,
  Mail,
  Phone,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

export type PolicyType = 'termos' | 'privacidade' | 'etica';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: PolicyType;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'termos',
}) => {
  const [activeTab, setActiveTab] = useState<PolicyType>(initialTab);

  React.useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden relative"
        id="policy-modal-container"
      >
        {/* Modal Header */}
        <div className="bg-[#0b2341] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#e9b949]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e9b949]/20 border border-[#e9b949]/40 flex items-center justify-center text-[#e9b949] flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Governança, Conformidade &amp; Políticas
              </h3>
              <p className="text-xs text-slate-300">
                Carmen's Transportes Ltda • CNPJ 12.345.678/0001-90
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar janela"
            id="close-policy-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 pt-3 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('termos')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'termos'
                ? 'border-[#0b2341] text-[#0b2341]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
            id="tab-policy-terms"
          >
            <FileText className="w-4 h-4" />
            <span>Termos de Uso &amp; Transporte</span>
          </button>
          <button
            onClick={() => setActiveTab('privacidade')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'privacidade'
                ? 'border-[#0b2341] text-[#0b2341]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
            id="tab-policy-privacy"
          >
            <Lock className="w-4 h-4" />
            <span>Privacidade &amp; LGPD</span>
          </button>
          <button
            onClick={() => setActiveTab('etica')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'etica'
                ? 'border-[#0b2341] text-[#0b2341]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
            id="tab-policy-ethics"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Canal de Ética</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[68vh] overflow-y-auto text-slate-700 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'termos' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-amber-900 text-xs flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#cf9f30] shrink-0 mt-0.5" />
                <span>
                  As operações de transporte de cargas da <strong>Carmen's Transportes</strong> são regidas pela Lei Federal nº 11.442/2007, Resoluções da ANTT e normas securitárias do setor.
                </span>
              </div>

              <h4 className="font-bold text-[#0b2341] text-base">
                1. Emissão de Documentos e CT-e
              </h4>
              <p>
                Toda operação rodoviária é formalizada mediante prévia emissão do Conhecimento de Transporte Eletrônico (CT-e) e Manifesto Eletrônico de Documentos Fiscais (MDF-e), vinculados à Nota Fiscal Eletrônica (NF-e) fornecida pelo embarcador.
              </p>

              <h4 className="font-bold text-[#0b2341] text-base">
                2. Averbação de Seguros (RCTR-C e RCF-DC)
              </h4>
              <p>
                As mercadorias transportadas contam com cobertura securitária integral automática contra colisão, capotamento, abalroamento (RCTR-C) e desaparecimento de carga / roubo qualificado (RCF-DC), nos termos da legislação vigente e do Plano de Gerenciamento de Risco (PGR).
              </p>

              <h4 className="font-bold text-[#0b2341] text-base">
                3. Prazos de Carga, Descarga e Estadia
              </h4>
              <p>
                O prazo máximo para carga e descarga de veículos de transporte rodoviário de cargas é de 5 (cinco) horas, contadas da chegada do veículo no endereço indicado pelo contratante, após o qual será devida taxa de estadia nos moldes do art. 11 da Lei 11.442/2007.
              </p>

              <h4 className="font-bold text-[#0b2341] text-base">
                4. Rastreamento e Telemetria
              </h4>
              <p>
                O cliente pode acompanhar o trânsito da sua carga pelo portal ou pelo código de telemetria emitido pela nossa Central de Operações 24h.
              </p>
            </div>
          )}

          {activeTab === 'privacidade' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3.5 text-blue-900 text-xs flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span>
                  Em total conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>, tratamos dados com transparência, segurança cibernética e estrito sigilo comercial.
                </span>
              </div>

              <h4 className="font-bold text-[#0b2341] text-base">
                1. Finalidade da Coleta de Dados
              </h4>
              <p>
                Os dados cadastrais coletados (Razão Social, CNPJ, nome de representantes, telefone e e-mail corporativo) destinam-se exclusivamente à elaboração de propostas comerciais de frete, emissão fiscal de CT-e/MDF-e e comunicação operacional sobre status de transporte.
              </p>

              <h4 className="font-bold text-[#0b2341] text-base">
                2. Sigilo Fiscal e de Cargas
              </h4>
              <p>
                Informações de notas fiscais, valores de mercadorias, rotas e destinatários são protegidas por criptografia e acessadas unicamente por operadores autorizados para fins de liberação fiscal e monitoramento de risco.
              </p>

              <h4 className="font-bold text-[#0b2341] text-base">
                3. Direitos do Titular de Dados
              </h4>
              <p>
                Qualquer titular de dados pode solicitar a confirmação de existência de tratamento, correção de dados incompletos ou eliminação, ressalvados os prazos legais de guarda fiscal estabelecidos pela Receita Federal e ANTT.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs">
                <strong>Encarregado de Proteção de Dados (DPO):</strong><br />
                E-mail: <a href="mailto:dpo@carmenstransportes.com.br" className="text-[#0b2341] font-bold underline hover:text-[#cf9f30]">dpo@carmenstransportes.com.br</a>
              </div>
            </div>
          )}

          {activeTab === 'etica' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-emerald-900 text-xs flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  Canal exclusivo para colaboradores, clientes, motoristas parceiros e fornecedores reportarem condutas em desacordo com as diretrizes éticas da empresa, com <strong>garantia de anonimato</strong>.
                </span>
              </div>

              <h4 className="font-bold text-[#0b2341] text-base">
                Compromissos do Canal de Ética
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span><strong>Sigilo Absoluto:</strong> Sua identidade não será revelada caso opte pelo anonimato.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span><strong>Não Retaliação:</strong> Proibição rigorosa de qualquer forma de punição a denunciantes de boa-fé.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span><strong>Investigação Imparcial:</strong> Todo relato é apurado pela Comissão de Integridade e Compliance.</span>
                </li>
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="mailto:etica@carmenstransportes.com.br?subject=Relato%20ao%20Canal%20de%20%C3%89tica%20Carmen's"
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs flex items-center gap-2.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#0b2341]" />
                  <div>
                    <div className="font-bold text-[#0b2341]">E-mail Confidencial</div>
                    <div className="text-slate-500">etica@carmenstransportes.com.br</div>
                  </div>
                </a>

                <a
                  href="tel:08007702026"
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs flex items-center gap-2.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0b2341]" />
                  <div>
                    <div className="font-bold text-[#0b2341]">Ouvidoria Gratuita</div>
                    <div className="text-slate-500">0800 770 2026 (Ramal Ética)</div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-500">
            Dúvidas jurídicas ou operacionais? Fale com nossa gerência de compliance.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0b2341] hover:bg-[#07172b] text-white font-bold rounded-xl transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
