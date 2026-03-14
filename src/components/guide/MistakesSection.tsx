import { motion } from "framer-motion";

interface MistakesContent {
  title: string;
  text: string;
}

const MistakesSection = ({ content }: { content: MistakesContent }) => {
  const lines = content.title.split("\n");

  return (
    <section className="section-padding bg-[hsl(var(--section-dark))] text-[hsl(var(--section-dark-foreground))]">
      <div className="section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8"
        >
          {lines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="leading-loose opacity-90 text-base"
        >
          {content.text}
        </motion.p>
      </div>
    </section>
  );
};

export default MistakesSection;
