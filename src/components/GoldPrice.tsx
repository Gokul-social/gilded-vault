import { TrendingUp, Info } from "lucide-react";

export const GoldPrice = () => {
  return (
    <div className="mx-5 mt-4 premium-card p-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gold-shimmer flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">Au</span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Live Gold Rate (24K)</p>
            <p className="text-lg font-semibold text-foreground">₹9,000<span className="text-sm text-muted-foreground font-normal">/gram</span></p>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 text-success">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-semibold">+0.8%</span>
        </div>
      </div>
    </div>
  );
};
