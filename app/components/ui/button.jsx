import React from "react";

const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? React.cloneElement(children, { ref, ...props }) : "button";
    
    // Base styles
    let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    // Size variants
    const sizeClasses = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 rounded-md px-3 text-xs",
      lg: "h-11 rounded-md px-8 text-base",
      icon: "h-10 w-10"
    };
    
    // Style variants
    const variantClasses = {
      default: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200",
      destructive: "bg-red-500 text-white hover:bg-red-600 dark:bg-red-900 dark:hover:bg-red-800",
      outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700",
      ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
      link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
    };
    
    const classes = [
      baseStyles,
      sizeClasses[size] || sizeClasses.default,
      variantClasses[variant] || variantClasses.default,
      className
    ].join(" ");
    
    if (asChild) {
      return Comp;
    }
    
    return (
      <Comp className={classes} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };