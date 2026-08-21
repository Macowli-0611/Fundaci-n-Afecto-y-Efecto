import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

const variantStyles = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg",
  secondary:
    "bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold shadow-md hover:shadow-lg",
  ghost: "bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-300",
};

const sizeStyles = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-block rounded-lg transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
