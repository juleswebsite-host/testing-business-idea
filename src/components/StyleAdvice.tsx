import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Send, Loader2, Scissors } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export default function StyleAdvice() {
  const [prompt, setPrompt] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const getAdvice = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Je bent een professionele haarstylist bij Knip & Stijl Amsterdam. Geef kort en krachtig stijladvies op basis van de volgende vraag: "${prompt}". Antwoord in het Nederlands, wees vriendelijk en professioneel.`,
      });
      setAdvice(response.text || 'Sorry, ik kon geen advies genereren op dit moment.');
    } catch (error) {
      console.error('Gemini Error:', error);
      setAdvice('Er is iets misgegaan. Probeer het later opnieuw of kom langs in de salon!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-zinc-950 border-y border-gold-500/10">
      <div className="max-w-4xl mx-auto">
        <div className="luxury-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Scissors size={120} className="text-gold-500" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-gold-500" />
              <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">AI Style Assistant</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Persoonlijk <span className="gold-text-gradient italic">Stijladvies</span>
            </h2>
            <p className="text-white/70 mb-8 max-w-xl">
              Twijfel je over een nieuw kapsel of heb je advies nodig over haarverzorging? Onze AI-stylist helpt je direct op weg.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Bijv: Welk kapsel past bij een rond gezicht?"
                className="flex-1 bg-black/50 border border-white/10 rounded-full px-6 py-4 text-white focus:border-gold-500 outline-none"
              />
              <button
                onClick={getAdvice}
                disabled={loading}
                className="px-8 py-4 rounded-full gold-gradient text-black font-bold uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                Vraag Advies
              </button>
            </div>

            {advice && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gold-500/5 border border-gold-500/20 p-6 rounded-2xl"
              >
                <p className="text-white/90 leading-relaxed italic">"{advice}"</p>
                <div className="mt-4 flex justify-end">
                  <a href="#booking" className="text-gold-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                    Boek een consultatie →
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
