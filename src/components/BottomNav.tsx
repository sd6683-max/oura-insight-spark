import { Home, Compass, User } from "lucide-react";

const BottomNav = () => (
  <div className="flex items-center justify-around py-3 border-t border-accent bg-background">
    <button className="p-2 text-primary">
      <Home size={22} />
    </button>
    <button className="p-2 text-text-secondary">
      <Compass size={22} />
    </button>
    <button className="p-2 text-text-secondary">
      <User size={22} />
    </button>
  </div>
);

export default BottomNav;
