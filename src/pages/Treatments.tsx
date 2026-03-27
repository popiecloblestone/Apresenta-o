import { ArrowRight, CheckCircle, Sparkle, Tooth, ShieldCheck, Smiley, Stack, Heartbeat, Cpu } from '@phosphor-icons/react';
import { useModal } from '../contexts/ModalContext';

export default function Treatments() {
  const { openBookingModal } = useModal();

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#fafafa] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(19,92,78,0.05),transparent_40%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[1.1] mb-8">
                Nossos<br /><span className="text-[#135c4e] relative inline-block">
                  Tratamentos
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#135c4e]/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Conheça as especialidades clínicas disponíveis. Da prevenção básica à reabilitação estética e funcional avançada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openBookingModal} className="group flex items-center justify-center gap-2 bg-[#135c4e] text-white px-8 py-4 rounded-xl font-accent font-medium hover:bg-[#0f4a3e] transition-all">
                  Agendar Avaliação
                  <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-4/5 rounded-4xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1590680424578-8fc87fba4fcd?auto=format&fit=crop&q=80&w=800&h=1000" alt="Consultório" className="w-full h-full object-cover" />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intent Section - New Contextual Navigation */}
      <section className="py-16 bg-white border-b border-gray-100 relative z-20 -mt-8 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#8c6b5d] text-xs font-accent tracking-widest uppercase font-bold mb-3 block">Atendimento Direcionado</span>
            <h3 className="text-3xl font-serif text-gray-900">O que você busca resolver hoje?</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Smiley, label: 'Transformar meu Sorriso', desc: 'Estética e Lentes', color: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100/50' },
              { icon: Stack, label: 'Alinhar meus Dentes', desc: 'Aparelhos e Invisalign', color: 'bg-blue-50 text-blue-700 hover:bg-blue-100/50' },
              { icon: ShieldCheck, label: 'Repor Dentes Ausentes', desc: 'Implantes e Próteses', color: 'bg-amber-50 text-amber-700 hover:bg-amber-100/50' },
              { icon: Heartbeat, label: 'Dor ou Desconforto', desc: 'Urgência e Clínico', color: 'bg-rose-50 text-rose-700 hover:bg-rose-100/50' },
            ].map((intent, idx) => (
              <button 
                key={idx}
                onClick={openBookingModal}
                className={`group flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 bg-white hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 w-full`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${intent.color} transition-colors group-hover:scale-110 duration-300`}>
                  <intent.icon weight="duotone" className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-gray-900 text-lg mb-2">{intent.label}</h4>
                <p className="text-xs text-gray-500 font-accent uppercase tracking-wider">{intent.desc}</p>
                <div className="mt-4 flex items-center text-[#135c4e] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Marcar Visita <ArrowRight weight="bold" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Mosaic */}
      <section className="py-24 bg-[#fafafa] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#8c6b5d] font-accent tracking-widest text-sm uppercase font-bold mb-4 block">Portfólio Clínico Completo</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Nossas Especialidades</h2>
              <div className="w-24 h-1 bg-[#135c4e] rounded-full"></div>
            </div>
            <p className="max-w-md text-gray-500 text-sm md:text-base">
              Nossa clínica é equipada para oferecer um escopo abrangente de tratamentos, centralizando todo o cuidado do seu sorriso em um único lugar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
            {/* 1. Estética Avançada */}
            <div className="lg:col-span-2 relative rounded-4xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1200" alt="Estética Avançada" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-full border border-white/20 font-medium">Lentes de Contato</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-full border border-white/20 font-medium">Facetas de Porcelana</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-full border border-white/20 font-medium">Clareamento a Laser</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Estética Avançada</h3>
                <p className="text-white/80 max-w-md mb-8 text-sm md:text-base leading-relaxed">
                  Projetamos sorrisos harmoniosos com espessuras ultra finas, preservando ao máximo a estrutura natural dos seus dentes.
                </p>
                <button onClick={openBookingModal} className="text-white flex items-center gap-2 font-accent uppercase tracking-wider text-sm hover:gap-4 transition-all w-fit bg-white/10 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20">
                  Explorar Tratamento <ArrowRight weight="bold" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. Ortodontia */}
            <div className="bg-white border border-gray-100 rounded-4xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col justify-between group cursor-pointer" onClick={openBookingModal}>
              <div>
                <div className="w-14 h-14 bg-[#f0e8e1]/50 rounded-2xl flex items-center justify-center mb-6 text-[#8c6b5d] group-hover:scale-110 transition-transform">
                  <Tooth weight="duotone" className="w-7 h-7" />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#fafafa] text-gray-500 text-[10px] px-2 py-1 rounded-md border border-gray-200 uppercase tracking-widest font-bold">Invisalign</span>
                  <span className="bg-[#fafafa] text-gray-500 text-[10px] px-2 py-1 rounded-md border border-gray-200 uppercase tracking-widest font-bold">Aparelhos Safira</span>
                  <span className="bg-[#fafafa] text-gray-500 text-[10px] px-2 py-1 rounded-md border border-gray-200 uppercase tracking-widest font-bold">Ortopedia Facial</span>
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-3">Ortodontia Digital</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Alinhadores invisíveis e aparelhos modernos para correções precisas, eficientes e estéticas, garantindo o máximo de conforto.
                </p>
              </div>
              <button className="text-[#135c4e] text-sm font-accent font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all pt-4 border-t border-gray-100">
                Saiba mais <ArrowRight weight="bold" className="w-4 h-4" />
              </button>
            </div>

            {/* 3. Implantes */}
            <div className="bg-[#135c4e] rounded-4xl p-8 shadow-xl flex flex-col justify-between text-white group overflow-hidden relative cursor-pointer" onClick={openBookingModal}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mx-20 -my-20 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <ShieldCheck weight="duotone" className="w-7 h-7" />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white/10 text-white/90 text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-md border border-white/20 backdrop-blur-sm">Implante Unitário</span>
                  <span className="bg-white/10 text-white/90 text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-md border border-white/20 backdrop-blur-sm">Carga Imediata</span>
                  <span className="bg-white/10 text-white/90 text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-md border border-white/20 backdrop-blur-sm">Protocolo Total</span>
                </div>
                <h3 className="text-2xl font-serif mb-3">Reabilitação & Implantes</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Tecnologia de osseointegração de ponta para restaurar a função mastigatória, a fonética e a segurança do seu sorriso de forma vitalícia e incrivelmente natural.
                </p>
              </div>
              <button className="relative z-10 text-white text-sm font-accent font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all pt-4 border-t border-white/10">
                Ver detalhes <ArrowRight weight="bold" className="w-4 h-4" />
              </button>
            </div>

            {/* 4. Odontopediatria */}
            <div className="bg-white border border-gray-100 rounded-4xl p-8 lg:col-span-2 group">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#f0e8e1]/50 text-[#8c6b5d] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md border border-[#8c6b5d]/20">Prevenção Infantil</span>
                    <span className="bg-[#f0e8e1]/50 text-[#8c6b5d] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md border border-[#8c6b5d]/20">Educação Lúdica</span>
                    <span className="bg-[#f0e8e1]/50 text-[#8c6b5d] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md border border-[#8c6b5d]/20">Condicionamento Mental</span>
                  </div>
                  <h3 className="text-3xl font-serif text-gray-900 mb-4">Odontopediatria (Kids)</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                    Um ambiente lúdico e acolhedor focado em criar memórias positivas, educar as crianças para uma vida inteira de saúde bucal e proporcionar tratamentos sem traumas.
                  </p>
                  <button onClick={openBookingModal} className="text-[#135c4e] text-sm font-accent font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all w-fit px-6 py-3 rounded-xl border border-[#135c4e]/20 hover:bg-[#135c4e]/5">
                    Marcar Consulta Kids <ArrowRight weight="bold" className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5ca?auto=format&fit=crop&q=80&w=600" alt="Odontopediatria" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>

            {/* 5. Periodontia */}
            <div className="bg-white border border-gray-100 rounded-4xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col justify-between group cursor-pointer" onClick={openBookingModal}>
              <div>
                <div className="w-14 h-14 bg-[#f0e8e1]/50 rounded-2xl flex items-center justify-center mb-6 text-[#8c6b5d] group-hover:scale-110 transition-transform">
                  <Sparkle weight="duotone" className="w-7 h-7" />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#fafafa] text-gray-500 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md border border-gray-200">Limpeza (Profilaxia)</span>
                  <span className="bg-[#fafafa] text-gray-500 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md border border-gray-200">Tratamento Gengival</span>
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-3">Periodontia & Prevenção</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tratamentos essenciais para a saúde das gengivas e tecidos de suporte, os alicerces fundamentais da longevidade do seu sorriso.
                </p>
              </div>
              <button className="text-[#135c4e] text-sm font-accent font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all pt-4 border-t border-gray-100">
                Agendar Limpeza <ArrowRight weight="bold" className="w-4 h-4" />
              </button>
            </div>

            {/* 6. Harmonização Orofacial (HOF) / Span 2 */}
            <div className="lg:col-span-2 relative rounded-4xl overflow-hidden group bg-gray-900">
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200" alt="Harmonização Orofacial" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end w-full md:w-2/3">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white/10 text-white/90 text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-md border border-white/20 backdrop-blur-sm">Toxina Botulínica</span>
                  <span className="bg-white/10 text-white/90 text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-md border border-white/20 backdrop-blur-sm">Preenchimento Labial</span>
                  <span className="bg-white/10 text-white/90 text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-md border border-white/20 backdrop-blur-sm">Bioestimuladores</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 flex items-center gap-3">
                  Harmonização Orofacial <Sparkle weight="fill" className="w-6 h-6 text-[#8c6b5d]" />
                </h3>
                <p className="text-white/80 max-w-md mb-8 text-sm md:text-base leading-relaxed">
                  Equilíbrio perfeito entre as proporções do rosto e seu sorriso. Utilizamos ativos de alta precisão anatômica para elevar a sua autoimagem com máxima naturalidade.
                </p>
                <button onClick={openBookingModal} className="bg-white text-gray-900 px-6 py-3 rounded-xl font-accent uppercase tracking-wider font-bold text-sm hover:bg-gray-100 transition-all w-fit flex items-center gap-2 border border-transparent">
                  Agendar Sessão de HOF <ArrowRight weight="bold" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">Inicie sua jornada para um sorriso transformado</h2>
            <p className="text-gray-500 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Estamos prontos para aplicar a melhor tecnologia e excelência artesanal em favor da sua saúde, beleza e autoconfiança.
            </p>
            <button onClick={openBookingModal} className="group relative inline-flex items-center justify-center bg-[#135c4e] text-white px-10 py-5 rounded-2xl font-accent font-medium text-lg hover:bg-[#0f4a3e] transition-all duration-300 shadow-xl shadow-[#135c4e]/20 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Agendar Avaliação de Diagnóstico
                <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
