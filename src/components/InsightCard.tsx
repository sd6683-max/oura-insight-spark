import { useState } from "react";
import { ChevronDown } from "lucide-react";

const InsightCard = () => {
  const [view, setView] = useState<"redesign" | "current">("redesign");
  const [expanded, setExpanded] = useState(false);

  const factors = [
    { label: "HRV", value: "28ms", note: "low" },
    { label: "Resting HR", value: "68 bpm", note: "elevated" },
    { label: "Sleep efficiency", value: "74%", note: "below average" },
  ];

  return (
    <div className="bg-card rounded-2xl p-5 space-y-4">
      {/* Toggle */}
      <div className="flex bg-accent rounded-lg p-0.5">
        <button
          onClick={() => setView("current")}
          className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-all duration-200 ${
            view === "current"
              ? "bg-surface text-foreground shadow-sm"
              : "text-text-secondary"
          }`}
        >
          Current Oura
        </button>
        <button
          onClick={() => setView("redesign")}
          className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-all duration-200 ${
            view === "redesign"
              ? "bg-surface text-foreground shadow-sm"
              : "text-text-secondary"
          }`}
        >
          Redesign
        </button>
      </div>

      {/* Content */}
      <div className="relative min-h-[120px]">
        {/* Current Oura */}
        <div
          className={`transition-opacity duration-300 ${
            view === "current" ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          <p className="text-sm text-text-secondary leading-relaxed">
            Your readiness score is lower than usual today. Focus on recovery and
            listen to your body. Avoid high-intensity activities and prioritize
            rest.
          </p>
        </div>

        {/* Redesign */}
        <div
          className={`transition-opacity duration-300 ${
            view === "redesign" ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Recovery needed.
          </h2>

          <p className="text-xs text-text-secondary mt-1.5">
            65 · <span className="text-coral">8 points below your usual</span>
          </p>

          <p className="text-sm text-foreground/80 mt-3 leading-relaxed">
            Your last 3 nights averaged 5.5 hrs — your body is still catching up.
          </p>

          {/* Show more */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 mt-3 text-primary text-sm font-medium group"
          >
            <span>{expanded ? "Show less" : "Show more"}</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          {/* Expandable factors */}
          <div
            className={`overflow-hidden transition-all duration-400 ease-out ${
              expanded ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="space-y-2.5 pt-3 border-t border-accent">
              {factors.map((f) => (
                <div key={f.label} className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">{f.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{f.value}</span>
                    <span className="text-[10px] text-coral bg-coral/10 px-1.5 py-0.5 rounded-full">
                      {f.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
