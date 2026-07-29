import HomeHeader from '@/components/home/HomeHeader';
import HomeHero from '@/components/home/HomeHero';
import HomeBenefits from '@/components/home/HomeBenefits';
import Mentor from '@/components/landing/Mentor';
import Programs from '@/components/landing/Programs';
import HomeTestimonials from '@/components/home/HomeTestimonials';
import HomeFaqCta from '@/components/home/HomeFaqCta';

const TochkaStarta = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HomeHeader />
      <main>
        <HomeHero />
        <HomeBenefits />
        <Mentor />
        <Programs />
        <HomeTestimonials />
        <HomeFaqCta />
      </main>
    </div>
  );
};

export default TochkaStarta;
