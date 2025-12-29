import { TrendingUp, Info } from "lucide-react";

export const VaultBalance = () => {
  return (
    <div className="mx-6 p-6 glass-card animate-fade-up">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Total Vault Value</p>
          <h2 className="font-display text-4xl font-bold gold-text">₹4,75,000</h2>
          <p className="text-lg text-foreground/80 mt-1">52.8 GoldGrams</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/20 text-success text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          +2.4%
        </div>
      </div>
      
      <div className="flex items-center gap-2 pt-4 border-t border-border/50">
        <Info className="w-4 h-4 text-muted-foreground" />
        <p className="text-xs text-muted-foreground">
          Your jewelry is safely stored • Insurance covered up to ₹50L
        </p>
      </div>
    </div>
  );
};
