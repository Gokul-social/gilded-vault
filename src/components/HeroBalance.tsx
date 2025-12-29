import { TrendingUp, ShieldCheck } from "lucide-react";
import heroNecklace from "@/assets/hero-necklace.jpg";

export const HeroBalance = () => {
  return (
    <div className="relative mx-5 mt-2 overflow-hidden rounded-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroNecklace} 
          alt="Premium gold necklace" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6 pt-32">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-success" />
          <span className="text-xs font-medium text-success">100% Insured & Secured</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-1">Total Vault Value</p>
        <h2 className="font-heading text-5xl font-bold gold-text mb-1">₹4,75,000</h2>
        <p className="text-lg text-foreground/70">52.8 grams of pure gold</p>
        
        <div className="flex items-center gap-3 mt-5">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
            <TrendingUp className="w-3.5 h-3.5 text-success" />
            <span className="text-xs font-semibold text-success">+2.4% this week</span>
          </div>
        </div>
      </div>
    </div>
  );
};
