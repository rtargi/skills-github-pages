
import React, { useState } from 'react';

// IMPORTANTE: Substitua pela sua chave de acesso do Web3Forms.
// 1. Vá para https://web3forms.com/
// 2. Crie sua chave de acesso (Access Key) gratuitamente.
// 3. Cole a chave aqui neste formato: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
const WEB3FORMS_ACCESS_KEY = 'fe971b6d-41b0-4599-81d0-19b83b8b06a2';
const allDays = ['25', '26', '27'];

export const RSVPForm: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState<boolean | null>(null);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedDays, setSelectedDays] = useState<Set<string>>(new Set());
    const [daysError, setDaysError] = useState<string | null>(null);
    const [isWhatsapp, setIsWhatsapp] = useState<boolean | null>(null);

    const handleConfirmationChange = (confirmed: boolean) => {
        setIsConfirmed(confirmed);
        if (!confirmed) {
            setSelectedDays(new Set());
            setDaysError(null);
            setIsWhatsapp(null);
        }
    };

    const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDaysError(null);
        const { value, checked } = event.target;
        setSelectedDays(prev => {
            const newDays = new Set(prev);
            if (checked) {
                newDays.add(value);
            } else {
                newDays.delete(value);
            }
            return newDays;
        });
    };
    
    const handleAllDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        setDaysError(null);
        if (checked) {
            setSelectedDays(new Set(allDays));
        } else {
            setSelectedDays(new Set());
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (isConfirmed && selectedDays.size === 0) {
            setDaysError("Por favor, selecione ao menos um dia de participação.");
            return;
        }

        setSubmissionStatus('submitting');
        setErrorMessage('');
        setDaysError(null);
        
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        
        // Custom data for email notification
        const guestName = formData.get('name') || 'Convidado';
        formData.append('subject', `Nova confirmação para o CLIMAX 2025: ${guestName}`);
        formData.append('from_name', 'CLIMAX 2025 - Convites');
        formData.append('cc', 'irlanacassini@gmail.com,eloa.souzaoliver@gmail.com');

        // Convert Set to comma-separated string for submission
        formData.set('participation_days', Array.from(selectedDays).join(', '));

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
            } else {
                setSubmissionStatus('error');
                setErrorMessage(result.message || 'Ocorreu um erro ao enviar sua resposta. Tente novamente mais tarde.');
                console.error("Form submission error:", result);
            }
        } catch (error) {
            setSubmissionStatus('error');
            setErrorMessage('Ocorreu um erro de rede. Verifique sua conexão e tente novamente.');
            console.error("Network error:", error);
        }
    };

    if (isSubmitted) {
        return (
            <div className="text-center bg-white p-8 md:p-12 rounded-lg">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-stone-800">Obrigado!</h3>
                <p className="mt-2 text-stone-600">Sua resposta foi registrada. Em breve, enviaremos mais informações sobre o encontro. A sua participação é fundamental para virarmos o jogo no Vale!</p>
            </div>
        );
    }
    
    const detailsSectionClasses = `pt-6 border-t border-stone-200 transition-all duration-700 ease-in-out overflow-hidden ${isConfirmed ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`;
    const whatsappSectionClasses = `transition-all duration-500 ease-in-out overflow-hidden ${isWhatsapp === false ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`;


    return (
        <div className="bg-white p-8 md:p-12 rounded-lg">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-stone-800">Confirmação de Presença Estratégica</h1>
                <p className="mt-4 text-stone-600">Sua presença e contribuição são essenciais para o sucesso desta articulação. Por favor, preencha o formulário abaixo até <strong>24 de julho</strong>.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <fieldset className="space-y-3">
                    <legend className="text-lg font-medium text-stone-700">Você poderá comparecer ao CLIMAX 2025?</legend>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="confirmation" value="yes" required className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" onChange={() => handleConfirmationChange(true)} />
                            <span className="text-stone-700">Sim, estarei presente.</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="confirmation" value="no" required className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" onChange={() => handleConfirmationChange(false)} />
                            <span className="text-stone-700">Não poderei comparecer.</span>
                        </label>
                    </div>
                </fieldset>

                <div className={detailsSectionClasses}>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-stone-700">Nome Completo</label>
                            <input type="text" id="name" name="name" required={isConfirmed || false} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-stone-700">E-mail para Contato</label>
                            <input type="email" id="email" name="email" required={isConfirmed || false} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                        </div>
                         <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-stone-700">Telefone</label>
                            <input type="tel" id="phone" name="phone" placeholder="(XX) XXXXX-XXXX" required={isConfirmed || false} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                        </div>
                        <fieldset>
                            <legend className="text-sm font-medium text-stone-700">Este número é WhatsApp?</legend>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="is_whatsapp" value="yes" required={isConfirmed || false} className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" onChange={() => setIsWhatsapp(true)} />
                                    <span className="text-stone-700 text-sm">Sim</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="is_whatsapp" value="no" required={isConfirmed || false} className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" onChange={() => setIsWhatsapp(false)} />
                                    <span className="text-stone-700 text-sm">Não</span>
                                </label>
                            </div>
                        </fieldset>
                        <div className={whatsappSectionClasses}>
                            <label htmlFor="whatsapp_number" className="block text-sm font-medium text-stone-700">Por favor, informe seu WhatsApp</label>
                            <input type="tel" id="whatsapp_number" name="whatsapp_number" placeholder="(XX) XXXXX-XXXX" required={isWhatsapp === false} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                        </div>
                        <fieldset>
                            <legend className="text-sm font-medium text-stone-700">Quais dias você participará?<span className="font-normal text-stone-500"> (selecione os dias)</span></legend>
                            <div className="mt-2 space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" onChange={handleAllDaysChange} checked={selectedDays.size === allDays.length} className="h-4 w-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500" />
                                    <span className="text-stone-700 text-sm font-medium">TODOS OS DIAS (25, 26 e 27 de Julho)</span>
                                </label>
                                <div className="pl-6 border-l border-stone-200 ml-2 mt-2 space-y-2 pt-2">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" name="participation_days_option" value="25" onChange={handleDayChange} checked={selectedDays.has('25')} className="h-4 w-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500" />
                                        <span className="text-stone-700 text-sm">Dia 25 de Julho (Sexta)</span>
                                    </label>
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" name="participation_days_option" value="26" onChange={handleDayChange} checked={selectedDays.has('26')} className="h-4 w-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500" />
                                        <span className="text-stone-700 text-sm">Dia 26 de Julho (Sábado)</span>
                                    </label>
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" name="participation_days_option" value="27" onChange={handleDayChange} checked={selectedDays.has('27')} className="h-4 w-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500" />
                                        <span className="text-stone-700 text-sm">Dia 27 de Julho (Domingo)</span>
                                    </label>
                                </div>
                            </div>
                            {daysError && <p className="text-red-600 text-xs mt-2">{daysError}</p>}
                        </fieldset>
                        <fieldset>
                            <legend className="text-sm font-medium text-stone-700">Você precisará de apoio com o transporte?</legend>
                            <div className="mt-2 space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="transport_support" value="yes" className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" />
                                    <span className="text-stone-700 text-sm">Sim, preciso de apoio.</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="transport_support" value="no" defaultChecked className="h-4 w-4 text-amber-600 border-stone-300 focus:ring-amber-500" />
                                    <span className="text-stone-700 text-sm">Não, não preciso de apoio.</span>
                                </label>
                            </div>
                        </fieldset>
                        <div>
                            <label htmlFor="comments" className="block text-sm font-medium text-stone-700">Observações ou necessidades especiais (alimentação, etc.)</label>
                            <textarea id="comments" name="comments" rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="pt-5">
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-stone-400 disabled:cursor-not-allowed" disabled={isConfirmed === null || submissionStatus === 'submitting'}>
                        {submissionStatus === 'submitting' ? 'Enviando...' : 'Enviar Confirmação'}
                    </button>
                </div>
                {submissionStatus === 'error' && <p className="text-red-600 text-sm mt-4 text-center">{errorMessage}</p>}
            </form>
        </div>
    );
};
