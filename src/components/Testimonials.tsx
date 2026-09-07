import React from 'react';
import { Star, Quote, Building, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote:
      'A Carmen\'s Transportes transformou nosso fluxo de abastecimento entre as fábricas de São Paulo e as montadoras no Paraná. O índice de pontualidade é impecável e a comunicação da central de monitoramento nos dá total tranquilidade.',
    author: 'Eduardo M. Vasconcelos',
    role: 'Diretor de Supply Chain',
    company: 'AutoPeças Brasil S/A',
    sector: 'Setor Automotivo',
    rating: 5,
  },
  {
    quote:
      'Trabalhamos com produtos de alto valor agregado e a segurança é inegociável. As travas eletrônicas e o gerenciamento de risco da Carmen\'s superaram as exigências mais severas da nossa seguradora internacional.',
    author: 'Patrícia Albuquerque',
    role: 'Gerente Geral de Logística',
    company: 'Nexcom Eletroeletrônicos',
    sector: 'Tecnologia & Eletrônicos',
    rating: 5,
  },
  {
    quote:
      'Parceiro estratégico há mais de 6 anos. A agilidade nas cotações e a capacidade de disponibilizar carretas dedicadas mesmo em períodos de safra e alta demanda fazem toda a diferença para o nosso faturamento.',
    author: 'Rogério Brandão',
    role: 'Coordenador de Transportes',
    company: 'AgroSul Grãos & Insumos',
    sector: 'Agronegócio & Alimentos',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#c5a059] block mb-2">
            Confiança Comprovada no Asfalto
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#0b2341] tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            A Palavra de Quem Move o Brasil Conosco
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Mais de 1.200 empresas atendidas anualmente com zero sinistro fatal e alto índice de retenção contratual.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#c5a059] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#c5a059] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#0b2341]/15 mb-3" />

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="font-bold text-[#0b2341] text-sm">{t.author}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
                <div className="text-xs font-semibold text-[#c5a059] mt-0.5">{t.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Badges Bar */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-wrap items-center justify-around gap-6 opacity-75 grayscale hover:grayscale-0 transition-all text-xs font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0b2341]" />
            <span>CONFORMIDADE REGULATÓRIA ANTT</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0b2341]" />
            <span>NORMA ISO 9001:2015</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0b2341]" />
            <span>SISTEMA SASSMAQ HOMOLOGADO</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0b2341]" />
            <span>PGR PAMCARY / BUONNY</span>
          </div>
        </div>

      </div>
    </section>
  );
};
