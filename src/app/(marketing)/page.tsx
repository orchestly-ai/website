import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { Problem } from '@/components/sections/Problem';
import { Features } from '@/components/sections/Features';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Integrations } from '@/components/sections/Integrations';
import { ROI } from '@/components/sections/ROI';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Problem />
      <Features />
      <ProductShowcase />
      <HowItWorks />
      <Integrations />
      <ROI />
      <Testimonials />
      <CTA />
    </>
  );
}
