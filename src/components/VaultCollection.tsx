import { VaultItem } from "./VaultItem";
import { ChevronRight } from "lucide-react";
import bangles from "@/assets/bangles.jpg";
import earrings from "@/assets/earrings.jpg";
import choker from "@/assets/choker.jpg";

const vaultItems = [
  {
    name: "Temple Bangles",
    weight: "24.5g",
    value: "₹2,20,500",
    huid: "JHJ7823912",
    purity: "22K",
    image: bangles
  },
  {
    name: "Pearl Jhumkas",
    weight: "18.2g",
    value: "₹1,63,800",
    huid: "BGL4521890",
    purity: "22K",
    image: earrings
  },
  {
    name: "Bridal Choker",
    weight: "10.1g",
    value: "₹90,900",
    huid: "ERG9012345",
    purity: "22K",
    image: choker
  }
];

export const VaultCollection = () => {
  return (
    <div className="mt-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between px-5 mb-4">
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground">Your Collection</h3>
          <p className="text-xs text-muted-foreground mt-0.5">3 items securely stored</p>
        </div>
        <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline">
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex gap-3 px-5 pb-2 overflow-x-auto scrollbar-hide">
        {vaultItems.map((item, index) => (
          <VaultItem key={item.huid} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};
