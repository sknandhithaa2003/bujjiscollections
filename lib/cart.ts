export type CartItem = {
  id: string
  name: string
  price: number // in paise or rupees? We'll store in rupees as number
  image: string
  href?: string
  variant?: string
  qty: number
}

export type CartState = {
  items: CartItem[]
}

export type CartAction =
  | { type: "ADD"; payload: Omit<CartItem, "qty"> & { qty?: number } }
  | { type: "REMOVE"; payload: { id: string; variant?: string } }
  | { type: "UPDATE_QTY"; payload: { id: string; variant?: string; qty: number } }
  | { type: "CLEAR" }

export const CART_STORAGE_KEY = "cart:v1"

export function parseINR(value: number | string): number {
  if (typeof value === "number" && !Number.isNaN(value)) return value
  if (typeof value !== "string") return 0
  const digits = value.replace(/[^0-9.]/g, "")
  const parsed = Number(digits)
  return Number.isFinite(parsed) ? parsed : 0
}

export function formatINR(value: number): string {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value)
  } catch {
    return `₹${Math.round(value)}`
  }
}

export function computeSubtotal(items: CartItem[]): number {
  return items.reduce((sum, it) => sum + it.price * it.qty, 0)
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const { id, variant } = action.payload
      const idx = state.items.findIndex((i) => i.id === id && (i.variant || "") === (variant || ""))
      if (idx >= 0) {
        const next = [...state.items]
        next[idx] = { ...next[idx], qty: next[idx].qty + (action.payload.qty ?? 1) }
        return { items: next }
      }
      return {
        items: [...state.items, { ...action.payload, qty: action.payload.qty ?? 1 }],
      }
    }
    case "REMOVE": {
      const next = state.items.filter(
        (i) => !(i.id === action.payload.id && (i.variant || "") === (action.payload.variant || "")),
      )
      return { items: next }
    }
    case "UPDATE_QTY": {
      const next = state.items.map((i) =>
        i.id === action.payload.id && (i.variant || "") === (action.payload.variant || "")
          ? { ...i, qty: Math.max(1, action.payload.qty) }
          : i,
      )
      return { items: next }
    }
    case "CLEAR":
      return { items: [] }
    default:
      return state
  }
}
