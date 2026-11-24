import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ServicesGrid from '../components/ServicesGrid';
import ExperienceBanner from '../components/ExperienceBanner';
import ProjectsBanner from '../components/ProjectsBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ExperienceBanner />
      <ProjectsBanner />
    </main>
  );
}