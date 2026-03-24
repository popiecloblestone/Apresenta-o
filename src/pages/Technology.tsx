import { CheckCircle2, Target, Shield, Leaf } from 'lucide-react';

export default function Technology() {
  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#e8f0ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white/50 text-[#135c4e] text-xs font-accent font-bold tracking-wider uppercase mb-6 border border-[#135c4e]/10">
                Aura Dental Editorial
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
                Odontologia<br /><span className="italic text-[#135c4e]">do Futuro</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Unimos a precisão da engenharia digital ao toque humano para criar experiências odontológicas que transcendem o convencional. Bem-vindo à nova era da saúde bucal.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#135c4e] text-white px-6 py-3 rounded-md font-accent font-medium hover:bg-[#0f4a3e] transition-colors">
                  Conhecer Equipamentos
                </button>
                <button className="bg-white text-[#135c4e] px-6 py-3 rounded-md font-accent font-medium hover:bg-gray-50 transition-colors border border-gray-200">
                  Nossa Metodologia
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#135c4e]/5 p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                  alt="Scanner 3D" 
                  className="w-full h-full object-cover rounded-2xl shadow-lg mix-blend-multiply"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-[#e8f0ed] rounded-lg flex items-center justify-center text-[#135c4e]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-accent font-bold text-gray-400 uppercase tracking-wider">Precisão</div>
                  <div className="text-sm font-accent font-medium text-gray-900">Tolerância de 0.01mm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Tecnologia de Ponta</h2>
            <div className="w-24 h-1 bg-[#135c4e] mb-6"></div>
            <p className="text-gray-600 max-w-2xl">
              Investimos continuamente nos mais avançados sistemas diagnósticos e terapêuticos globais para garantir resultados previsíveis e biocompatíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Scanner */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] group bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                alt="Scanner Intraoral" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-serif text-white mb-3">Scanners Intraorais 3D</h3>
                <p className="text-white/80 text-sm max-w-md">
                  Eliminamos as moldagens tradicionais desconfortáveis. Capturamos a topografia exata da sua boca em segundos com fidelidade micrométrica.
                </p>
              </div>
            </div>

            {/* DSD */}
            <div className="bg-[#135c4e] rounded-2xl p-8 shadow-sm h-[400px] flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-2xl font-serif mb-3">Planejamento Digital do Sorriso (DSD)</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-md">
                  Arquitetamos seu novo sorriso digitalmente antes mesmo de tocar nos dentes. Você visualiza o resultado final e participa ativamente de cada detalhe estético.
                </p>
              </div>
              <div className="text-xs font-accent font-bold tracking-widest uppercase opacity-60 relative z-10">
                Protocolo Predictable
              </div>
            </div>

            {/* Microscopia */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] group bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                alt="Microscopia" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-serif text-white mb-3">Microscopia Operatória</h3>
                <p className="text-white/80 text-sm max-w-md">
                  Ampliação de até 20x para procedimentos endodônticos e cirúrgicos, permitindo uma odontologia minimamente invasiva e ultra-precisa.
                </p>
              </div>
            </div>

            {/* Laser */}
            <div className="bg-[#f4f7f6] rounded-2xl p-8 shadow-sm h-[400px] flex flex-col justify-center">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#135c4e] mb-3">Laser de Alta Potência</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Cirurgias sem cortes, cicatrização acelerada e descontaminação biológica profunda. O futuro dos tratamentos periodontais e regenerativos.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#135c4e]" /> Sem ruído, sem trauma
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#135c4e]" /> Recuperação 3x mais rápida
                    </li>
                  </ul>
                </div>
                <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400" 
                    alt="Laser" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-24 bg-[#135c4e] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Pilares da Nossa Tecnologia
          </h2>
          <p className="text-white/80 mb-16 max-w-2xl mx-auto text-lg">
            A tecnologia não é um fim, mas um meio para entregar uma saúde excepcional com conforto absoluto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-accent font-medium text-white mb-4">Precisão Absoluta</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Diagnósticos digitais e guias cirúrgicas eliminam o erro humano, garantindo ajustes perfeitos e estética impecável.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-accent font-medium text-white mb-4">Segurança Máxima</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Menor radiação em exames de imagem e protocolos de biossegurança monitorados digitalmente para sua proteção total.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-accent font-medium text-white mb-4">Conforto Biológico</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Técnicas menos invasivas, lasers terapêuticos e sedação consciente digital para uma experiência livre de ansiedade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Pronto para vivenciar a odontologia de alto nível?
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
              Agende uma avaliação tecnológica e descubra como nossas ferramentas podem transformar seu sorriso com rapidez e precisão.
            </p>
            <button className="bg-[#135c4e] text-white px-8 py-4 rounded-md font-accent font-medium hover:bg-[#0f4a3e] transition-colors">
              Marcar Consulta Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
