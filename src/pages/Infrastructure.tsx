import { MapPin, Phone, ArrowRight, Microscope } from '@phosphor-icons/react';
import { useModal } from '../contexts/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function Infrastructure() {
  const { openBookingModal } = useModal();
  const navigate = useNavigate();
  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6 mt-8">
                Nossa<br /><span className="text-[#135c4e]">Infraestrutura</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Ambientes clínicos projetados para aliar biossegurança, tecnologia e conforto, proporcionando uma experiência de atendimento superior.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=2000" 
            alt="Recepção Clínica" 
            className="w-full h-full object-cover rounded-bl-[100px]"
          />
        </div>
      </section>

      {/* Ambientes Clínicos */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Ambientes Clínicos</h2>
              <div className="w-24 h-1 bg-[#135c4e]"></div>
            </div>
            <p className="text-gray-600 max-w-md mt-6 md:mt-0 text-sm">
              Espaços que integram equipamentos de última geração em salas amplas e preparadas para oferecer o máximo bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Image */}
            <div className="md:col-span-7 relative rounded-2xl overflow-hidden h-[600px] group">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800" 
                alt="Sala de Espera" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-serif text-gray-900 mb-2">Recepção</h3>
                <p className="text-gray-600 text-sm">Ambiente preparado e acolhedor para a sua comodidade.</p>
              </div>
            </div>

            {/* Stacked Images */}
            <div className="md:col-span-5 flex flex-col gap-6 h-[600px]">
              <div className="flex-1 rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1606265752439-1f18756aa5ca?auto=format&fit=crop&q=80&w=800" 
                  alt="Consultório" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                  alt="Instrumentos" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <Microscope className="w-6 h-6 text-[#135c4e]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Clínica */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Nossa Clínica</h2>
            <div className="w-24 h-1 bg-[#8c6b5d]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Unidade Araguaçu */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden h-64 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                  alt="Clínica Araguaçu" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#135c4e] text-white text-xs font-accent font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Sede Principal
                </div>
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3">Unidade Araguaçu</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Referência em reabilitação oral e estética na região. Uma estrutura moderna, climatizada e voltada para atendimento de alta performance.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#135c4e]" />
                  Rua 06, nº 28, Setor Central, Araguaçu - TO
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-[#135c4e]" />
                  (63) 3384-1957
                </div>
              </div>
              <button onClick={() => window.open('https://maps.google.com/?q=Rua+06+28+Setor+Central+Araguaçu+TO', '_blank')} className="text-[#135c4e] text-sm font-accent font-bold uppercase tracking-wider hover:underline flex items-center gap-2">
                Ver no Mapa <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Redes Sociais */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden h-64 mb-6">
                <div className="absolute inset-0 bg-gray-900/60 z-10 transition-opacity duration-700 group-hover:opacity-40"></div>
                <img 
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800" 
                  alt="Resultados" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-accent font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                  Resultados Reais
                </div>
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3">Acompanhe no Instagram</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Mais de 4.000 pessoas já acompanham nossos casos. Veja os resultados incríveis de lentes de contato, implantes e harmonização facial diariamente.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-[#135c4e] font-accent font-bold">
                  @lifeodontologia.ar
                </div>
              </div>
              <button onClick={() => window.open('https://instagram.com/lifeodontologia.ar', '_blank')} className="text-[#135c4e] text-sm font-accent font-bold uppercase tracking-wider hover:underline flex items-center gap-2">
                Acessar Perfil <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#135c4e] rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div className="p-12 md:p-16 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Agende sua avaliação
              </h2>
              <p className="text-white/80 mb-10 max-w-md">
                Venha conhecer nossa estrutura e realizar um planejamento clínico conosco.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={openBookingModal} className="bg-white text-[#135c4e] px-8 py-3 rounded-md font-accent font-medium hover:bg-gray-100 transition-colors">
                  Agendar Visita
                </button>
                <button onClick={() => navigate('/contato')} className="border border-white/30 text-white px-8 py-3 rounded-md font-accent font-medium hover:bg-white/10 transition-colors">
                  Central de Atendimento
                </button>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1590680424578-8fc87fba4fcd?auto=format&fit=crop&q=80&w=800" 
                alt="Consultórios Clínica" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
