import NavigationSection from '@/components/HeroSection';
import HeroSectionHome from '@/components/HeroSeciton2';
import FeatureRestaurantSection from '@/components/FeatureRestaurantSection';
import Head from 'next/head';

export default function Home() {
  return (
    <div >
      <NavigationSection />
      <HeroSectionHome />
      <FeatureRestaurantSection />

    </div>
  );
}
