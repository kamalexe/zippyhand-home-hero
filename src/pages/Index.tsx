import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import BookingModal from "@/components/landing/BookingModal";
import SEO from "@/components/SEO";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleBookService = (service?: string) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "ZippyHand",
    "image": "https://zippyhand.com/icon.png",
    "description": "Expert home appliance repair services in Gaya. AC, Washing Machine, RO repair with 90-day warranty.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gaya",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "url": "https://zippyhand.com",
    "telephone": "+91-1234567890", // Replace with actual number
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Home"
        description="Expert home appliance repair services in Gaya. AC, Washing Machine, RO repair with 90-day warranty. Book top-rated technicians now!"
        keywords="AC repair Gaya, washing machine repair Gaya, RO service Gaya, appliance repair, ZippyHand"
        schema={localBusinessSchema}
      />
      <Header onBookService={() => handleBookService()} />
      <Hero onBookService={() => handleBookService()} />
      <WhyChooseUs />
      <Services onBookService={handleBookService} />
      <Testimonials />
      <FAQ />
      <Footer />
      
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedService={selectedService}
      />
    </div>
  );
};

export default Index;
