import { ChevronRight, Shield, Bell, HelpCircle, FileText, LogOut, Settings, User, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const menuItems = [
  { icon: User, label: "Personal Details", description: "Name, email, phone" },
  { icon: CreditCard, label: "Bank Accounts", description: "Linked UPI & accounts" },
  { icon: Shield, label: "Security", description: "PIN, biometrics" },
  { icon: Bell, label: "Notifications", description: "Alerts & reminders" },
  { icon: FileText, label: "Documents", description: "KYC & statements" },
  { icon: HelpCircle, label: "Help & Support", description: "FAQs & contact" },
];

const ProfilePage = () => {
  return (
    <div className="px-5 pt-6 animate-fade-in">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-2xl gold-shimmer flex items-center justify-center text-2xl font-bold text-primary-foreground">
          R
        </div>
        <div className="flex-1">
          <h1 className="font-heading text-xl font-bold text-foreground">Rahul Sharma</h1>
          <p className="text-sm text-muted-foreground">+91 98765 43210</p>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-2 h-2 rounded-full bg-success" />
            <span className="text-xs text-success font-medium">KYC Verified</span>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* Vault Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="premium-card p-4 text-center">
          <p className="text-2xl font-bold gold-text">52.8g</p>
          <p className="text-xs text-muted-foreground mt-1">Total Gold</p>
        </div>
        <div className="premium-card p-4 text-center">
          <p className="text-2xl font-bold text-foreground">3</p>
          <p className="text-xs text-muted-foreground mt-1">Items</p>
        </div>
        <div className="premium-card p-4 text-center">
          <p className="text-2xl font-bold text-success">+12%</p>
          <p className="text-xs text-muted-foreground mt-1">Returns</p>
        </div>
      </div>

      {/* Premium Upgrade Banner */}
      <div className="premium-card p-4 mb-6 border-primary/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary">PRO</span>
              <span className="font-medium text-foreground">Upgrade to Premium</span>
            </div>
            <p className="text-xs text-muted-foreground">Get 5% APY on gold savings</p>
          </div>
          <ChevronRight className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              <item.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-foreground text-sm">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-muted/30 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground">Dark Mode</span>
        </div>
        <Switch defaultChecked />
      </div>

      {/* Logout */}
      <Button variant="ghost" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10">
        <LogOut className="w-5 h-5 mr-2" />
        Sign Out
      </Button>

      {/* App Version */}
      <p className="text-center text-xs text-muted-foreground mt-6">
        Vault v1.0.0 • Made in India 🇮🇳
      </p>
    </div>
  );
};

export default ProfilePage;
