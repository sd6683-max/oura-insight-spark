import { ChevronRight } from "lucide-react";

interface ContributorRowProps {
  label: string;
  value: string;
  status: "good" | "bad" | "neutral";
  barProgress: number;
}

const ContributorRow = ({ label, value, status, barProgress }: ContributorRowProps) => {
  const colorClass = status === "good" ? "text-primary" : status === "bad" ? "text-destructive" : "text-foreground/70";
  const barColorClass = status === "good" ? "bg-primary" : status === "bad" ? "bg-destructive" : "bg-secondary";

  return (
    <div className="py-3.5">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[15px] text-foreground">{label}</span>
        <div className="flex items-center gap-2">
          <span className={`text-[15px] ${isGood ? "text-primary" : "text-destructive"}`}>
            {value}
          </span>
          <ChevronRight size={16} className="text-foreground/30" />
        </div>
      </div>
      <div className="h-[4px] bg-foreground/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${isGood ? "bg-primary" : "bg-destructive"}`}
          style={{ width: `${barProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ContributorRow;
