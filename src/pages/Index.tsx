import { VaultHeader } from "@/components/VaultHeader";
import { VaultBalance } from "@/components/VaultBalance";
import { GoldPriceTicker } from "@/components/GoldPriceTicker";
import { JewelryCarousel } from "@/components/JewelryCarousel";
import { ActionHub } from "@/components/ActionHub";
import { InstantCashCTA } from "@/components/InstantCashCTA";
import { TrustBadges } from "@/components/TrustBadges";

const Index = () => {
  return (
    <div className="min-h-screen bg-background mandala-pattern">
      <div className="max-w-md mx-auto pb-safe">
        <VaultHeader />
        <VaultBalance />
        <GoldPriceTicker />
        <JewelryCarousel />
        <ActionHub />
        <InstantCashCTA />
        <TrustBadges />
      </div>
    </div>
  );
};

export default Index;
