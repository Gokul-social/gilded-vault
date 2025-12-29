import { TrendingUp } from "lucide-react";

export const GoldPriceTicker = () => {
  return (
    <div className="mx-6 mt-4 flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border/50 animate-fade-up" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
          <span className="text-sm font-bold text-primary-foreground">Au</span>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Live Gold Price (24K)</p>
          <p className="font-semibold text-foreground">₹9,000 <span className="text-sm text-muted-foreground">/gram</span></p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-success text-sm font-medium">
        <TrendingUp className="w-4 h-4" />
        +0.8% today
      </div>
    </div>
  );
};
