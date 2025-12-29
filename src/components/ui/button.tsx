import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground rounded-xl hover:brightness-110 active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground rounded-xl hover:bg-destructive/90",
        outline:
          "border border-border bg-transparent text-foreground rounded-xl hover:bg-muted hover:border-muted-foreground/30",
        secondary:
          "bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80",
        ghost: "rounded-xl hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "gold-shimmer text-primary-foreground font-semibold rounded-xl glow-gold active:scale-[0.98]",
        premium: "bg-card border border-border/50 text-foreground rounded-xl hover:bg-muted hover:border-primary/30 transition-colors",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-2xl px-8 text-base font-semibold",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
