import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react"
export function Footer() {
return (
  <footer className="bg-[#800000] text-white ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-6">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  <div className="col-span-1 md:col-span-2">
    <h2 className="text-2xl font-bold tracking-wider pt-4">BUJJI'S COLLECTION</h2>
    <p className="mb-6 max-w-md mt-5"> Discover the finest handloom sarees crafted with traditional techniques and contemporary designs. Each piece tells a story of heritage and elegance.</p>
    <div className="flex space-x-4">
      <a  href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FFF2D7] rounded-full flex items-center justify-center "><Instagram className="h-4 w-4 text-[#800000]" /></a>
      <a href="https://wa.me/91 8870406566" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FFF2D7] rounded-full flex items-center justify-center"><MessageCircle className="h-4 w-4 text-[#800000]" /></a>
    </div>
  </div>
  <div>
    <h3 className="text-lg font-semibold mb-4 pt-4">Quick Links</h3>
    <div className="flex flex-col space-y-2">
      <a href="/new-arrival" > New Arrival</a>
      <a href="/all-saree"> All Saree</a>
      <a href="/contact"> Contact</a>
    </div>
  </div>
  <div>
    <h3 className="text-lg font-semibold mb-4 pt-4">Contact Us</h3>
    <div className="flex flex-col space-y-3">
      <a href="tel:+918870406566" className="flex items-center space-x-3"> <Phone className="h-4 w-4" /><span>+91 8870406566</span></a>
      <a href="mailto:info@bujjiscollection.com" className="flex items-center space-x-3"><Mail className="h-4 w-4" /><span>info@bujjiscollection.com</span></a>
      <a href="#" rel="noopener noreferrer"className="flex items-start space-x-3" ><MapPin className="h-4 w-4" /><span>Coimbatore - 601416</span></a>
    </div>
  </div>
  </div>
  <div className="border-t border-yellow mt-5 pt-5 flex flex-col md:flex-row justify-between items-center">
    <p className="text-sm">© 2024 Bujjis Collection. All rights reserved.</p>
    <p className="text-sm mt-2 md:mt-0">Powered by Nandhithaa SK</p>
  </div>
  </div>
  </footer>
  )
}