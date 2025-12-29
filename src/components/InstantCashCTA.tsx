import { Zap, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export const InstantCashCTA = () => {
  return (
    <div className="mx-6 mt-8 p-5 rounded-2xl gold-gradient relative overflow-hidden animate-fade-up" style={{ animationDelay: "0.4s" }}>
      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer" />
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur flex items-center justify-center">
            <Zap className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-primary-foreground">Get Instant UPI Cash</h3>
            <p className="text-sm text-primary-foreground/80">Up to ₹3,50,000 available now</p>
          </div>
        </div>
        
        <Button 
          variant="glass" 
          size="icon"
          className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border-0"
        >
          <ChevronRight className="w-5 h-5 text-primary-foreground" />
        </Button>
      </div>
    </div>
  );
};
