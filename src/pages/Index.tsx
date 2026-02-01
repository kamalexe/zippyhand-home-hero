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

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Home"
        description="Expert home appliance repair services in Gaya. AC, Washing Machine, RO repair with 90-day warranty. Book top-rated technicians now!"
        keywords="AC repair Gaya, washing machine repair Gaya, RO service Gaya, appliance repair, ZippyHand"
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
