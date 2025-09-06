import { HTMLAttributes, forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      // Display variants
      "display-1": "text-display-1 font-bold",
      "display-2": "text-display-2 font-bold",
      "display-3": "text-display-3 font-bold",
      // Header variants
      "h1": "text-header-10 font-bold",
      "h2": "text-header-8 font-bold",
      "h3": "text-header-6 font-bold",
      "h4": "text-header-4 font-bold",
      "h5": "text-header-2 font-bold",
      "h6": "text-header-1 font-medium",
      // Body variants
      "body-lg": "text-body-12 font-normal",
      "body": "text-body-6 font-normal",
      "body-sm": "text-body-4 font-normal",
      "body-xs": "text-body-2 font-normal",
      // Special
      "lead": "text-body-10 font-medium text-neutral-200",
      "caption": "text-body-3 font-medium text-neutral-300",
    },
    textColor: {
      default: "",
      primary: "text-primary",
      gradient: "text-gradient",
      muted: "text-neutral-300",
      light: "text-neutral-100",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    textColor: "default",
    align: "left",
  },
})

export interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, textColor, align, as: Component = "p", ...props }, ref) => {
    return (
      <Component
        className={cn(typographyVariants({ variant, textColor, align, className }))}
        ref={ref as any}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }