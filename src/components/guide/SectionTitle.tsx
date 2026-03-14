import { motion } from "framer-motion";

interface SectionTitleProps {
  children: string;
  inverted?: boolean;
}

const SectionTitle = ({ children, inverted = false }: SectionTitleProps) => {
  const lines = children.split("\n");

  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-2xl md:text-3xl font-semibold leading-relaxed mb-8 text-center ${
        inverted ? "text-[hsl(var(--section-dark-foreground))]" : "text-foreground"
      }`}
    >
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </motion.h2>
  );
};

export default SectionTitle;
