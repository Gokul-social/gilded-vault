import { Shield, Bell } from "lucide-react";
import { Button } from "./ui/button";

export const VaultHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shadow-gold">
          <Shield className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-xl font-semibold gold-text">Vault-Tokens</h1>
          <p className="text-xs text-muted-foreground">Your Digital Gold Locker</p>
        </div>
      </div>
      
      <Button variant="glass" size="icon" className="relative">
        <Bell className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background" />
      </Button>
    </header>
  );
};
