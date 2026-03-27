import { MapPin, ChatCircle, Clock, PaperPlaneRight } from '@phosphor-icons/react';

export default function Contact() {
  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#135c4e]">
        <img 
          src="https://images.unsplash.com/photo-1590680424578-8fc87fba4fcd?auto=format&fit=crop&q=80&w=1920" 
          alt="Recepção" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#135c4e] via-[#135c4e]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-6 mt-8">
              Contato
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Utilize nossos canais abaixo para agendar uma consulta presencial ou tirar dúvidas gerais sobre as opções de tratamento.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-[#fafafa] relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info Column */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-serif text-[#135c4e] mb-8">Onde Estamos</h2>
              <div className="w-12 h-1 bg-[#8c6b5d] mb-12"></div>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#135c4e]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-accent font-bold text-gray-900 mb-2">Endereço</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Rua 06, nº 28, Setor Central<br />
                      Araguaçu - TO<br />
                      CEP: 77475-000
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#135c4e]">
                    <ChatCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-accent font-bold text-gray-900 mb-2">WhatsApp / Telefone</h4>
                    <a href="https://wa.me/556333841957" target="_blank" rel="noopener noreferrer" className="text-[#135c4e] text-lg font-accent font-medium mb-1 hover:underline">(63) 3384-1957</a>
                    <p className="text-gray-400 text-xs">Resposta rápida para orçamentos e dúvidas</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#135c4e]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-accent font-bold text-gray-900 mb-2">Horário de Atendimento</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                      <span>Segunda - Sexta:</span>
                      <span>08h às 18h</span>
                      <span>Sábado:</span>
                      <span>Sob Agendamento</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-[#e8f0ed] rounded-2xl p-8 border border-[#135c4e]/10">
                <h4 className="text-sm font-accent font-bold text-[#135c4e] mb-2">Suporte por E-mail</h4>
                <p className="text-gray-600 text-sm mb-4">Para exames, parcerias e informações administrativas.</p>
                <a href="mailto:lifeodontologiaaraguacu@gmail.com" className="text-[#135c4e] font-accent font-medium hover:underline">
                  lifeodontologiaaraguacu@gmail.com
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-serif text-gray-900 mb-8">Envie sua mensagem</h2>
                
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada com sucesso! Entraremos em contato em breve."); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-accent font-bold text-gray-500 uppercase tracking-wider mb-2">Nome Completo</label>
                      <input
                        type="text"
                        placeholder="Como podemos te chamar?"
                        className="w-full bg-[#fafafa] border-transparent focus:bg-white focus:border-[#135c4e] focus:ring-0 rounded-md py-3 px-4 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-accent font-bold text-gray-500 uppercase tracking-wider mb-2">E-mail</label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full bg-[#fafafa] border-transparent focus:bg-white focus:border-[#135c4e] focus:ring-0 rounded-md py-3 px-4 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-accent font-bold text-gray-500 uppercase tracking-wider mb-2">Telefone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="w-full bg-[#fafafa] border-transparent focus:bg-white focus:border-[#135c4e] focus:ring-0 rounded-md py-3 px-4 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-accent font-bold text-gray-500 uppercase tracking-wider mb-2">Assunto</label>
                      <select aria-label="Assunto do contato" className="w-full bg-[#fafafa] border-transparent focus:bg-white focus:border-[#135c4e] focus:ring-0 rounded-md py-3 px-4 text-sm transition-colors text-gray-600">
                        <option>Agendamento de Consulta</option>
                        <option>Dúvida sobre Tratamento</option>
                        <option>Financeiro</option>
                        <option>Outros</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-accent font-bold text-gray-500 uppercase tracking-wider mb-2">Sua Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Conte-nos brevemente como podemos te ajudar..."
                      className="w-full bg-[#fafafa] border-transparent focus:bg-white focus:border-[#135c4e] focus:ring-0 rounded-md py-3 px-4 text-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-[#135c4e] text-white px-8 py-4 rounded-md font-accent font-medium hover:bg-[#0f4a3e] transition-colors flex items-center gap-2"
                    >
                      Enviar Solicitação <PaperPlaneRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-gray-400 mt-4 italic">
                      Ao enviar, você concorda com nossa Política de Privacidade.
                    </p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[500px] bg-gray-200 overflow-hidden">
        {/* Placeholder for actual map */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-50 grayscale"></div>
        <div className="absolute inset-0 bg-[#135c4e]/20"></div>
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full">
            <div className="w-16 h-16 bg-[#135c4e]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#135c4e]">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#135c4e] mb-2">Nossa Localização</h3>
            <p className="text-gray-600 text-sm mb-6">
              Localizada no Setor Central de Araguaçu, nossa clínica oferece fácil acesso e estacionamento no local para sua conveniência.
            </p>
            <button onClick={() => window.open('https://maps.google.com/?q=Rua+06+28+Setor+Central+Araguaçu+TO', '_blank')} className="w-full bg-[#135c4e] text-white px-6 py-3 rounded-md font-accent font-medium hover:bg-[#0f4a3e] transition-colors flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> Abrir no Google Maps
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
