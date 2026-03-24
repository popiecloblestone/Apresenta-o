import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Treatments() {
  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-[#f0e8e1] text-[#8c6b5d] text-xs font-accent font-bold tracking-wider uppercase mb-6">
                Cuidado de Alto Padrão
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
                Tratamentos<br />de <span className="text-[#135c4e]">Excelência</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Combinamos precisão tecnológica com uma abordagem humanizada para redefinir sua experiência odontológica. Descubra nossas especialidades desenhadas para o seu bem-estar.
              </p>
              <div className="flex items-center gap-4 text-sm font-accent font-bold text-gray-400 uppercase tracking-widest">
                <div className="w-12 h-px bg-gray-300"></div>
                Arquitetura do Sorriso
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=1000" 
                  alt="Consultório Odontológico Moderno" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-sm italic text-gray-600">
                  "A verdadeira odontologia começa onde o cuidado encontra a arte da precisão."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Nossas Especialidades</h2>
            <div className="w-24 h-1 bg-[#135c4e]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200" 
                alt="Estética Avançada" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-3xl font-serif text-white mb-3">Estética Avançada</h3>
                <p className="text-white/80 max-w-md mb-6">
                  Lentes de contato dental, facetas de porcelana e clareamento a laser para um sorriso harmonioso e radiante.
                </p>
                <button className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-[400px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#f0e8e1] rounded-xl flex items-center justify-center mb-6 text-[#8c6b5d]">
                  <span className="text-2xl">🦷</span>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">Ortodontia</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Alinhadores invisíveis e aparelhos modernos para correções precisas com o máximo de conforto e discrição.
                </p>
              </div>
              <button className="text-[#135c4e] text-sm font-accent font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Saiba mais <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Small Card 2 (Green) */}
            <div className="bg-[#135c4e] rounded-2xl p-8 shadow-sm h-[400px] flex flex-col justify-between text-white">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-serif mb-3">Implantes Dentários</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Tecnologia de osseointegração de última geração para restaurar a função e a segurança do seu sorriso de forma definitiva.
                </p>
              </div>
              <button className="text-white text-sm font-accent font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Ver detalhes <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Small Card 3 */}
            <div className="bg-[#f8f9fa] rounded-2xl p-8 shadow-sm h-[400px] flex flex-col justify-between lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif text-gray-900 mb-3">Odontopediatria</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Um ambiente lúdico e acolhedor focado em criar memórias positivas e educar as crianças para uma vida inteira de saúde bucal.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#135c4e]" /> Ambiente Temático
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#135c4e]" /> Sedação Consciente
                    </li>
                  </ul>
                </div>
                <div className="flex-1 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                    alt="Odontopediatria" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Small Card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-[400px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#f0e8e1] rounded-xl flex items-center justify-center mb-6 text-[#8c6b5d]">
                  <span className="text-2xl">⚕️</span>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">Periodontia</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tratamentos especializados para a saúde das gengivas e tecidos de suporte, fundamentais para a longevidade dental.
                </p>
              </div>
              <button className="text-[#135c4e] text-sm font-accent font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Consultar <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
                Como desenhamos seu<br />
                <span className="italic text-[#135c4e]">Plano de Cuidado</span>
              </h2>
              <p className="text-gray-600 mb-12 max-w-md">
                Nosso processo diagnóstico é baseado em precisão digital e diálogo profundo para entender seus objetivos.
              </p>

              <div className="space-y-8">
                {[
                  { num: '01', title: 'Consulta Exploratória', desc: 'Avaliação clínica detalhada e escuta ativa sobre suas expectativas e histórico de saúde.' },
                  { num: '02', title: 'Escaneamento 3D Digital', desc: 'Mapeamento milimétrico da sua arcada dental com tecnologia iTero para um diagnóstico sem moldagens físicas.' },
                  { num: '03', title: 'Planejamento Arquitetural', desc: 'Apresentação do plano de tratamento personalizado com simulações digitais do resultado final.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#135c4e] text-[#135c4e] flex items-center justify-center font-accent font-bold">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-lg font-accent font-medium text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                  alt="Planejamento Digital" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-[#135c4e] text-white p-8 rounded-xl shadow-2xl">
                <div className="text-4xl font-accent font-bold mb-2">100%</div>
                <div className="text-xs font-accent font-bold tracking-widest uppercase opacity-80">Digital Workflow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#135c4e] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Inicie sua jornada para um sorriso transformado
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Estamos prontos para aplicar a melhor tecnologia em favor da sua saúde e estética bucal.
          </p>
          <button className="bg-white text-[#135c4e] px-8 py-4 rounded-md font-accent font-medium hover:bg-gray-100 transition-colors">
            Agende sua Avaliação
          </button>
        </div>
      </section>
    </div>
  );
}
