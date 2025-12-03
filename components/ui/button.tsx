"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Button({ children, className = "", size = "md" }: ButtonProps) {
  let sizeClasses = "";
  if (size === "sm") sizeClasses = "px-4 py-2 text-sm";
  if (size === "md") sizeClasses = "px-6 py-3 text-base";
  if (size === "lg") sizeClasses = "px-12 py-6 text-lg md:text-xl";

  return (
    <button className={`rounded-2xl shadow-lg font-semibold ${sizeClasses} ${className}`}>
      {children}
    </button>
  );
}
