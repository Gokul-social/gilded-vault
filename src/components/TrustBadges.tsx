import { Shield, Lock, Award } from "lucide-react";

export const TrustBadges = () => {
  return (
    <div className="mt-8 px-6 pb-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
      <div className="flex items-center justify-center gap-6 py-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xs font-medium">BIS Certified</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
            <Lock className="w-4 h-4 text-success" />
          </div>
          <span className="text-xs font-medium">Bank-Grade Security</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
            <Award className="w-4 h-4 text-accent" />
          </div>
          <span className="text-xs font-medium">Insured</span>
        </div>
      </div>
    </div>
  );
};
