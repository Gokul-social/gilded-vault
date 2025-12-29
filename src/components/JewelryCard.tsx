import { BadgeCheck, Shield } from "lucide-react";

interface JewelryCardProps {
  name: string;
  weight: string;
  value: string;
  huid: string;
  purity: string;
  image: string;
  index: number;
}

export const JewelryCard = ({ name, weight, value, huid, purity, image, index }: JewelryCardProps) => {
  return (
    <div 
      className="min-w-[280px] glass-card p-4 snap-start animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-40 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-primary/5">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover animate-float"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-success/90 text-success-foreground text-xs font-medium">
          <BadgeCheck className="w-3 h-3" />
          HUID Verified
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{weight} • {purity}</p>
          </div>
          <p className="font-semibold gold-text">{value}</p>
        </div>
        
        <div className="flex items-center gap-2 pt-2 border-t border-border/50">
          <Shield className="w-4 h-4 text-primary" />
          <p className="text-xs text-muted-foreground font-mono">HUID: {huid}</p>
        </div>
      </div>
    </div>
  );
};
