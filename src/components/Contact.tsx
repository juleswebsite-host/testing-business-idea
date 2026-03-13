import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-2 block"
            >
              Contact & Locatie
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
            >
              Kom Langs in <br />
              <span className="gold-text-gradient italic">De Salon</span>
            </motion.h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Adres</h4>
                  <p className="text-white/60">Hoofdstraat 12, 1234 AB, Amsterdam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Telefoon</h4>
                  <p className="text-white/60">020-1234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">E-mail</h4>
                  <p className="text-white/60">info@knipenstijl.nl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Openingstijden</h4>
                  <div className="text-white/60 grid grid-cols-2 gap-x-8 gap-y-1">
                    <span>Ma - Vr:</span> <span>09:00 - 18:00</span>
                    <span>Zaterdag:</span> <span>10:00 - 17:00</span>
                    <span>Zondag:</span> <span>Gesloten</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full luxury-card flex items-center justify-center text-gold-500 hover:gold-gradient hover:text-black transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Map Placeholder / Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="luxury-card rounded-3xl overflow-hidden min-h-[400px] relative"
          >
            {/* Real Google Maps would go here */}
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-center p-8">
              <div>
                <MapPin size={48} className="text-gold-500 mx-auto mb-4 opacity-50" />
                <p className="text-white/40 uppercase tracking-[0.2em] text-sm">
                  Google Maps Integratie <br /> Hoofdstraat 12, Amsterdam
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-8 py-3 rounded-full border border-gold-500/30 text-gold-500 text-xs font-bold uppercase tracking-widest hover:border-gold-500 transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
