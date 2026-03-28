import ScoreRing from "@/components/ScoreRing";
import InsightCard from "@/components/InsightCard";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-[390px] flex flex-col min-h-screen">
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 pt-12 pb-6 space-y-6">
          {/* Greeting */}
          <div>
            <h1 className="text-xl font-medium text-foreground">
              Good morning, Gaby
            </h1>
            <p className="text-sm text-text-secondary mt-0.5">{today}</p>
          </div>

          {/* Score rings */}
          <div className="flex justify-between px-2">
            <ScoreRing score={65} label="Readiness" delta={-8} />
            <ScoreRing score={72} label="Sleep" delta={2} />
            <ScoreRing score={54} label="Activity" delta={-19} />
          </div>

          {/* Persona chip */}
          <div className="flex justify-center">
            <span className="text-[11px] text-text-secondary bg-accent px-3 py-1.5 rounded-full">
              Simulated user: Gaby · Vet student · High-stress week
            </span>
          </div>

          {/* Insight card */}
          <InsightCard />

          {/* Prototype label */}
          <p className="text-[11px] text-text-secondary text-center pb-2">
            Prototype — NYU PM Bootcamp · Session 10
          </p>
        </div>

        {/* Bottom nav */}
        <BottomNav />
      </div>
    </div>
  );
};

export default Index;
