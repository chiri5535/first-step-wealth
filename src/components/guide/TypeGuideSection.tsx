import { AnimatePresence, motion } from "framer-motion";

interface TypeData {
  id: string;
  name: string;
  desc: string;
  reason: string;
  bad: string;
  steps: string[];
}

interface TypeGuideSectionProps {
  types: TypeData[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const TypeGuideSection = ({ types, activeIndex, onSelect }: TypeGuideSectionProps) => {
  const active = types[activeIndex];

  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-muted text-muted-foreground text-xs tracking-wider rounded-full mb-4">
            TYPE GUIDE
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed text-foreground">
            あなたのタイプ別
            <br />
            始め方ガイド
          </h2>
        </div>

        {/* Type selector grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-8">
          {types.map((type, i) => (
            <button
              key={type.id}
              onClick={() => onSelect(i)}
              className={`p-4 rounded-xl text-sm font-medium transition-all duration-300 border text-left ${
                activeIndex === i
                  ? "bg-[hsl(var(--warm-white))] border-border shadow-sm text-foreground"
                  : "bg-muted/50 border-transparent text-muted-foreground"
              }`}
            >
              <div className="text-[10px] uppercase tracking-widest opacity-50 mb-1">
                Type {type.id}
              </div>
              {type.name}
            </button>
          ))}
        </div>

        {/* Active type card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="bg-[hsl(var(--warm-white))] p-7 md:p-8 rounded-3xl shadow-sm border border-border"
          >
            <div className="mb-7">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {active.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {active.desc}
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  止まりやすい理由
                </h4>
                <p className="text-foreground text-sm leading-relaxed">
                  {active.reason}
                </p>
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-destructive/70 mb-2">
                  やらない方がいいこと
                </h4>
                <p className="text-foreground text-sm leading-relaxed">
                  {active.bad}
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  最初の3ステップ
                </h4>
                <ul className="space-y-3">
                  {active.steps.map((s, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-muted-foreground/50 mr-3 italic">
                        {i + 1}.
                      </span>
                      <span className="text-foreground font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TypeGuideSection;
