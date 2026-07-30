import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Path from '@/components/landing/Path';
import Mentor from '@/components/landing/Mentor';
import Programs from '@/components/landing/Programs';
import Marquee from '@/components/landing/Marquee';
import How from '@/components/landing/How';
import Faq from '@/components/landing/Faq';
import Cta from '@/components/landing/Cta';
import Footer from '@/components/landing/Footer';
import RegisterCta from '@/components/landing/RegisterCta';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Path />
        <RegisterCta />
        <Mentor />
        <RegisterCta />
        <Programs />
        <Marquee />
        <How />
        <RegisterCta />
        <Faq />
        <RegisterCta />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;