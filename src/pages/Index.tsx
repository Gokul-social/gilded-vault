import { Header } from "@/components/Header";
import { HeroBalance } from "@/components/HeroBalance";
import { GoldPrice } from "@/components/GoldPrice";
import { VaultCollection } from "@/components/VaultCollection";
import { QuickActions } from "@/components/QuickActions";
import { InstantCashBanner } from "@/components/InstantCashBanner";
import { TrustFooter } from "@/components/TrustFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto pb-safe">
        <Header />
        <HeroBalance />
        <GoldPrice />
        <VaultCollection />
        <QuickActions />
        <InstantCashBanner />
        <TrustFooter />
      </div>
    </div>
  );
};

export default Index;
