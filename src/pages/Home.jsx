import Hero from '../components/Hero';
import Features from '../components/Features';
import ZoneDetails from '../components/ZoneDetails';
import BookingMap from '../components/BookingMap';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

export default function Home({ onRequireAuth }) {
  return (
    <main>
      <Hero />
      <Features />
      <ZoneDetails />
      <BookingMap onRequireAuth={onRequireAuth} />
      <Reviews />
      <Footer />
    </main>
  );
}