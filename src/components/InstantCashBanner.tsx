import { useNavigate } from "react-router-dom";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const InstantCashBanner = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="mx-5 mt-8 p-5 rounded-2xl gold-shimmer relative overflow-hidden cursor-pointer"
      onClick={() => navigate("/wallet")}
    >
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground">Get Instant Cash</h3>
            <p className="text-sm text-primary-foreground/80">Up to ₹3,50,000 available</p>
          </div>
        </div>
        
        <Button 
          size="icon"
          className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border-0 rounded-xl"
        >
          <ArrowRight className="w-5 h-5 text-primary-foreground" />
        </Button>
      </div>
    </div>
  );
};
