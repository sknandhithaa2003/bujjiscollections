"use client"
import { Instagram, MessageCircle ,CheckCircle , Clock ,Star, Users, Award ,ChevronLeft, ChevronRight} from "lucide-react"; 
import CountUp from "@/components/ui/CountUp";
import Image from "next/image"
import { useRef } from "react";

const features = ["100% Authentic Handloom Sarees","Premium Silk and Cotton Fabrics","Exquisite Craftsmanship with Traditional Weaves","Wide Range of Festive and Wedding Collections","Custom Draping and Styling Assistance","Careful Packaging for Safe Delivery"];
const bestSellers = [
  { id: 1,name: "Purple Kanchipuram Silk Saree ",price: "₹ 15,000.00",image: "/2.jpeg",},
  { id: 2, name: "Green Kanchipuram Tissue Silk Saree", price: "₹ 14,999.00", image: "/3.jpeg",},
  { id: 3, name: "Sandal Kanchipuram Tissue Silk Saree",price: "₹ 19,999.00", image: "/4.jpeg",},
  { id: 4,name: "Red Kanchipuram Silk Saree ",price: "₹ 16,000.00",image: "/5.jpeg",},
  { id: 5, name: "Black Kanchipuram Tissue Silk Saree", price: "₹ 13,999.00", image: "/6.jpeg",},
  { id: 6, name: "Blue Kanchipuram Tissue Silk Saree",price: "₹ 19,999.00", image: "/7.jpeg",},
  { id: 7, name: "Yellow Kanchipuram Tissue Silk Saree",price: "₹ 12,999.00", image: "/8.jpeg",},
]
const weaveCategories = [
  { id: 1, title: "Kanchipuram", image: "/10.jpeg",},
  { id: 2, title: "Banarasi", image: "/11.jpeg",},
  { id: 3, title: "Cotton", image: "/12.jpeg",},
  { id: 4, title: "Tissue", image: "/13.jpeg",},
  { id: 5, title: "Chiffion", image: "/14.jpeg",},
]
const testimonials = [
  { name: "Rajeshwari Menon", location: "RS Puram, Coimbatore", rating: 5, text: "Absolutely love the silk saree I bought! The fabric is soft and the colors are vibrant. Perfect for festivals and weddings!" },
  { name: "Priya Sharma", location: "Saibaba Colony, Coimbatore", rating: 5, text: "The handloom saree arrived beautifully packaged. The craftsmanship is amazing, and I've received so many compliments!" },
  { name: "Murugan Textiles", location: "Peelamedu, Coimbatore", rating: 5, text: "Our boutique sourced sarees from here, and the quality is exceptional. Customers love the intricate designs and premium feel." },
  { name: "Lakshmi Devi", location: "Gandhipuram, Coimbatore", rating: 5, text: "The team guided me perfectly in choosing a saree for my wedding. It was elegant, comfortable, and absolutely stunning!" },
  { name: "Arjun Fabrics", location: "Tirupur Road, Coimbatore", rating: 5, text: "Reliable and authentic saree collection. We've been purchasing for years. Always high-quality, vibrant fabrics." },
  { name: "Meera Krishnan", location: "Race Course, Coimbatore", rating: 5, text: "I gifted a saree to my mother, and she loved it! The weaving and finishing are flawless. Truly premium quality." }
];

