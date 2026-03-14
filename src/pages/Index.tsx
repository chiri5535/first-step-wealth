import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CONTENT, SEO } from "@/lib/content";
import HeroSection from "@/components/guide/HeroSection";
import IntroSection from "@/components/guide/IntroSection";
import WhyStuckSection from "@/components/guide/WhyStuckSection";
import ThreeStepsSection from "@/components/guide/ThreeStepsSection";
import MistakesSection from "@/components/guide/MistakesSection";
import TypeGuideSection from "@/components/guide/TypeGuideSection";
import CommonNextSection from "@/components/guide/CommonNextSection";
import FinalCtaSection from "@/components/guide/FinalCtaSection";
import GuideFooter from "@/components/guide/GuideFooter";

const Index = () => {
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:title" content={SEO.ogTitle} />
        <meta property="og:description" content={SEO.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={SEO.ogImage} />
        <link rel="canonical" href={SEO.canonical} />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <HeroSection content={CONTENT.hero} />
        <IntroSection content={CONTENT.intro} />
        <WhyStuckSection content={CONTENT.whyStuck} />
        <ThreeStepsSection content={CONTENT.threeSteps} />
        <MistakesSection content={CONTENT.mistakes} />
        <TypeGuideSection
          types={CONTENT.types}
          activeIndex={activeTypeIndex}
          onSelect={setActiveTypeIndex}
        />
        <CommonNextSection content={CONTENT.commonNext} />
        <FinalCtaSection content={CONTENT.finalCta} />
        <GuideFooter />
      </div>
    </>
  );
};

export default Index;
