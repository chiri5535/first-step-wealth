import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface IntroContent {
  title: string;
  text: string;
}

const IntroSection = ({ content }: { content: IntroContent }) => (
  <section id="intro" className="section-padding">
    <div className="section-container text-center">
      <SectionTitle>{content.title}</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {content.text.split("\n\n").map((para, i) => (
          <p key={i} className="text-muted-foreground text-base leading-loose mb-4 last:mb-0">
            {para}
          </p>
        ))}
      </motion.div>
    </div>
  </section>
);

export default IntroSection;
