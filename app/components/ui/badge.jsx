import React from "react";

const Badge = React.forwardRef(({ className = "", variant = "default", children, ...props }, ref) => {
  // Base styles
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Variants
  const variantClasses = {
    default: "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200",
    secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700",
    destructive: "border-transparent bg-red-500 text-slate-50 hover:bg-red-600 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-800",
    outline: "text-slate-950 dark:text-slate-50"
  };
  
  const classes = [
    baseStyles,
    variantClasses[variant] || variantClasses.default,
    className
  ].join(" ");
  
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

Badge.displayName = "Badge";

export { Badge };