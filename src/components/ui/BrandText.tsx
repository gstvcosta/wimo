import React from "react";
import { cn } from "@/lib/utils";

interface BrandTextProps {
  name?: string;
  className?: string;
}

export const BrandText: React.FC<BrandTextProps> = ({ name = "", className }) => {
  const isWivio = name.trim().toLowerCase() === "wivio";
  const baseClass = isWivio ? "text-[#004461]" : "dv-brand-text";
  return <span className={cn(baseClass, className)}>{name}</span>;
};

export default BrandText;