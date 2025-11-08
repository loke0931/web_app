
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { submitToGoogleSheet } from '../services/googleSheetsService';
import { FormData } from '../types';

interface InputFieldProps {
  id: keyof FormData;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow duration-300"
      placeholder={placeholder}
      required
    />
  </div>
);

interface ContactFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isModal = false, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    salonName: '',
    phone: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    
    const result = await submitToGoogleSheet(formData);

    if (result.success) {
      setStatus('success');
      setMessage(result.message);
      setFormData({ name: '', salonName: '', phone: '', email: '' });
      if (onClose) {
        setTimeout(onClose, 2000); // Закрыть модальное окно через 2 секунды
      }
    } else {
      setStatus('error');
      setMessage(result.message);
    }
  };

  return (
    <div id="contact" className={!isModal ? "py-20 sm:py-24" : ""}>
      <div className="container mx-auto px-6">
        {!isModal && (
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Готовы Улучшить Свой Салон?</h2>
            <p className="mt-4 text-lg text-gray-400">
              Заполните форму ниже, чтобы получить персонализированное демо и увидеть, как Bot-Codex может преобразить ваш бизнес.
            </p>
          </div>
        )}
        <div className="max-w-xl mx-auto bg-brand-dark p-8 rounded-2xl border border-white/10 shadow-2xl">
           {isModal && (
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Запросить Демо</h2>
              <p className="mt-2 text-md text-gray-400">
                Оставьте ваши данные, и мы свяжемся с вами.
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField id="name" label="Ваше Имя" type="text" placeholder="Иван Иванов" value={formData.name} onChange={handleChange} />
            <InputField id="salonName" label="Название Салона или Барбершопа" type="text" placeholder="Стильная Стрижка" value={formData.salonName} onChange={handleChange} />
            <InputField id="phone" label="Номер Телефона" type="tel" placeholder="+7 (999) 123-45-67" value={formData.phone} onChange={handleChange} />
            <InputField id="email" label="Адрес Электронной Почты" type="email" placeholder="ivan.ivanov@example.com" value={formData.email} onChange={handleChange} />
            
            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-4 px-6 py-4 bg-brand-primary text-white font-bold rounded-lg shadow-lg hover:bg-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Отправка...</span>
                  </>
                ) : (
                  'Получить Бесплатное Демо'
                )}
              </button>
            </div>
          </form>
          {message && (
            <div className={`mt-6 p-4 rounded-lg text-center font-medium ${status === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
