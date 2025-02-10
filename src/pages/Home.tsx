import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CompanyInfo from '../components/CompanyInfo';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <CompanyInfo />
    </main>
  );
}