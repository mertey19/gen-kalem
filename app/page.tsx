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
import { WhyUs } from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickContact />
      <WhyUs />
      <Programs />
      <Process />
      <About />
      <Gallery />
      <BlogPreview />
      <SocialMedia />
      <FAQ />
      <Location />
      <FinalCTA />
    </>
  );
}
