import { motion } from "framer-motion";

interface FinalCtaContent {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const FinalCtaSection = ({ content }: { content: FinalCtaContent }) => {
  const lines = content.title.split("\n");

  return (
    <section className="section-padding bg-[hsl(var(--warm-white))] border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto bg-background p-9 md:p-10 rounded-[2rem] text-center"
      >
        <h2 className="text-2xl font-semibold mb-6 text-foreground leading-relaxed">
          {lines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>
        {content.description.split("\n\n").map((para, i) => (
          <p key={i} className="text-muted-foreground mb-4 leading-relaxed text-sm last:mb-8">
            {para}
          </p>
        ))}
        <a
          href={content.buttonLink}
          className="inline-block w-full bg-accent text-accent-foreground px-8 py-4 rounded-full text-base font-bold transition-colors hover:opacity-90 shadow-lg shadow-accent/15"
        >
          {content.buttonText}
        </a>
      </motion.div>
    </section>
  );
};

export default FinalCtaSection;
