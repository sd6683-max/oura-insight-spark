import { ChevronRight } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  status: string;
  statusColor: "teal" | "coral" | "gold";
  score: number;
  unit?: string;
  min: number;
  max: number;
  current: number;
  gradient?: string;
  onClick?: () => void;
}

const MetricCard = ({ icon, label, status, statusColor, score, unit, min, max, current, gradient, onClick }: MetricCardProps) => {
  const progress = ((current - min) / (max - min)) * 100;
  
  const statusClasses = {
    teal: "text-primary",
    coral: "text-destructive",
    gold: "text-secondary",
  };

  const defaultGradient = "linear-gradient(160deg, hsl(160 35% 14%) 0%, hsl(158 30% 11%) 100%)";

  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl p-5 pb-6 text-left relative overflow-hidden"
      style={{
        background: gradient || defaultGradient,
      }}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/60">
            {icon}
          </div>
          <div>
            <p className="text-base font-normal text-foreground tracking-wide">{label}</p>
            <p className={`text-xs font-semibold tracking-[0.15em] uppercase ${statusClasses[statusColor]}`}>
              {status}
            </p>
          </div>
        </div>
        <ChevronRight size={22} className="text-foreground/40 mt-2" />
      </div>

      <div className="flex items-end justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-6xl font-extralight text-foreground tracking-tight leading-none">{score}</span>
          {unit && <span className="text-xl text-foreground/50 font-light ml-1">{unit}</span>}
        </div>

        <div className="flex-1 ml-8 mb-2">
          <div className="relative h-[4px] bg-foreground/20 rounded-full">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-foreground/70"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 w-4 h-4 rounded-full bg-foreground border-[2px] border-primary"
              style={{ left: `${progress}%`, transform: `translateX(-50%) translateY(-50%)` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[11px] text-foreground/40">{min}</span>
            <span className="text-[11px] text-foreground/40">{max}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MetricCard;
