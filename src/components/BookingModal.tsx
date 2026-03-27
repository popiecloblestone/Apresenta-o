import { useState } from 'react';
import { X, Sparkle, Stethoscope, ClipboardText, Heartbeat, CheckCircle, User, CaretLeft, CaretRight, Sun, Moon } from '@phosphor-icons/react';
import { cn } from '../lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState<string | null>(null);
  const [procedures, setProcedures] = useState<string[]>([]);
  const [isPatient, setIsPatient] = useState<boolean | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!isOpen) return null;

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const toggleProcedure = (proc: string) => {
    setProcedures((prev) =>
      prev.includes(proc) ? prev.filter((p) => p !== proc) : [...prev, proc]
    );
  };

  const renderStep1 = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Qual é o seu principal objetivo?</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Selecione a opção que melhor descreve o que você busca hoje para que possamos personalizar seu atendimento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {[
          { id: 'sorriso', icon: Sparkle, label: 'Quero melhorar meu sorriso' },
          { id: 'dor', icon: Stethoscope, label: 'Estou com dor ou desconforto' },
          { id: 'avaliacao', icon: ClipboardText, label: 'Quero fazer uma avaliação' },
          { id: 'especifico', icon: Heartbeat, label: 'Tenho interesse em um procedimento específico' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setObjective(item.id)}
            className={cn(
              "flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all duration-200",
              objective === item.id
                ? "border-[#135c4e] bg-[#135c4e]/5"
                : "border-transparent bg-white shadow-sm hover:shadow-md hover:border-gray-200"
            )}
          >
            <item.icon className={cn("w-8 h-8 mb-4", objective === item.id ? "text-[#135c4e]" : "text-[#135c4e]")} />
            <span className="font-accent font-medium text-gray-900">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-12 flex justify-between items-center max-w-3xl mx-auto">
        <button onClick={onClose} className="text-[#135c4e] font-accent font-medium hover:underline">Voltar</button>
        <button
          onClick={nextStep}
          disabled={!objective}
          className="bg-[#135c4e] text-white px-8 py-3 rounded-md font-accent font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0f4a3e] transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Nos conte um pouco mais</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Selecione os procedimentos que você tem interesse em realizar na nossa unidade.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Ortodontia', 'Implantes', 'Facetas', 'Harmonização Orofacial', 'Clareamento', 'Urgência'].map((proc) => {
            const isSelected = procedures.includes(proc);
            return (
              <button
                key={proc}
                onClick={() => toggleProcedure(proc)}
                className={cn(
                  "px-6 py-3 rounded-full border transition-all flex items-center gap-2",
                  isSelected
                    ? "border-[#135c4e] text-[#135c4e] bg-[#135c4e]/5 font-accent font-medium"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 bg-white"
                )}
              >
                {isSelected && <CheckCircle className="w-4 h-4" />}
                {proc}
              </button>
            );
          })}
        </div>

        <div className="bg-[#f8f5f2] rounded-xl p-6 flex gap-4 items-start border-l-4 border-[#8c6b5d]">
          <div className="bg-[#8c6b5d] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-accent font-bold mt-0.5">i</div>
          <div>
            <h4 className="font-accent font-medium text-gray-900 mb-1">Dica de Especialista</h4>
            <p className="text-sm text-gray-600">Você pode selecionar múltiplos itens. Isso nos ajuda a preparar uma equipe multidisciplinar para sua primeira consulta.</p>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <button onClick={prevStep} className="text-[#135c4e] font-accent font-medium hover:underline">VOLTAR</button>
          <button
            onClick={nextStep}
            className="bg-[#135c4e] text-white px-8 py-3 rounded-md font-accent font-medium hover:bg-[#0f4a3e] transition-colors"
          >
            PRÓXIMO PASSO
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Já é paciente da clínica?</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Precisamos desses dados para localizar seu histórico ou criar um novo registro em nossa unidade.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <button
            onClick={() => setIsPatient(true)}
            className={cn(
              "p-8 rounded-2xl border-2 text-left transition-all",
              isPatient === true
                ? "border-[#135c4e] bg-[#135c4e]/5"
                : "border-transparent bg-white shadow-sm hover:shadow-md"
            )}
          >
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-4", isPatient === true ? "bg-[#135c4e] text-white" : "bg-gray-100 text-gray-500")}>
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className={cn("text-lg font-accent font-medium mb-2", isPatient === true ? "text-[#135c4e]" : "text-gray-900")}>Sim, já sou paciente</h3>
            <p className="text-gray-500 text-sm">Buscaremos seus dados automaticamente.</p>
          </button>

          <button
            onClick={() => setIsPatient(false)}
            className={cn(
              "p-8 rounded-2xl border-2 text-left transition-all",
              isPatient === false
                ? "border-[#135c4e] bg-[#135c4e]/5"
                : "border-transparent bg-white shadow-sm hover:shadow-md"
            )}
          >
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-4", isPatient === false ? "bg-[#135c4e] text-white" : "bg-gray-100 text-gray-500")}>
              <User className="w-5 h-5" />
            </div>
            <h3 className={cn("text-lg font-accent font-medium mb-2", isPatient === false ? "text-[#135c4e]" : "text-gray-900")}>Não, é minha primeira vez</h3>
            <p className="text-gray-500 text-sm">Seja muito bem-vindo à Lumina.</p>
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-accent font-bold text-gray-500 uppercase tracking-wider mb-2">Nome Completo</label>
              <input
                type="text"
                placeholder="Ex: Ana Maria Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#135c4e] transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-accent font-bold text-gray-500 uppercase tracking-wider mb-2">Telefone/WhatsApp</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#135c4e] transition-colors bg-transparent"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={nextStep}
              disabled={isPatient === null || !name || !phone}
              className="bg-[#135c4e] text-white px-8 py-3 rounded-md font-accent font-medium disabled:opacity-50 flex items-center gap-2 hover:bg-[#0f4a3e] transition-colors"
            >
              Próximo Passo <CaretRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Escolha seu horário</h2>
        <p className="text-gray-500 max-w-lg">
          Selecione a data e o período que melhor se adaptam à sua rotina para o atendimento com a Lumina.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Calendar (Simplified) */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-accent font-medium text-gray-900">Novembro 2024</h3>
            <div className="flex gap-2">
              <button aria-label="Mês anterior" className="p-1 hover:bg-gray-100 rounded-full"><CaretLeft className="w-5 h-5 text-gray-600" /></button>
              <button aria-label="Próximo mês" className="p-1 hover:bg-gray-100 rounded-full"><CaretRight className="w-5 h-5 text-gray-600" /></button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-y-6 text-center mb-8">
            {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map(d => (
              <div key={d} className="text-xs font-accent font-bold text-gray-400">{d}</div>
            ))}
            {/* Empty days */}
            <div className="text-gray-300">27</div><div className="text-gray-300">28</div><div className="text-gray-300">29</div><div className="text-gray-300">30</div><div className="text-gray-300">31</div>
            {/* Active days */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(d => (
              <button
                key={d}
                onClick={() => setSelectedDate(d)}
                className={cn(
                  "w-10 h-10 mx-auto rounded-lg flex items-center justify-center transition-colors",
                  selectedDate === d ? "bg-[#135c4e] text-white font-accent font-medium" : 
                  [7, 11, 12].includes(d) ? "border border-[#135c4e] text-[#135c4e] font-accent font-medium" : "text-gray-700 hover:bg-gray-100"
                )}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#135c4e]"></div><span className="text-gray-600">Selecionado</span></div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full border border-[#135c4e]"></div><span className="text-gray-600">Disponível</span></div>
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-gray-900 font-accent font-medium mb-4">
              <Sun className="w-5 h-5 text-orange-500" weight="fill" /> Manhã
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {['08:00', '09:00', '09:30', '10:00', '11:30'].map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={cn(
                    "py-2.5 rounded-md border text-sm transition-colors",
                    selectedTime === t ? "bg-[#135c4e] border-[#135c4e] text-white" : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h4 className="flex items-center gap-2 text-gray-900 font-accent font-medium mb-4">
              <Moon className="w-5 h-5 text-blue-500" weight="fill" /> Tarde
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {['14:00', '14:30', '15:00', '16:30', '17:00', '18:00'].map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={cn(
                    "py-2.5 rounded-md border text-sm transition-colors",
                    selectedTime === t ? "bg-[#135c4e] border-[#135c4e] text-white" : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100&h=100" alt="Dr. Luiz Veras" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h5 className="font-accent font-medium text-gray-900">Dr. Eduardo Silveira</h5>
                <p className="text-xs text-gray-500">Implantes e Reabilitação Oral</p>
              </div>
            </div>
            <button
              onClick={() => {
                alert('Consulta agendada com sucesso!');
                onClose();
              }}
              disabled={!selectedDate || !selectedTime}
              className="w-full bg-[#135c4e] text-white py-3 rounded-md font-accent font-medium disabled:opacity-50 hover:bg-[#0f4a3e] transition-colors mb-4"
            >
              Confirmar Horário
            </button>
            <button onClick={prevStep} className="w-full text-[#135c4e] font-accent font-medium hover:underline">
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl bg-[#fafafa] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
          <div className="text-xl font-accent font-bold text-[#135c4e]">Life Odontologia</div>
          <button aria-label="Fechar" onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-8 pt-8 pb-4 bg-white">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-accent font-bold text-[#135c4e] uppercase tracking-wider">Passo {step} de 4</span>
            <span className="text-xs text-gray-400">
              {step === 1 && 'Objetivo da Consulta'}
              {step === 2 && 'Informações de Interesse'}
              {step === 3 && 'Identificação'}
              {step === 4 && 'Agendamento de Consulta'}
            </span>
          </div>
          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#135c4e] transition-all duration-500 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="grow overflow-y-auto p-8 md:p-12">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
        </div>
      </div>
    </div>
  );
}
