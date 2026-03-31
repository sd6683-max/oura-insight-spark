import { Sun, Sprout, Heart, Plus } from "lucide-react";

interface BottomNavProps {
  active?: "today" | "vitals" | "myhealth";
}

const BottomNav = ({ active = "vitals" }: BottomNavProps) => {
  const items = [
    { id: "today" as const, icon: Sun, label: "Today" },
    { id: "vitals" as const, icon: Sprout, label: "Vitals" },
    { id: "myhealth" as const, icon: Heart, label: "My Health" },
  ];

  return (
    <div
      className="flex items-center justify-around py-2 px-3 mx-4 mb-3 rounded-full"
      style={{ backgroundColor: "#1c1c1e" }}
    >
      {items.map((item) => (
        <button
          key={item.id}
          className="flex flex-col items-center gap-0.5 px-5 py-1"
        >
          <item.icon
            size={20}
            strokeWidth={1.5}
            style={{
              color: active === item.id ? "#ffffff" : "#666666",
            }}
          />
          <span
            className="text-[10px]"
            style={{
              color: active === item.id ? "#ffffff" : "#666666",
              fontWeight: active === item.id ? 500 : 400,
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
      <button
        className="w-9 h-9 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
      >
        <Plus size={18} strokeWidth={1.5} style={{ color: "#666666" }} />
      </button>
    </div>
  );
};

export default BottomNav;
