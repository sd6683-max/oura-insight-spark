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
    <div className="flex items-center justify-around py-2.5 px-4 mx-4 mb-4 rounded-full bg-nav-bg">
      {items.map((item) => (
        <button
          key={item.id}
          className={`flex flex-col items-center gap-0.5 px-4 py-1 ${
            active === item.id ? "text-foreground" : "text-text-secondary"
          }`}
        >
          <item.icon size={20} />
          <span className="text-[10px]">{item.label}</span>
        </button>
      ))}
      <button className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/60">
        <Plus size={20} />
      </button>
    </div>
  );
};

export default BottomNav;
