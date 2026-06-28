import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ZoneDetails from '../components/ZoneDetails';
import BookingMap from '../components/BookingMap';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Home({ onRequireAuth }) {
  return (
    <main className="page-animate">
      {/* Головний екран */}
      <Hero />
      
      {/* Секція "Про нас" */}
      <Reveal direction="up" delay={100}>
        <Features />
      </Reveal>
      
      {/* Ігрові зони */}
      <ZoneDetails />
      
      {/* Панель бронювання з'являється з легким підйомом */}
      <Reveal direction="up" delay={100}>
        <BookingMap onRequireAuth={onRequireAuth} />
      </Reveal>
      
      {/* Відгуки геймерів */}
      <Reveal direction="up" delay={100}>
        <Reviews />
      </Reveal>
      
      <Footer />
    </main>
  );
}