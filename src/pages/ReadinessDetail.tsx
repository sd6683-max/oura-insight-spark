import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Share2, Calendar, ChevronDown } from "lucide-react";
import ContributorRow from "@/components/ContributorRow";
import BottomNav from "@/components/BottomNav";

const ReadinessDetail = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<"redesign" | "current">("redesign");
  const [expanded, setExpanded] = useState(false);

  const contributors = [
    { label: "Resting heart rate", value: "68 bpm", status: "neutral" as const, barProgress: 85 },
    { label: "HRV balance", value: "Pay attention", status: "bad" as const, barProgress: 35 },
    { label: "Body temperature", value: "Optimal", status: "neutral" as const, barProgress: 90 },
    { label: "Recovery index", value: "Pay attention", status: "bad" as const, barProgress: 30 },
    { label: "Sleep", value: "Optimal", status: "good" as const, barProgress: 90 },
  ];

  return (
    <div className="min-h-screen flex justify-center" style={{
      background: "linear-gradient(180deg, hsl(160 30% 10%) 0%, hsl(160 20% 6%) 30%, hsl(0 0% 0%) 60%)"
    }}>
      <div className="w-full max-w-[390px] flex flex-col min-h-screen">
        <div className="flex-1 overflow-y-auto px-5 pt-14 pb-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate("/")} className="text-foreground p-1">
              <ChevronLeft size={24} />
            </button>
            <span className="text-lg font-normal text-foreground tracking-wide">Readiness</span>
            <button className="text-foreground p-1">
              <Share2 size={20} />
            </button>
          </div>

          {/* Date tabs */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <span className="text-sm text-muted-foreground">Yesterday</span>
            <span className="text-sm text-foreground font-medium border-b-2 border-foreground pb-1 flex items-center gap-1.5">
              Today <Calendar size={14} />
            </span>
          </div>

          {/* Score */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-[72px] font-extralight text-foreground tracking-tight leading-none">65</span>
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-destructive">
              PAY ATTENTION
            </span>
          </div>

          {/* Toggle */}
          <div className="flex bg-accent rounded-lg p-0.5 mb-6">
            <button
              onClick={() => setView("current")}
              className={`flex-1 text-xs font-medium py-2 rounded-md transition-all duration-200 ${
                view === "current"
                  ? "bg-surface text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Current Oura
            </button>
            <button
              onClick={() => setView("redesign")}
              className={`flex-1 text-xs font-medium py-2 rounded-md transition-all duration-200 ${
                view === "redesign"
                  ? "bg-surface text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Redesign
            </button>
          </div>

          {/* Content */}
          <div className="relative min-h-[140px] mb-8">
            {/* Current Oura */}
            <div
              className={`transition-opacity duration-300 ${
                view === "current" ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <h2 className="text-[28px] font-light text-foreground mb-5 leading-tight" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Check in with yourself
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                Your Readiness Score suggests you're holding steady, but Symptom Radar has identified major signs of something potentially straining you below the surface.
              </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1.5 text-foreground text-sm font-medium mb-4"
              >
                <span>{expanded ? "Show less" : "Show more"}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-out ${
                  expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[15px] text-muted-foreground leading-relaxed pb-4">
                  This could be the perfect time to focus on rest, recovery, and lighter movement to keep your balance. Small adjustments today can go a long way in supporting tomorrow's energy!
                </p>
              </div>
            </div>

            {/* Redesign */}
            <div
              className={`transition-opacity duration-300 ${
                view === "redesign" ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">
                Recovery needed.
              </h2>

              <p className="text-xs text-muted-foreground mb-3">
                65 · <span className="text-destructive">8 points below your usual</span>
              </p>

              <p className="text-[15px] text-foreground/80 leading-relaxed mb-3">
                Your last 3 nights averaged 5.5 hrs — your body is still catching up.
              </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-gold text-sm font-medium"
              >
                <span>{expanded ? "Show less" : "Show more"}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-out ${
                  expanded ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  HRV dropped to 28ms (low), resting HR elevated at 68 bpm, and sleep efficiency at 74%. Your autonomic nervous system needs a break.
                </p>
              </div>
            </div>
          </div>

          {/* Contributors */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-1">Contributors</h3>
            <div className="divide-y divide-foreground/10">
              {contributors.map((c) => (
                <ContributorRow key={c.label} {...c} />
              ))}
            </div>
          </div>
        </div>

        <BottomNav active="vitals" />
      </div>
    </div>
  );
};

export default ReadinessDetail;
