import { CheckCircle, Microscope, UserFocus, ShieldCheck } from '@phosphor-icons/react';

export default function Team() {
  const doctors = [
    {
      name: 'Dr. Luiz Veras',
      role: 'Diretor Clínico',
      specialty: 'Reabilitação Oral & Estética',
      credentials: ['@LUIZVERASS'],
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Dra. Sara',
      role: 'Diretora Clínica',
      specialty: 'Harmonização Orofacial',
      credentials: ['@SARACJ_31'],
      image: 'https://images.unsplash.com/photo-1594824436998-058a231b611c?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Equipe Especializada',
      role: 'Multidisciplinar',
      specialty: 'Ortodontia · Implantes · Clínico',
      credentials: ['ALTA PERFORMANCE'],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    }
  ];

  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#135c4e] leading-tight mb-6 max-w-4xl mx-auto">
          Equipe Clínica:<br />
          <span className="text-gray-900">Conheça Nossos Especialistas</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Profissionais dedicados e focados nas mais variadas frentes da odontologia para proporcionar o tratamento adequado ao seu caso.
        </p>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
                <div className="aspect-4/5 overflow-hidden bg-gray-100">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-[#8c6b5d]" />
                    <span className="text-xs font-accent font-bold text-[#8c6b5d] uppercase tracking-wider">{doctor.role}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-[#135c4e] text-sm font-accent font-medium mb-6">{doctor.specialty}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                    {doctor.credentials.map((cred, i) => (
                      <span key={i} className="text-[10px] font-accent font-bold text-gray-400 uppercase tracking-wider">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech/Excellence Section */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Tecnologia" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-[#135c4e]/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-linear-to-tr from-[#135c4e] to-transparent opacity-90"></div>
              
              {/* Abstract Tech Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-64 h-64 border border-white rounded-full animate-spin-slow"></div>
                <div className="absolute w-48 h-48 border border-white rounded-full animate-reverse-spin"></div>
                <div className="absolute w-32 h-32 border border-white rounded-full"></div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#135c4e] leading-tight mb-6">
                Estrutura de Atendimento
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                Aliamos a capacitação de nossos profissionais a espaços desenhados com critérios técnicos claros e tecnologia para auxílio clínico.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#135c4e]">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-accent font-medium text-gray-900 mb-2">Microscopia Operatória</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Precisão extrema para tratamentos de canal e reabilitações estéticas.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#135c4e]">
                    <UserFocus className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-accent font-medium text-gray-900 mb-2">Escaneamento 3D Intraoral</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Elimina a necessidade de moldagens desconfortáveis e agiliza o planejamento.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#135c4e]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-accent font-medium text-gray-900 mb-2">Certificação ISO 9001</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Gestão de qualidade focada na segurança e satisfação total do paciente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
