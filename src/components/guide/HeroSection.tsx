import { motion } from "framer-motion";

interface HeroContent {
  bgImage: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

const HeroSection = ({ content }: { content: HeroContent }) => {
  const lines = content.title.split("\n");

  const scrollToIntro = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[92svh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${content.bgImage})` }}
      />
      <div className="absolute inset-0 bg-[hsl(var(--greige)/.45)] backdrop-blur-[2px]" />
      <div className="relative z-10 px-6 text-center max-w-lg">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-semibold leading-relaxed text-foreground mb-6"
        >
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-muted-foreground mb-10 leading-relaxed text-base"
        >
          {content.subtitle}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToIntro}
          className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-medium shadow-lg shadow-primary/10 hover:opacity-90 transition-opacity"
        >
          {content.ctaText}
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
