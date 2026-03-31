import { ChevronRight } from "lucide-react";

interface ContributorRowProps {
  label: string;
  value: string;
  status: "good" | "bad" | "neutral";
  barProgress: number;
}

const ContributorRow = ({ label, value, status, barProgress }: ContributorRowProps) => {
  // Bad items get peach/salmon text, others stay white
  const labelColor = status === "bad" ? "text-destructive" : "text-foreground";
  const valueColor = status === "bad" ? "text-destructive" : "text-foreground/80";
  
  // Bar colors: coral for bad, white/cream for neutral, teal for good
  const barBg = status === "bad" 
    ? "bg-destructive" 
    : status === "good" 
      ? "bg-primary" 
      : "bg-foreground/80";

  return (
    <div className="py-4">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[15px] font-normal ${labelColor}`}>{label}</span>
        <div className="flex items-center gap-2">
          <span className={`text-[15px] ${valueColor}`}>{value}</span>
          <ChevronRight size={16} className="text-foreground/30" />
        </div>
      </div>
      <div className="h-[5px] bg-foreground/15 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${barBg}`}
          style={{ width: `${barProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ContributorRow;
