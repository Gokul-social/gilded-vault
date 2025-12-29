import { BadgeCheck } from "lucide-react";

interface VaultItemProps {
  name: string;
  weight: string;
  value: string;
  huid: string;
  purity: string;
  image: string;
  index: number;
}

export const VaultItem = ({ name, weight, value, huid, purity, image, index }: VaultItemProps) => {
  return (
    <div 
      className="min-w-[200px] flex-shrink-0 premium-card overflow-hidden animate-scale-in"
      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute top-3 right-3 verified-badge">
          <BadgeCheck className="w-3 h-3" />
          <span>HUID</span>
        </div>
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-heading text-base font-semibold text-foreground truncate">{name}</h3>
            <p className="text-xs text-muted-foreground">{weight} • {purity}</p>
          </div>
        </div>
        <p className="text-lg font-semibold gold-text">{value}</p>
        <p className="text-[10px] text-muted-foreground font-mono tracking-wider">#{huid}</p>
      </div>
    </div>
  );
};
