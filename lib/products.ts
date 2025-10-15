export type ProductImage = {
  src: string
  alt: string
}
export type Product = {
  id: number
  slug: string
  title: string
  price: number // INR in paise is overkill, we use number in rupees and format
  includesTax?: boolean
  images: ProductImage[]
  attributes?: {
    color?: string
    fabric?: string
    dimensions?: string
  }
  description?: string
  shipping?: string
  washCare?: string
  ethical?: string
}

export const products: Product[] = [
  {
    id: 101,
    slug: "purple-kanchipuram-silk-saree-with-kili-yanai-and-mayil-motifs",
    title: "Purple Kanchipuram Silk Saree with Kili, Yanai, and Mayil Motifs",
    price: 25986,
    includesTax: true,
    images: [
      { src: "/images/purple-1.jpg", alt: "Purple Kanchipuram Silk Saree main view" },
      { src: "/images/purple-2.jpg", alt: "Close-up border and motifs" },
      { src: "/images/purple-3.jpg", alt: "Pallu and zari detail" },
      { src: "/images/purple-4.jpg", alt: "Overall drape view" },
      { src: "/images/purple-5.jpg", alt: "Blouse fabric detail" },
    ],
    attributes: {
      color: "Purple",
      fabric: "Silk",
      dimensions: "5.5 m + 0.8 m blouse",
    },
    description:
      "Rich and regal, this Purple Kanchipuram Silk Saree features intricate Kili (parrot), Yanai (elephant) and Mayil (peacock) motifs woven with zari. A timeless classic with a gleaming blue pallu and refined golden border.",
    shipping: "Estimated delivery: 6–9 working days for local shipping, 10–15 days for international shipments.",
    washCare: "Dry clean only. Store in a cool, dry place. Avoid direct sunlight for prolonged periods.",
    ethical:
      "Crafted in collaboration with skilled weavers, supporting local communities and sustaining heritage craftsmanship.",
  },
  // You can add more products here to power 'You Might Also Like'
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
