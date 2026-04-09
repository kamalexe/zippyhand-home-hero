import { useState, lazy, Suspense } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SEO from "@/components/SEO";

// Lazy load below-the-fold components
const WhyChooseUs = lazy(() => import("@/components/landing/WhyChooseUs"));
const WhatWeFix = lazy(() => import("@/components/landing/WhatWeFix"));
const Testimonials = lazy(() => import("@/components/landing/Testimonials"));
const FAQ = lazy(() => import("@/components/landing/FAQ"));
const Footer = lazy(() => import("@/components/landing/Footer"));
const BookingModal = lazy(() => import("@/components/landing/BookingModal"));

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
    "name": "FixKro",
    "image": "https://www.fixkro.in/icon.png",
    "description": "Expert home appliance repair services in Gaya. AC, Washing Machine, RO repair with 90-day warranty.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gaya",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "url": "https://www.fixkro.in",
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
        keywords="AC repair Gaya, washing machine repair Gaya, RO service Gaya, appliance repair, FixKro"
        schema={localBusinessSchema}
      />
      <Header />
      <Hero onBookService={() => handleBookService()} />

      <Suspense fallback={<div className="h-96" />}>
        <WhyChooseUs />
        <WhatWeFix />
        <Testimonials />
        <FAQ />
        <Footer />
      </Suspense>
      
      <Suspense fallback={null}>
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          preSelectedService={selectedService}
        />
      </Suspense>
    </div>
  );
};

export default Index;
