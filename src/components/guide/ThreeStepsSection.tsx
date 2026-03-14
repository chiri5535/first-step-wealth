import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface ThreeStepsContent {
  title: string;
  steps: { label: string; description: string }[];
}

const ThreeStepsSection = ({ content }: { content: ThreeStepsContent }) => (
  <section className="section-padding">
    <div className="section-container">
      <SectionTitle>{content.title}</SectionTitle>
      <div className="space-y-10 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-px before:bg-border">
        {content.steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative pl-14"
          >
            <div className="absolute left-0 top-0 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground text-sm z-10">
              0{i + 1}
            </div>
            <p className="text-foreground text-lg font-medium mb-1">{step.label}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeStepsSection;
