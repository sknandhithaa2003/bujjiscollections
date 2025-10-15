"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

return ( <>
  <div className="bg-[#800000] text-white text-center py-2 text-xs sm:text-sm">Free Delivery for Orders over ₹1,000</div>
  <header className="shadow-lg bg-white sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      <a href ="/"><h1 className="text-lg sm:text-2xl font-bold tracking-wider">BC</h1></a>
      <nav className="hidden md:flex space-x-6 lg:space-x-8">
        <a href="/new-arrival" className="block text-gray-700 border-b border-transparent hover:text-[#800000] hover:border-[#800000] py-2 text-sm transition-colors"> NEW ARRIVAL</a>
        <a href="/all-saree" className="block text-gray-700 border-b border-transparent hover:text-[#800000] hover:border-[#800000] py-2 text-sm transition-colors">ALL SAREE</a>
        <a href="/contact" className="block text-gray-700 py-2 text-sm border-b border-transparent hover:text-[#800000] hover:border-[#800000] transition-colors">CONTACT</a>
      </nav>
    </div>
    </div>

{/* Mobile Menu */}
  {isMenuOpen && (
  <div className="md:hidden  shadow-md">
    <div className="px-4 py-3 space-y-2">
      <a href="/new-arrival" className="block text-gray-700 py-2 text-sm border-b border-transparent hover:text-[#800000] hover:border-[#800000] transition-colors"> NEW ARRIVAL</a>
      <a href="/all-saree" className="block text-gray-700 py-2 text-sm border-b border-transparent hover:text-[#800000] hover:border-[#800000] transition-colors"> ALL SAREE</a>
      <a href="/contact" className="block text-gray-700 py-2 text-sm border-b border-transparent hover:text-[#800000] hover:border-[#800000] transition-colors">CONTACT</a>
    </div>
  </div>
  )}
  </header>
  </>
  )
}