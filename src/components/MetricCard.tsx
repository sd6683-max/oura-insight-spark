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

  const statusColors = {
    teal: "#4caf8a",
    coral: "#d4715e",
    gold: "#a8a060",
  };

  const dotColor = statusColors[statusColor];

  return (
    <button
      onClick={onClick}
      className="w-full rounded-[20px] px-5 pt-4 pb-5 text-left relative overflow-hidden"
      style={{
        background: "linear-gradient(170deg, #142c23 0%, #0c1c16 100%)",
      }}
    >
      {/* Top row: icon + label + chevron */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
          >
            <span className="text-white/50" style={{ fontSize: 15 }}>{icon}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-normal text-white/90 leading-tight tracking-wide">{label}</span>
            <span
              className="text-[10px] font-semibold tracking-[0.18em] uppercase leading-tight mt-0.5"
              style={{ color: dotColor }}
            >
              {status}
            </span>
          </div>
        </div>
        <ChevronRight size={18} className="text-white/25" />
      </div>

      {/* Bottom row: score + progress bar */}
      <div className="flex items-end justify-between">
        <div className="flex items-baseline">
          <span
            className="leading-none text-white"
            style={{ fontSize: 56, fontWeight: 200, letterSpacing: "-0.03em" }}
          >
            {score}
          </span>
          {unit && (
            <span className="text-white/40 ml-0.5" style={{ fontSize: 20, fontWeight: 300 }}>
              {unit}
            </span>
          )}
        </div>

        <div className="flex-1 ml-6 mb-2.5" style={{ maxWidth: 160 }}>
          <div className="relative h-[3px] rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
            {/* Filled track */}
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: "rgba(255,255,255,0.25)",
              }}
            />
            {/* Indicator dot */}
            <div
              className="absolute top-1/2 rounded-full"
              style={{
                left: `${progress}%`,
                transform: "translateX(-50%) translateY(-50%)",
                width: 12,
                height: 12,
                backgroundColor: "#fff",
                border: `2.5px solid ${dotColor}`,
              }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[10px] text-white/30">{min}</span>
            <span className="text-[10px] text-white/30">{max}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MetricCard;
