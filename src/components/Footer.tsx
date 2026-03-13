import React from 'react';
import { Scissors, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold-500/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
              <Scissors className="text-black w-4 h-4" />
            </div>
            <span className="text-lg font-display font-bold tracking-widest uppercase gold-text-gradient">
              Knip & Stijl
            </span>
          </div>

          <div className="flex gap-8 text-xs uppercase tracking-widest text-white/40">
            <a href="#home" className="hover:text-gold-500 transition-colors">Home</a>
            <a href="#diensten" className="hover:text-gold-500 transition-colors">Diensten</a>
            <a href="#team" className="hover:text-gold-500 transition-colors">Team</a>
            <a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a>
            <a href="/admin" className="hover:text-gold-500 transition-colors opacity-30">Admin</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Knip & Stijl Amsterdam. Alle rechten voorbehouden.</p>
          <p className="flex items-center gap-1">
            Gemaakt met <Heart size={10} className="text-gold-500" /> voor stijlvolle Amsterdammers
          </p>
        </div>
      </div>
    </footer>
  );
}
