import { About } from "@/components/sections/About";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Process } from "@/components/sections/Process";
import { Programs } from "@/components/sections/Programs";
import { QuickContact } from "@/components/sections/QuickContact";
import { SocialMedia } from "@/components/sections/SocialMedia";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { WhyUs } from "@/components/sections/WhyUs";

/** Zamanlanmış yazılar tarihi geldiğinde listeye otomatik düşsün diye. */
export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickContact />
      <WhyUs />
      <Programs />
      <Process />
      <About />
      <TrustSignals />
      <Gallery />
      <BlogPreview />
      <SocialMedia />
      <FAQ />
      <Location />
      <FinalCTA />
    </>
  );
}
