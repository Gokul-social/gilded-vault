import { Shield, Lock, Award } from "lucide-react";

export const TrustFooter = () => {
  return (
    <div className="mt-8 px-5 pb-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
      <div className="flex items-center justify-center gap-8 py-4 border-t border-border/50">
        <div className="flex flex-col items-center gap-1.5 text-muted-foreground">
          <Shield className="w-5 h-5 text-primary/70" />
          <span className="text-[10px] font-medium">BIS Certified</span>
        </div>
        
        <div className="flex flex-col items-center gap-1.5 text-muted-foreground">
          <Lock className="w-5 h-5 text-success/70" />
          <span className="text-[10px] font-medium">Bank-Grade</span>
        </div>
        
        <div className="flex flex-col items-center gap-1.5 text-muted-foreground">
          <Award className="w-5 h-5 text-accent/70" />
          <span className="text-[10px] font-medium">₹50L Insured</span>
        </div>
      </div>
      
      <p className="text-center text-[10px] text-muted-foreground/60 mt-2">
        Secured by Google Cloud • RBI Compliant
      </p>
    </div>
  );
};
