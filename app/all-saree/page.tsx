import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/Productcard"

export default function AllSareePage() {
const newProducts = [
 { id: 1, name: "Silk Banarasi Saree", price: "₹12,500", originalPrice: "₹15,000", image: "/15.jpeg", isNew: true },
  { id: 2, name: "Cotton Handloom Saree", price: "₹3,500", originalPrice: "₹4,200", image: "/16.jpeg", isNew: true },
  { id: 3, name: "Kanjivaram Silk Saree", price: "₹18,000", originalPrice: "₹22,000", image: "/17.jpeg", isNew: true },
  { id: 4, name: "Linen Handwoven Saree", price: "₹4,800", originalPrice: "₹6,000", image: "/18.jpeg", isNew: true },
  { id: 5, name: "Chanderi Silk Saree", price: "₹8,500", originalPrice: "₹10,500", image: "/19.jpeg", isNew: true },
  { id: 6, name: "Tussar Silk Saree", price: "₹6,200", originalPrice: "₹7,800", image: "/20.jpeg", isNew: true },
  { id: 7, name: "Georgette Saree", price: "₹5,200", originalPrice: "₹6,500", image: "/21.jpeg", isNew: true },
  { id: 8, name: "Patola Silk Saree", price: "₹22,000", originalPrice: "₹26,000", image: "/22.jpeg", isNew: true },
  { id: 9, name: "Banarasi Organza Saree", price: "₹9,800", originalPrice: "₹12,000", image: "/23.jpeg", isNew: true },
  { id: 10, name: "Paithani Silk Saree", price: "₹19,500", originalPrice: "₹23,000", image: "/24.jpeg", isNew: true },
  { id: 11, name: "Bandhani Saree", price: "₹4,200", originalPrice: "₹5,000", image: "/25.jpeg", isNew: true },
  { id: 12, name: "Kota Doria Saree", price: "₹3,800", originalPrice: "₹4,600", image: "/26.jpeg", isNew: true },
  { id: 13, name: "Patola Saree", price: "₹15,500", originalPrice: "₹18,000", image: "/27.jpeg", isNew: true },
  { id: 14, name: "Pochampally Ikat Saree", price: "₹7,800", originalPrice: "₹9,200", image: "/28.jpeg", isNew: true },
  { id: 15, name: "Bhagalpuri Silk Saree", price: "₹5,200", originalPrice: "₹6,500", image: "/29.jpeg", isNew: true },
  { id: 16, name: "Paithani Saree", price: "₹22,000", originalPrice: "₹26,000", image: "/30.jpeg", isNew: true },
  { id: 17, name: "Uppada Silk Saree", price: "₹14,000", originalPrice: "₹17,500", image: "/31.jpeg", isNew: true },
  { id: 18, name: "Sambalpuri Saree", price: "₹9,500", originalPrice: "₹11,800", image: "/32.jpeg", isNew: true },
  { id: 19, name: "Velvet Embellished Saree", price: "₹12,000", originalPrice: "₹14,500", image: "/33.jpeg", isNew: true },
  { id: 20, name: "Shimmer Sequin Saree", price: "₹11,000", originalPrice: "₹13,200", image: "/34.jpeg", isNew: true },
  { id: 21, name: "Jacquard Silk Saree", price: "₹8,200", originalPrice: "₹10,000", image: "/35.jpeg", isNew: true },
  { id: 22, name: "Cotton Designer Saree", price: "₹4,200", originalPrice: "₹5,200", image: "/36.jpeg", isNew: true },
  { id: 23, name: "Printed Daily Wear Saree", price: "₹2,200", originalPrice: "₹2,800", image: "/37.jpeg", isNew: true },
  { id: 24, name: "Crepe Printed Saree", price: "₹3,900", originalPrice: "₹4,800", image: "/38.jpeg", isNew: true },
  { id: 25, name: "Matka Silk Saree", price: "₹9,000", originalPrice: "₹11,200", image: "/39.jpeg", isNew: true },
  { id: 26, name: "Organza Floral Saree", price: "₹7,200", originalPrice: "₹8,900", image: "/40.jpeg", isNew: true },
  { id: 27, name: "Fancy Designer Saree", price: "₹5,600", originalPrice: "₹7,000", image: "/41.jpeg", isNew: true },
  { id: 28, name: "Khadi Handloom Saree", price: "₹5,800", originalPrice: "₹7,000", image: "/42.jpeg", isNew: true },
  { id: 29, name: "Raw Silk Saree", price: "₹13,800", originalPrice: "₹16,000", image: "/43.jpeg", isNew: true },
  { id: 30, name: "Brasso Party Wear Saree", price: "₹6,400", originalPrice: "₹7,800", image: "/44.jpeg", isNew: true },
  { id: 31, name: "Kota Silk Saree", price: "₹7,500", originalPrice: "₹9,000", image: "/45.jpeg", isNew: true },
  { id: 32, name: "Designer Fusion Saree", price: "₹10,500", originalPrice: "₹12,800", image: "/46.jpeg", isNew: true },
  { id: 36, name: "Handwoven Jamdani Saree", price: "₹9,700", originalPrice: "₹11,500", image: "/47.jpeg", isNew: true },
  { id: 37, name: "Shaded Ombre Silk Saree", price: "₹12,900", originalPrice: "₹15,000", image: "/48.jpeg", isNew: true },
  { id: 38, name: "Digital Print Chiffon Saree", price: "₹5,400", originalPrice: "₹6,500", image: "/49.jpeg", isNew: true },
  { id: 39, name: "Golden Kanchipuram Saree", price: "₹19,800", originalPrice: "₹23,000", image: "/50.jpeg", isNew: true },
  { id: 40, name: "Mysore Silk Saree", price: "₹16,500", originalPrice: "₹20,000", image: "/51.jpg", isNew: true },
  { id: 41, name: "Banarasi Georgette Saree", price: "₹11,200", originalPrice: "₹13,500", image: "/52.jpg", isNew: true },
  { id: 42, name: "Kanchipuram Organza Saree", price: "₹18,200", originalPrice: "₹22,000", image: "/53.jpg", isNew: true },
  { id: 43, name: "Chiffon Embroidered Saree", price: "₹6,800", originalPrice: "₹8,500", image: "/54.jpg", isNew: true },
  { id: 44, name: "Tussar Handloom Saree", price: "₹7,400", originalPrice: "₹9,000", image: "/55.jpg", isNew: true },
  { id: 45, name: "Silk Jamdani Saree", price: "₹14,900", originalPrice: "₹17,500", image: "/56.jpg", isNew: true },
  { id: 46, name: "Cotton Mul Saree", price: "₹3,600", originalPrice: "₹4,200", image: "/57.jpg", isNew: true },
  { id: 47, name: "Net Zari Work Saree", price: "₹12,400", originalPrice: "₹14,800", image: "/58.jpg", isNew: true },
  { id: 48, name: "Paithani Cotton Saree", price: "₹9,800", originalPrice: "₹11,500", image: "/60.jpg", isNew: true },
  { id: 49, name: "Banarasi Silk ", price: "₹13,200", originalPrice: "₹15,500", image:"/15.jpeg", isNew: true },
  { id: 50, name: "Designer Printed Saree", price: "₹5,700", originalPrice: "₹7,000", image: "/38.jpeg", isNew: true },
  { id: 51, name: "Handwoven Linen Saree", price: "₹6,900", originalPrice: "₹8,500", image: "/36.jpeg", isNew: true },
  { id: 52, name: "Silk Organza Party Saree", price: "₹17,500", originalPrice: "₹21,000", image: "/34.jpeg", isNew: true },
  { id: 53, name: "Bhagalpuri Saree", price: "₹8,300", originalPrice: "₹10,000", image: "/50.jpeg", isNew: true },
  { id: 54, name: "Georgette Floral Saree", price: "₹5,900", originalPrice: "₹7,200", image: "/40.jpeg", isNew: true },
  { id: 55, name: "Kota Silk ", price: "₹7,800", originalPrice: "₹9,500", image: "/45.jpeg", isNew: true },
  { id: 56, name: "Muga Silk Saree", price: "₹20,500", originalPrice: "₹24,000", image: "/61.jpg", isNew: true },
  { id: 57, name: "Chanderi Cotton Saree", price: "₹7,200", originalPrice: "₹8,800", image: "/62.jpg", isNew: true },
];
return (
  <main className="min-h-screen bg-background">
  <Navbar />
  <section className="bg-[#FFF2D7] py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-2xl sm:text-3xl font-bold text-[#800000] mb-5 tracking-wide ">All Saree </h1>
    <p className="text-lg max-w-full mx-auto"> Discover our latest collection of handcrafted sarees, featuring contemporary designs with traditional craftsmanship.</p>
  </div>
  </section>
  <section className="py-10 ">
    <div className="max-w-8xl bg-[text-2xl sm:text-3xl  font-bold text-[#800000] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5 ">
      {newProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
    </section>
  <Footer />
  </main>
  )
}