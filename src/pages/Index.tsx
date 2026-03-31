import { useNavigate } from "react-router-dom";
import { Flame, Moon, Zap, Calendar } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center" style={{ backgroundColor: "#000000" }}>
      <div className="w-full max-w-[390px] flex flex-col min-h-screen">
        <div className="flex-1 overflow-y-auto px-3 pt-12 pb-3 space-y-2.5">
          {/* Header */}
          <h1
            className="text-center mb-1"
            style={{ fontSize: 17, fontWeight: 400, color: "#ffffff", letterSpacing: "0.02em" }}
          >
            Vitals
          </h1>

          {/* Date tabs */}
          <div className="flex items-center justify-center gap-7 pb-1">
            <span style={{ fontSize: 13, color: "#666666" }}>Yesterday</span>
            <span
              className="flex items-center gap-1.5 pb-0.5"
              style={{
                fontSize: 13,
                color: "#ffffff",
                fontWeight: 500,
                borderBottom: "2px solid #ffffff",
                paddingBottom: 3,
              }}
            >
              Today <Calendar size={13} strokeWidth={1.5} />
            </span>
          </div>

          {/* Metric cards */}
          <MetricCard
            icon={<Zap size={15} strokeWidth={1.5} />}
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
            icon={<Moon size={15} strokeWidth={1.5} />}
            label="Sleep"
            status="GOOD"
            statusColor="teal"
            score={72}
            min={53}
            max={85}
            current={72}
          />

          <MetricCard
            icon={<Flame size={15} strokeWidth={1.5} />}
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
