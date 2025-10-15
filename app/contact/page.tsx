"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function ContactPage() {
return ( <>
  <Navbar />
  <section className="bg-[#FFF2D7] py-10 md:py-10 lg:py-15 px-4 md:px-6">
  <div className="text-center mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#800000] mb-5 tracking-wide" >Lets Get in Touch </h2>
    <p className="text-lg max-w-full mb-5 mx-auto">Looking for the perfect saree? Get in touch with us for a personalized quote or assistance with your selection.</p>
  </div>
  <div className="max-w-5xl mx-auto border-teal-800">
  <Tabs defaultValue="contact">
    <TabsList className="grid w-full grid-cols-2 mb-8"><TabsTrigger value="contact">Contact Us</TabsTrigger><TabsTrigger value="quote">Get Quote</TabsTrigger></TabsList>
  <TabsContent value="contact">
  <Card className="shadow-xl  border-[#800000] ">
  <CardHeader>
    <CardTitle>Send us a Message</CardTitle>
    <CardDescription>Have questions about our sarees, collections or customization ? We'd love to hear from you.</CardDescription>
  </CardHeader>
  <CardContent>
  <form className="space-y-6">
    <div className="grid md:grid-cols-2 gap-4">
      <div><label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label><input id="name" type="text" placeholder="Your full name" required className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md" /></div>
      <div><label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label><input id="email" type="email" placeholder="your@email.com" required className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md" /></div>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div><label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label><input id="phone" type="tel" placeholder="+91 98765 43210" className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md" /></div>
      <div><label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label><input id="subject" placeholder="How can we help?" className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md" /></div>
    </div>
    <div><label htmlFor="message" className="block text-sm font-medium mb-2">Message</label><textarea id="message" placeholder="Tell us about your roofing needs..." rows={2} required className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md"></textarea></div>
    <button type="submit" className="w-full sm:w-auto bg-[#800000] text-xs sm:text-sm text-white px-4 py-2 rounded-lg shadow-lg transition duration-200">Send Message</button>
  </form>
  </CardContent></Card>
  </TabsContent>
    
  <TabsContent value="quote">
  <Card className="border-[#800000] shadow-xl">
    <CardHeader>
      <CardTitle>Request a Saree Quote</CardTitle>
      <CardDescription> Let us know your preferences, and we'll provide a personalized quote.</CardDescription>
    </CardHeader>
    <CardContent>
      <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div><label htmlFor="quote-name" className="block text-sm font-medium mb-2">Full Name</label>
          <input id="quote-name" placeholder="Your full name" required className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md"/>
        </div>
        <div> <label htmlFor="quote-email" className="block text-sm font-medium mb-2">Email Address</label>
          <input id="quote-email" type="email" placeholder="you@example.com" required className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md"/>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div><label htmlFor="quote-phone" className="block text-sm font-medium mb-2">Phone Number</label>
          <input id="quote-phone"  type="tel" placeholder="+91 98765 43210"  required className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md" />
        </div>
        <div>
          <label htmlFor="saree-type" className="block text-sm font-medium mb-2">Saree Type / Collection</label>
          <select id="saree-type" className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md">
            <option value="">Select saree type</option>
            <option value="silk">Silk Saree</option>
            <option value="cotton">Cotton Saree</option>
            <option value="designer">Designer Saree</option>
            <option value="partywear">Party Wear Saree</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div><label htmlFor="occasion" className="block text-sm font-medium mb-2">Occasion</label>
          <select id="occasion" className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md">
            <option value="">Select occasion</option>
            <option value="wedding">Wedding</option>
            <option value="festival">Festival</option>
            <option value="casual">Casual / Daily Wear</option>
            <option value="party">Party / Special Event</option>
          </select>
        </div>
        <div><label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
          <input id="quantity" type="number"  placeholder="How many sarees?" className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md"/>
        </div>
      </div>
      <div><label htmlFor="message" className="block text-sm font-medium mb-2">Additional Details / Requests</label>
        <textarea id="message" placeholder="Any specific color, design, or customization requests?" rows={3} className="w-full px-3 py-2 border border-[#800000] bg-gray-50 rounded-md"/>
      </div>
      <button type="submit" className="w-full sm:w-auto bg-[#800000] text-xs sm:text-sm text-white px-4 py-2 rounded-lg shadow-lg transition duration-200">Send Message</button>
      </form>
    </CardContent>
  </Card>
  </TabsContent>
  </Tabs>
  </div>
  </section>
  <Footer />
  </>
  );
}