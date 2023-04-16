import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  variant?: "red";
  children: React.ReactNode;
  extraClasses?: string;
}

const Button = ({
  variant,
  children,
  extraClasses,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const getButtonClass = () => {
    switch (variant) {
      case "red":
        return "inline-flex items-center justify-center px-5 py-2.5 bg-white border rounded-full border-red-900 text-sm font-medium text-red-900 hover:bg-red-200 transition-all duration-300";
      default:
        return "inline-flex items-center justify-center px-5 py-2.5 bg-slate-50 border rounded-full border-2 border-slate-900 text-sm font-medium text-slate-900 hover:bg-slate-200 transition-all duration-300";
    }
  };

  return (
    <button
      type="button"
      className={getButtonClass() + " " + extraClasses}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
