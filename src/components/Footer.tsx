import { NavLink } from 'react-router-dom';
import { ShareNetwork, Globe } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-[#135c4e] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4">Life Odontologia</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Clínica odontológica de reabilitação e estética avançada. Investimos em tecnologia e previsibilidade para resultados duradouros.
            </p>
            <div className="flex space-x-4 mt-6">
              <button onClick={() => window.open('https://instagram.com/lifeodontologia.ar', '_blank')} aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
                <ShareNetwork className="h-5 w-5" />
              </button>
              <button aria-label="Website" className="text-white/80 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-accent font-bold tracking-wider uppercase mb-4 text-white/60">Navegação</h4>
            <ul className="space-y-3">
              <li><NavLink to="/sobre" className="text-sm text-white/80 hover:text-white transition-colors">Sobre Nós</NavLink></li>
              <li><NavLink to="/tratamentos" className="text-sm text-white/80 hover:text-white transition-colors">Especialidades</NavLink></li>
              <li><NavLink to="/carreiras" className="text-sm text-white/80 hover:text-white transition-colors">Carreiras</NavLink></li>
              <li><NavLink to="/faq" className="text-sm text-white/80 hover:text-white transition-colors">FAQ</NavLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-accent font-bold tracking-wider uppercase mb-4 text-white/60">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Portal do Paciente</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-xs font-accent font-bold tracking-wider uppercase mb-4 text-white/60">Contato</h4>
            <p className="text-sm text-white/80 mb-4">
              Rua 06, nº 28 - Setor Central<br />
              Araguaçu - TO<br />
              (63) 3384-1957
            </p>
            <h4 className="text-xs font-accent font-bold tracking-wider uppercase mb-4 mt-6 text-white/60">Newsletter</h4>
            <p className="text-sm text-white/80 mb-4">Receba novidades sobre saúde bucal e estética.</p>
            <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Inscrição confirmada com sucesso!'); }}>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-white/50 w-full text-sm"
              />
              <button
                type="submit"
                className="bg-[#0f4a3e] hover:bg-[#0c3a31] px-4 py-2 rounded-r-md text-sm font-accent font-medium transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/60 text-center md:text-left">
            © 2024 Life Odontologia. Todos os direitos reservados. CRO/SP: 00.000
          </p>
        </div>
      </div>
    </footer>
  );
}
