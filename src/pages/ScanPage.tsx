import { useState } from "react";
import { ScanLine, Camera, Check, AlertCircle, Shield, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScanState = "idle" | "scanning" | "success" | "error";

const ScanPage = () => {
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [huidNumber, setHuidNumber] = useState("");

  const handleScan = () => {
    setScanState("scanning");
    setTimeout(() => {
      setScanState("success");
      setHuidNumber("JHJ7823912");
    }, 2500);
  };

  const resetScan = () => {
    setScanState("idle");
    setHuidNumber("");
  };

  return (
    <div className="px-5 pt-6 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="font-heading text-2xl font-bold text-foreground">HUID Verification</h1>
        <p className="text-sm text-muted-foreground mt-1">Scan to verify gold purity instantly</p>
      </div>

      {/* Scanner Area */}
      <div className="relative aspect-square max-w-[300px] mx-auto mb-8">
        <div className={cn(
          "absolute inset-0 rounded-3xl border-2 transition-all duration-500",
          scanState === "idle" && "border-border bg-muted/30",
          scanState === "scanning" && "border-primary bg-primary/5",
          scanState === "success" && "border-success bg-success/5",
          scanState === "error" && "border-destructive bg-destructive/5"
        )}>
          {/* Corner Markers */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg" />

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {scanState === "idle" && (
              <>
                <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-4">
                  <ScanLine className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Position HUID code here</p>
              </>
            )}

            {scanState === "scanning" && (
              <>
                <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                <p className="text-sm text-primary font-medium">Verifying with BIS Database...</p>
                <div className="mt-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Secured by Google Cloud</span>
                </div>
              </>
            )}

            {scanState === "success" && (
              <>
                <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mb-4">
                  <Check className="w-10 h-10 text-success" />
                </div>
                <p className="text-lg font-semibold text-success">Purity Verified!</p>
                <p className="text-sm text-muted-foreground mt-1">22K Gold • 91.6% Pure</p>
              </>
            )}

            {scanState === "error" && (
              <>
                <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mb-4">
                  <AlertCircle className="w-10 h-10 text-destructive" />
                </div>
                <p className="text-lg font-semibold text-destructive">Verification Failed</p>
                <p className="text-sm text-muted-foreground mt-1">Unable to verify HUID</p>
              </>
            )}
          </div>

          {/* Scanning Line Animation */}
          {scanState === "scanning" && (
            <div className="absolute inset-x-8 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
          )}
        </div>
      </div>

      {/* HUID Result Card */}
      {scanState === "success" && (
        <div className="premium-card p-4 mb-6 animate-slide-up">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">HUID Number</span>
            <span className="verified-badge">
              <Check className="w-3 h-3" />
              Verified
            </span>
          </div>
          <p className="text-2xl font-mono font-bold gold-text tracking-wider">{huidNumber}</p>
          <div className="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground">Purity</p>
              <p className="font-semibold text-foreground">22K</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Weight</p>
              <p className="font-semibold text-foreground">24.5g</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Value</p>
              <p className="font-semibold gold-text">₹2.2L</p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        {scanState === "idle" && (
          <Button variant="gold" size="lg" className="w-full" onClick={handleScan}>
            <Camera className="w-5 h-5" />
            Start Scanning
          </Button>
        )}

        {scanState === "success" && (
          <>
            <Button variant="gold" size="lg" className="w-full">
              Add to Vault
            </Button>
            <Button variant="outline" size="lg" className="w-full" onClick={resetScan}>
              Scan Another
            </Button>
          </>
        )}

        {scanState === "error" && (
          <Button variant="outline" size="lg" className="w-full" onClick={resetScan}>
            Try Again
          </Button>
        )}
      </div>

      {/* Info Section */}
      <div className="mt-8 p-4 rounded-2xl bg-muted/50 border border-border">
        <h3 className="font-medium text-foreground mb-2">What is HUID?</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          HUID (Hallmark Unique Identification) is a 6-digit alphanumeric code assigned by BIS 
          to every hallmarked gold item in India, ensuring authenticity and purity.
        </p>
      </div>
    </div>
  );
};

export default ScanPage;
