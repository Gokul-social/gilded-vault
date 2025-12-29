import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, CreditCard, TrendingUp, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const transactions = [
  { id: 1, type: "credit", title: "Gold Deposited", amount: "+5.2g", value: "₹46,800", date: "Today, 2:30 PM" },
  { id: 2, type: "debit", title: "UPI Payment", amount: "-0.5g", value: "₹4,500", date: "Yesterday" },
  { id: 3, type: "credit", title: "Interest Earned", amount: "+0.02g", value: "₹180", date: "Dec 27" },
  { id: 4, type: "debit", title: "Loan Repayment", amount: "-2.0g", value: "₹18,000", date: "Dec 25" },
];

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState<"gold" | "cash">("gold");

  return (
    <div className="px-5 pt-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Gold Wallet</h1>
          <p className="text-sm text-muted-foreground">Spend gold like cash</p>
        </div>
        <Button variant="premium" size="icon">
          <TrendingUp className="w-5 h-5" />
        </Button>
      </div>

      {/* Balance Card */}
      <div className="premium-card p-5 mb-6">
        {/* Tab Switcher */}
        <div className="flex gap-2 p-1 rounded-xl bg-muted mb-5">
          <button
            onClick={() => setActiveTab("gold")}
            className={cn(
              "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all",
              activeTab === "gold" 
                ? "bg-card text-foreground shadow-sm" 
                : "text-muted-foreground"
            )}
          >
            Gold Balance
          </button>
          <button
            onClick={() => setActiveTab("cash")}
            className={cn(
              "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all",
              activeTab === "cash" 
                ? "bg-card text-foreground shadow-sm" 
                : "text-muted-foreground"
            )}
          >
            Cash Value
          </button>
        </div>

        {/* Balance Display */}
        <div className="text-center">
          {activeTab === "gold" ? (
            <>
              <p className="text-sm text-muted-foreground mb-1">Available Gold</p>
              <h2 className="font-heading text-4xl font-bold gold-text">52.8g</h2>
              <p className="text-muted-foreground mt-1">≈ ₹4,75,200</p>
            </>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-1">Cash Equivalent</p>
              <h2 className="font-heading text-4xl font-bold text-foreground">₹4,75,200</h2>
              <p className="text-muted-foreground mt-1">≈ 52.8 grams gold</p>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <Button variant="outline" className="flex flex-col gap-1 h-auto py-3">
            <ArrowDownLeft className="w-5 h-5 text-success" />
            <span className="text-xs">Deposit</span>
          </Button>
          <Button variant="outline" className="flex flex-col gap-1 h-auto py-3">
            <ArrowUpRight className="w-5 h-5 text-primary" />
            <span className="text-xs">Withdraw</span>
          </Button>
          <Button variant="outline" className="flex flex-col gap-1 h-auto py-3">
            <Send className="w-5 h-5 text-accent" />
            <span className="text-xs">Send</span>
          </Button>
        </div>
      </div>

      {/* Pay via UPI */}
      <div className="premium-card p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Pay via UPI</p>
              <p className="text-xs text-muted-foreground">Use gold for any payment</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Transactions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-lg font-semibold text-foreground">Recent Activity</h3>
          <button className="text-sm text-primary font-medium">See All</button>
        </div>

        <div className="space-y-3">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  tx.type === "credit" ? "bg-success/10" : "bg-muted"
                )}>
                  {tx.type === "credit" ? (
                    <ArrowDownLeft className="w-5 h-5 text-success" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{tx.title}</p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={cn(
                  "font-semibold text-sm",
                  tx.type === "credit" ? "text-success" : "text-foreground"
                )}>{tx.amount}</p>
                <p className="text-xs text-muted-foreground">{tx.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
