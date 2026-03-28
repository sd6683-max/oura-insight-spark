import { useNavigate } from "react-router-dom";
import { Flame, Moon, Zap, Calendar } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-[390px] flex flex-col min-h-screen">
        <div className="flex-1 overflow-y-auto px-4 pt-14 pb-4 space-y-3">
          {/* Header */}
          <h1 className="text-lg font-medium text-foreground text-center">Vitals</h1>

          {/* Date tabs */}
          <div className="flex items-center justify-center gap-8 pb-2">
            <span className="text-sm text-text-secondary">Yesterday</span>
            <span className="text-sm text-foreground font-medium border-b-2 border-foreground pb-1 flex items-center gap-1.5">
              Today <Calendar size={14} />
            </span>
          </div>

          {/* Metric cards */}
          <MetricCard
            icon={<Zap size={18} />}
            label="Readiness"
            status="PAY ATTENTION"
            statusColor="coral"
            score={65}
            min={48}
            max={78}
            current={65}
            onClick={() => navigate("/readiness")}
          />

          <MetricCard
            icon={<Moon size={18} />}
            label="Sleep"
            status="GOOD"
            statusColor="teal"
            score={72}
            min={53}
            max={85}
            current={72}
          />

          <MetricCard
            icon={<Flame size={18} />}
            label="Activity goal"
            status="MAKING PROGRESS"
            statusColor="gold"
            score={54}
            unit="%"
            min={0}
            max={100}
            current={54}
          />
        </div>

        <BottomNav active="vitals" />
      </div>
    </div>
  );
};

export default Index;
