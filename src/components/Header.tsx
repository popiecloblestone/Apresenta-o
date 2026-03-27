import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import { useModal } from '../contexts/ModalContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openBookingModal } = useModal();

  const navLinks = [
    { name: 'Clínicas', path: '/clinicas' },
    { name: 'Especialidades', path: '/tratamentos' },
    { name: 'Nossa Equipe', path: '/equipe' },
    { name: 'Tecnologia', path: '/tecnologia' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <NavLink to="/tratamentos" className="text-2xl font-serif font-bold text-[#135c4e]">
                Life Odontologia
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-accent font-medium transition-colors hover:text-[#135c4e] ${
                      isActive ? 'text-[#135c4e] border-b-2 border-[#135c4e]' : 'text-gray-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={openBookingModal}
                className="bg-[#135c4e] text-white px-6 py-2.5 rounded-md text-sm font-accent font-medium hover:bg-[#0f4a3e] transition-colors"
              >
                Agendar Consulta
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#135c4e] focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-accent font-medium ${
                      isActive ? 'text-[#135c4e] bg-gray-50' : 'text-gray-600 hover:text-[#135c4e] hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-accent font-medium text-[#135c4e] hover:bg-gray-50"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
