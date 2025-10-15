"use client"
import Image from "next/image"
interface Product {id: number, name: string ,price: string ,image: string}
interface ProductCardProps {product: Product}
export function ProductCard({ product }: ProductCardProps) {
return (
  <div className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
  <div className="relative aspect-[3/4] overflow-hidden">
    <Image src={product.image } alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300"  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"  loading="lazy"/>
  </div>
  <div className="p-5 flex flex-col">
    <h3 className="text-base sm:text-lg font-semibold text-black mb-3 text-center sm:text-left">{product.name}</h3>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left gap-3">
      <p className="text-sm sm:text-base lg:text-lg text-[#800000] mx-auto sm:mx-0">{product.price}</p>
      <a href="/contact" className="w-full sm:w-auto"><button className="w-full sm:w-auto bg-[#800000] text-xs sm:text-sm hover:bg-[#FFF2D7] text-white hover:text-[#800000] border hover:border-[#800000] px-4 py-2 rounded-lg shadow-lg transition duration-200">Get Quote</button></a>
        </div>
      </div>
    </div>
  )
}
