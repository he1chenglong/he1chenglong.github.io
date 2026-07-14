import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Performance from './components/Performance';
import Testimonials from './components/Testimonials';
import Verdict from './components/Verdict';
import Comments from './components/Comments';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Performance />
        <Testimonials />
        <Verdict />
        <FAQ />
        <Comments />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
