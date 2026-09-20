import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CaseStudiesGallery } from './components/CaseStudiesGallery';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InteractiveAccountStatusDemo } from './components/InteractiveAccountStatusDemo';
import { PlatformSplit } from './components/PlatformSplit';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { AdminPanelSection } from './components/AdminPanelSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050706] text-[#F5F7F5] selection:bg-[#18D65A]/20 selection:text-[#35E875]">
      {/* Cinematic 3D Intro Sequence */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main Website App Shell */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        <main>
          <HeroSection />
          <TrustStrip />
          <ServicesSection />
          <BeforeAfterSlider />
          <CaseStudiesGallery />
          <ProcessTimeline />
          <WhyChooseUs />
          <InteractiveAccountStatusDemo />
          <PlatformSplit />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
          <AdminPanelSection />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
