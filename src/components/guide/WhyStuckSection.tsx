import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface WhyStuckContent {
  title: string;
  items: { title: string; description: string }[];
}

const WhyStuckSection = ({ content }: { content: WhyStuckContent }) => (
  <section className="section-padding bg-[hsl(var(--warm-white))]">
    <div className="section-container">
      <SectionTitle>{content.title}</SectionTitle>
      <div className="space-y-4">
        {content.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-background border border-border"
          >
            <h3 className="font-semibold text-base mb-2 flex items-center gap-3 text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm pl-[18px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyStuckSection;
