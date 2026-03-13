import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Scissors, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { SERVICES, TEAM } from '@/src/constants';

type BookingFormData = {
  serviceId: string;
  stylistId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
};

const TIME_SLOTS = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    const service = SERVICES.find(s => s.id === data.serviceId)?.name || data.serviceId;
    const stylist = TEAM.find(t => t.id === data.stylistId)?.name || 'Geen voorkeur';
    
    const message = `Hallo, ik wil graag een afspraak maken:
- Dienst: ${service}
- Stylist: ${stylist}
- Datum: ${data.date}
- Tijd: ${data.time}
- Naam: ${data.name}
- E-mail: ${data.email}
- Telefoon: ${data.phone}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/31612345678?text=${encodedMessage}`; // Replace with real number
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 px-6 bg-zinc-900 flex items-center justify-center min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="luxury-card p-12 rounded-3xl text-center max-w-md w-full"
        >
          <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-black w-10 h-10" />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">Aanvraag Verstuurd!</h2>
          <p className="text-white/70 mb-8">
            We hebben je aanvraag geopend in WhatsApp. Bevestig het bericht om de afspraak definitief te maken.<br />
            <span className="text-gold-500 font-bold">Betaling vindt plaats in de salon.</span>
          </p>
          <button
            onClick={() => { setIsSubmitted(false); setStep(1); }}
            className="w-full py-4 rounded-full gold-gradient text-black font-bold uppercase tracking-widest"
          >
            Nog een afspraak maken
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-2 block"
          >
            Plan je bezoek
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white"
          >
            Online <span className="gold-text-gradient italic">Boeken</span>
          </motion.h2>
        </div>

        <div className="luxury-card p-8 md:p-12 rounded-3xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Progress Bar */}
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    step >= s ? 'gold-gradient text-black' : 'bg-zinc-800 text-white/40'
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <Scissors className="text-gold-500" /> Kies je Dienst & Stylist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/60 uppercase tracking-widest mb-2">Dienst</label>
                    <select
                      {...register('serviceId', { required: true })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 outline-none"
                    >
                      <option value="">Selecteer een dienst</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>{s.name} ({s.price})</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 uppercase tracking-widest mb-2">Stylist</label>
                    <select
                      {...register('stylistId', { required: true })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 outline-none"
                    >
                      <option value="">Geen voorkeur</option>
                      {TEAM.map((t) => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-4 rounded-full gold-gradient text-black font-bold uppercase tracking-widest mt-8"
                >
                  Volgende Stap
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <Calendar className="text-gold-500" /> Datum & Tijd
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/60 uppercase tracking-widest mb-2">Datum</label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      {...register('date', { required: true })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 uppercase tracking-widest mb-2">Tijd</label>
                    <select
                      {...register('time', { required: true })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 outline-none"
                    >
                      <option value="">Kies een tijdstip</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest"
                  >
                    Terug
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-4 rounded-full gold-gradient text-black font-bold uppercase tracking-widest"
                  >
                    Volgende Stap
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <User className="text-gold-500" /> Jouw Gegevens
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/60 uppercase tracking-widest mb-2">Naam</label>
                    <input
                      type="text"
                      {...register('name', { required: true })}
                      placeholder="Je volledige naam"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 uppercase tracking-widest mb-2">E-mail</label>
                      <input
                        type="email"
                        {...register('email', { required: true })}
                        placeholder="je@email.com"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 uppercase tracking-widest mb-2">Telefoon</label>
                      <input
                        type="tel"
                        {...register('phone', { required: true })}
                        placeholder="06 12345678"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest"
                  >
                    Terug
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 rounded-full gold-gradient text-black font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    Bevestig via WhatsApp
                  </button>
                </div>
                <p className="text-center text-white/40 text-xs mt-4 uppercase tracking-widest">
                  Betaling vindt plaats in de salon na de behandeling.
                </p>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
