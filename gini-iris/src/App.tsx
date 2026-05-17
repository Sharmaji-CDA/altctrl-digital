import './index.css'
import CTA from './components/CTA';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

export default App
