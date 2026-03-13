/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Booking from './components/Booking';
import StyleAdvice from './components/StyleAdvice';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Promotions from './components/Promotions';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Portfolio />
        <StyleAdvice />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <Promotions />
    </div>
  );
}
