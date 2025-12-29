import { Plus, Banknote, RefreshCw, PiggyBank } from "lucide-react";

const actions = [
  { icon: Plus, label: "Deposit", sublabel: "Add Gold" },
  { icon: Banknote, label: "Get Cash", sublabel: "Instant UPI" },
  { icon: RefreshCw, label: "Convert", sublabel: "Gold ↔ INR" },
  { icon: PiggyBank, label: "Grow", sublabel: "Earn 5% APY" },
];

export const QuickActions = () => {
  return (
    <div className="mt-8 px-5 animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-4 gap-2">
        {actions.map((action) => (
          <button 
            key={action.label}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl premium-card hover:border-primary/30 transition-all duration-300 active:scale-95 group"
          >
            <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <action.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-center">
              <span className="text-xs font-medium text-foreground block">{action.label}</span>
              <span className="text-[10px] text-muted-foreground">{action.sublabel}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
