import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, Mail, Scissors, Clock, RefreshCw } from 'lucide-react';
import { SERVICES, TEAM } from '@/src/constants';

interface Booking {
  id: number;
  serviceId: string;
  stylistId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/bookings');
      if (res.ok) {
        const data = await res.json();
        setBookings(data);
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const getServiceName = (id: string) => SERVICES.find(s => s.id === id)?.name || id;
  const getStylistName = (id: string) => TEAM.find(t => t.id === id)?.name || 'Geen voorkeur';

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2 block">Beheerder</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              Afspraken <span className="gold-text-gradient italic">Overzicht</span>
            </h1>
          </div>
          <button
            onClick={fetchBookings}
            className="p-3 rounded-full luxury-card text-gold-500 hover:gold-gradient hover:text-black transition-all"
          >
            <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>

        <div className="luxury-card rounded-3xl overflow-hidden border border-gold-500/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gold-500/5 border-b border-gold-500/20">
                  <th className="p-6 text-gold-500 font-bold uppercase tracking-widest text-xs">Datum & Tijd</th>
                  <th className="p-6 text-gold-500 font-bold uppercase tracking-widest text-xs">Klant</th>
                  <th className="p-6 text-gold-500 font-bold uppercase tracking-widest text-xs">Dienst</th>
                  <th className="p-6 text-gold-500 font-bold uppercase tracking-widest text-xs">Stylist</th>
                  <th className="p-6 text-gold-500 font-bold uppercase tracking-widest text-xs">Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {bookings.length === 0 && !loading ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-white/40 italic">
                      Geen afspraken gevonden.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <motion.tr
                      key={booking.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <Calendar size={16} className="text-gold-500" />
                          <span className="text-white font-medium">{booking.date}</span>
                          <span className="text-gold-500/50">|</span>
                          <Clock size={16} className="text-gold-500" />
                          <span className="text-white">{booking.time}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <User size={16} className="text-gold-500/50" />
                          <span className="text-white font-bold">{booking.name}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <Scissors size={16} className="text-gold-500/50" />
                          <span className="text-white/80">{getServiceName(booking.serviceId)}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-500 text-xs font-bold uppercase tracking-widest border border-gold-500/20">
                          {getStylistName(booking.stylistId)}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-white/60">
                            <Mail size={12} /> {booking.email}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/60">
                            <Phone size={12} /> {booking.phone}
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
