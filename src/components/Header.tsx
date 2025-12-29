import { Bell, User } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gold-shimmer flex items-center justify-center">
          <span className="text-lg font-bold text-primary-foreground">V</span>
        </div>
        <div>
          <h1 className="font-heading text-xl font-semibold text-foreground tracking-wide">Vault</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-success rounded-full" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
};
