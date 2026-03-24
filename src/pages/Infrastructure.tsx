import { MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Infrastructure() {
  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-[#f0e8e1] text-[#8c6b5d] text-xs font-accent font-bold tracking-wider uppercase mb-6">
                Excelência Espacial
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
                Nossa<br /><span className="text-[#135c4e]">Infraestrutura</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Ambientes projetados para harmonizar a precisão clínica com o conforto de um refúgio contemporâneo. Cada detalhe da Life Odontologia foi pensado para transformar sua experiência de cuidado.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Fachada Clínica" 
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
              A arquitetura do cuidado: espaços que priorizam a biossegurança e o bem-estar emocional, utilizando materiais nobres e luz natural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Image */}
            <div className="md:col-span-7 relative rounded-2xl overflow-hidden h-[600px] group">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Sala de Espera" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-serif text-gray-900 mb-2">Sala de Espera</h3>
                <p className="text-gray-600 text-sm">Conforto editorial com curadoria de mobiliário e aromaterapia exclusiva.</p>
              </div>
            </div>

            {/* Stacked Images */}
            <div className="md:col-span-5 flex flex-col gap-6 h-[600px]">
              <div className="flex-1 rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                  alt="Consultório" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                  alt="Instrumentos" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-[#135c4e]">🔬</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Unidades */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Nossas Unidades</h2>
            <div className="w-24 h-1 bg-[#8c6b5d]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Unidade Paulista */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden h-64 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                  alt="Unidade Paulista" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#135c4e] text-white text-xs font-accent font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Flagship
                </div>
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3">Unidade Paulista</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Localizada no coração financeiro de São Paulo, nossa unidade flagship oferece o que há de mais avançado em tecnologia 3D e laboratório de prótese digital próprio.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#135c4e]" />
                  Av. Paulista, 1000 - 15º Andar, Cerqueira César
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-[#135c4e]" />
                  (11) 4004-LIFE
                </div>
              </div>
              <button className="text-[#135c4e] text-sm font-accent font-bold uppercase tracking-wider hover:underline flex items-center gap-2">
                Ver no Mapa <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Unidade Itaim */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden h-64 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  alt="Unidade Itaim" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-accent font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Executive
                </div>
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3">Unidade Itaim</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Focada em estética e reabilitação oral de alta performance, a unidade Itaim combina um ambiente discreto com especialistas renomados.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#135c4e]" />
                  Rua Joaquim Floriano, 466 - CJ 81, Itaim Bibi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-[#135c4e]" />
                  (11) 3078-LIFE
                </div>
              </div>
              <button className="text-[#135c4e] text-sm font-accent font-bold uppercase tracking-wider hover:underline flex items-center gap-2">
                Ver no Mapa <ArrowRight className="w-4 h-4" />
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
                Pronto para uma nova experiência?
              </h2>
              <p className="text-white/80 mb-10 max-w-md">
                Nossos ambientes foram criados para que você se sinta em casa enquanto cuidamos do seu sorriso com rigor técnico absoluto.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#135c4e] px-8 py-3 rounded-md font-accent font-medium hover:bg-gray-100 transition-colors">
                  Agendar Visita
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-md font-accent font-medium hover:bg-white/10 transition-colors">
                  Central de Atendimento
                </button>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Corredor Clínica" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
