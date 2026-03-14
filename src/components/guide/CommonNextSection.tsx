import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface CommonNextContent {
  title: string;
  text: string;
}

const CommonNextSection = ({ content }: { content: CommonNextContent }) => (
  <section className="section-padding">
    <div className="section-container text-center">
      <SectionTitle>{content.title}</SectionTitle>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-muted-foreground text-base leading-loose"
      >
        {content.text}
      </motion.p>
    </div>
  </section>
);

export default CommonNextSection;
