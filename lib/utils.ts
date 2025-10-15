import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseINRToNumber(input: string): number {
  // Handles formats like "₹ 25,500.00", "₹12,500", "12,500", "₹ 3,200"
  const cleaned = input.replace(/[^\d.]/g, "")
  const value = Number(cleaned.replace(/,/g, ""))
  return Number.isFinite(value) ? value : 0
}

export function formatINR(value: number): string {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value)
  } catch {
    return `₹ ${value}`
  }
}
