import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ZoneDetails from '../components/ZoneDetails';
import BookingMap from '../components/BookingMap';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal'; // Імпортуємо анімацію

export default function Home({ onRequireAuth }) {
  return (
    <main className="page-animate">
      {/* Головний екран залишаємо як є, у нього своя логіка появи */}
      <Hero />
      
      {/* Секція "Про нас" плавно випливає знизу */}
      <Reveal direction="up" delay={100}>
        <Features />
      </Reveal>
      
      {/* Ігрові зони (внутрішні картки анімуються окремо всередині компонента) */}
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