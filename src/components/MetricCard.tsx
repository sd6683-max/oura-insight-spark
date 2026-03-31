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
  onClick?: () => void;
}

const MetricCard = ({ icon, label, status, statusColor, score, unit, min, max, current, onClick }: MetricCardProps) => {
  const progress = ((current - min) / (max - min)) * 100;
  
  const statusClasses = {
    teal: "text-primary",
    coral: "text-destructive",
    gold: "text-secondary",
  };

  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl p-5 text-left relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d2b22 0%, #162f26 50%, #1a3328 100%)",
      }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/60">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{label}</p>
            <p className={`text-xs font-semibold tracking-wider uppercase ${statusClasses[statusColor]}`}>
              {status}
            </p>
          </div>
        </div>
        <ChevronRight size={20} className="text-foreground/40 mt-1" />
      </div>

      <div className="flex items-end justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-light text-foreground tracking-tight">{score}</span>
          {unit && <span className="text-lg text-foreground/60 font-light">{unit}</span>}
        </div>

        <div className="flex-1 ml-8 mb-2">
          <div className="relative h-[5px] bg-foreground/15 rounded-full">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-primary/80"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 w-3.5 h-3.5 rounded-full bg-foreground border-[2.5px] border-foreground shadow-lg"
              style={{ left: `${progress}%`, transform: `translateX(-50%) translateY(-50%)` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[11px] text-foreground/50">{min}</span>
            <span className="text-[11px] text-foreground/50">{max}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MetricCard;
