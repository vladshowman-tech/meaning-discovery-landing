import HomeHeader from '@/components/home/HomeHeader';
import HomeHero from '@/components/home/HomeHero';
import HomeBenefits from '@/components/home/HomeBenefits';
import HomeTestimonials from '@/components/home/HomeTestimonials';
import HomeFaqCta from '@/components/home/HomeFaqCta';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HomeHeader />
      <main>
        <HomeHero />
        <HomeBenefits />
        <HomeTestimonials />
        <HomeFaqCta />
      </main>
    </div>
  );
};

export default Home;
