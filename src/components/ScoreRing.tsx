import { useEffect, useState, useRef } from "react";

interface ScoreRingProps {
  score: number;
  label: string;
  delta: number;
  size?: number;
}

const ScoreRing = ({ score, label, delta, size = 96 }: ScoreRingProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (animatedScore / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        if (current >= score) {
          setAnimatedScore(score);
          clearInterval(interval);
        } else {
          setAnimatedScore(current);
        }
      }, 12);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(timer);
  }, [score]);

  const isNegative = delta < 0;
  const deltaColor = isNegative ? "text-coral" : "text-teal";
  const deltaText = `${isNegative ? "" : "+"}${delta} vs usual`;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--surface))"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className="transition-all duration-100"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold text-foreground tabular-nums">
            {animatedScore}
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-text-secondary tracking-wide">
        {label}
      </span>
      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent ${deltaColor}`}>
        {deltaText}
      </span>
    </div>
  );
};

export default ScoreRing;