export function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => { carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" }); };
  const scrollRight = () => { carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" }); };

return (<>
  <section className="relative pb-5 bg-[#FFF2D7] overflow-hidden">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
    <div className="space-y-6 lg:pr-8 ">
    <div className="space-y-4">
      <h1 className="text-2xl mt-5 lg:text-5xl font-bold text-[#800000] leading-tight">BUJJI'S COLLECTION</h1>
      <h2 className="text-md lg:text-3xl font-light text-gray-800 leading-tight">WEAVES OF SILK SAREES</h2>
      <p className="text-gray-600 text-base leading-relaxed max-w-md">Discover the timeless elegance of authentic handloom sarees, where tradition meets contemporarystyle.</p>
    </div>
      <div className="flex items-center space-x-4">
    <a href="/all-saree" className="bg-[#800000] text-white rounded-xl px-6 py-3 text-sm font-medium tracking-wide"> SHOP NOW</a>
    <a  href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center "><Instagram className="h-4 w-4 text-white" /></a>
    <a href="https://wa.me/91 8870406566" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center"><MessageCircle className="h-4 w-4 text-white" /></a>
   </div> </div>     
    <div className="relative">
    <div className="relative aspect-[4/5] w-full  max-w-md mx-auto">
      <Image src="/1.jpg" alt="Two women wearing beautiful Banarasi sarees" fill  className="object-cover rounded-lg  transition-transform duration-500 ease-in-out transform hover:scale-105 hover:brightness-105"priority sizes="(max-width: 768px) 100vw, 50vw"/>
    </div>
    </div>
  </div>
  </div>
  </section>

{/* about section */}
  <section className="py-10 bg-white text-gray-800">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <div className="max-w-3xl mx-auto space-y-6">
    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#800000] animate-fade-in-up"> About Bujji's Collection</h2>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify"> At Bujji’s Collection, we celebrate the exquisite artistry and cultural richness that define true luxury.   We provide the finest and most authentic handloom sarees, ensuring that each piece is cherished and preserved.  By choosing us, you not only embrace the beauty of Indian sarees but also contribute to the preservation of our cultural heritage.</p>
  </div>
  <div className="space-y-4 sm:space-y-5 mt-10 max-w-md mx-auto text-left">
    {features.map((feature, index) => (
    <div key={index} className="flex items-center  space-x-2">
      <CheckCircle className="h-5 w-5 text-[#800000] flex-shrink-0 mt-1" /><span className="text-sm sm:text-base">{feature}</span>
    </div>
    ))}
  </div> 
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 max-w-3xl mx-auto">
    <div className="text-center">
      <div className="flex justify-center items-center space-x-2 mb-2">
        <Clock className="h-5 w-5 text-[#800000]" />
        <span className="text-2xl font-bold text-gray-900"><CountUp from={0} to={10} duration={2} />+</span>
      </div>
      <span className="text-sm sm:text-base text-gray-500">Years of Expertise</span>
    </div>
    <div className="text-center">
      <div className="flex justify-center items-center space-x-2 mb-2">
        <Users className="h-5 w-5 text-[#800000]" />
        <span className="text-2xl font-bold text-gray-900"><CountUp from={0} to={500} duration={2} />+</span>
      </div>
      <span className="text-sm sm:text-base text-gray-500">Happy Customers</span>
    </div>
    <div className="text-center">
      <div className="flex justify-center items-center space-x-2 mb-2">
        <Award className="h-5 w-5 text-[#800000]" />
        <span className="text-2xl font-bold text-gray-900"><CountUp from={0} to={100} duration={2} />%</span>
      </div>
      <span className="text-sm sm:text-base text-gray-500">Authenticity Guaranteed</span>
    </div>
  </div>
  </div>
  </section>

{/* best seller */}
  <section className="py-16 bg-[#FFF2D7] relative">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-center mb-12 text-2xl font-light text-gray-900">You are in <span className="font-medium">best sellers</span></h2>
    <div className="relative flex items-center">
      <button onClick={scrollLeft}className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 z-10"> <ChevronLeft className="h-6 w-6 text-gray-700" /></button>
      <div ref={carouselRef} className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar py-2">
        {bestSellers.map((product) => (
        <div key={product.id} className="snap-start flex-shrink-0 w-[300px] h-[550px] bg-white rounded-lg shadow-md transition-transform duration-500 ease-in-out">
        <div className="w-full h-[85%] overflow-hidden rounded-t-lg">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
        </div>
        <div className="p-4 h-[15%] flex flex-col justify-center">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm font-semibold text-gray-800">{product.price}</p>
        </div>
        </div>
        </div>
        ))}
      </div>
      <button onClick={scrollRight}className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 z-10"> <ChevronRight className="h-6 w-6 text-gray-700" /></button>
    </div>
  </div>
  </section>

{/* review section */}
  <section className="py-16 ">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#800000] mb-10">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
      <div key={index} className="bg-white border border-[#FFF2D7] border-4 rounded-xl shadow-lg p-6 hover:shadow-2xl text-left transition-shadow duration-300">
        <div className="flex items-center mb-3 justify-start space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />))}
        </div>
        <p className="text-gray-700 italic leading-relaxed mb-4">"{testimonial.text}"</p>
        <hr className="my-3"/>
        <div className="font-semibold text-[#800000]">{testimonial.name}<span className="font-normal text-sm text-gray-500"> - {testimonial.location}</span></div>
      </div>
      ))}
    </div>
  </div>
  </section>

{/* shop by weave */}
  <section className="py-10  bg-[#FFF2D7] ">
  <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
  <div className="text-center mb-12"><h2 className="text-2xl font-light text-gray-900">Shop by Weave</h2></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {weaveCategories.map((category) => (
      <div key={category.id} className="relative group w-full">
      <div className="relative w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[40rem] overflow-hidden rounded-lg">
        <Image src={category.image } alt={category.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 1024px) 100vw, 25vw"/>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" /></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-xl font-medium mb-3">{category.title}</h3>
          <button className=" text-white " ><a href="/all-saree">Shop Now</a></button>
        </div>
        </div>
      ))}
    </div>
  </div>
  </section>
  </>
  )
}