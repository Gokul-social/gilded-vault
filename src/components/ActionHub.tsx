import { Plus, Banknote, ArrowLeftRight, PiggyBank } from "lucide-react";

const actions = [
  { icon: Plus, label: "Deposit Gold", color: "from-primary to-accent" },
  { icon: Banknote, label: "Instant Loan", color: "from-success to-emerald-400" },
  { icon: ArrowLeftRight, label: "Swap to INR", color: "from-secondary to-indigo-500" },
  { icon: PiggyBank, label: "Micro-Savings", color: "from-pink-500 to-rose-400" },
];

export const ActionHub = () => {
  return (
    <div className="mt-8 px-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <button 
            key={action.label}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl glass-card hover:bg-white/10 transition-all duration-300 active:scale-95 group"
            style={{ animationDelay: `${0.4 + index * 0.05}s` }}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-center text-muted-foreground font-medium leading-tight">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
