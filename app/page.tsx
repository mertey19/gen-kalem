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
import { faqItems } from "@/data/faq";
import { faqPageJsonLd, jsonLdScript } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(faqItems))}
      />
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
