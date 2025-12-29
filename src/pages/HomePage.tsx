import { Header } from "@/components/Header";
import { HeroBalance } from "@/components/HeroBalance";
import { GoldPrice } from "@/components/GoldPrice";
import { VaultCollection } from "@/components/VaultCollection";
import { QuickActions } from "@/components/QuickActions";
import { InstantCashBanner } from "@/components/InstantCashBanner";
import { TrustFooter } from "@/components/TrustFooter";

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <Header />
      <HeroBalance />
      <GoldPrice />
      <VaultCollection />
      <QuickActions />
      <InstantCashBanner />
      <TrustFooter />
    </div>
  );
};

export default HomePage;
