import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, Phone, User, Wrench, CheckCircle, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { format, addDays } from "date-fns";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

const services = [
  "AC Repair & Maintenance",
  "AC Installation / Uninstallation",
  "Fix AC Water Leaking",
  "AC Gas Charging",
  "Washing Machine Repair",
  "RO Repair & Service",
];

const brands = [
  "Samsung",
  "LG",
  "Voltas",
  "Daikin",
  "Blue Star",
  "Hitachi",
  "Carrier",
  "Whirlpool",
  "Godrej",
  "Other",
];

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

const BookingModal = ({ isOpen, onClose, preSelectedService }: BookingModalProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: preSelectedService || "",
    brand: "",
    date: "",
    timeSlot: "",
    address: "",
    landmark: "",
  });

  // Generate next 7 days for date selection
  const dateOptions = useMemo(() => {
    const dates = [];
    for (let i = 1; i <= 7; i++) {
      const date = addDays(new Date(), i);
      dates.push({
        value: format(date, "yyyy-MM-dd"),
        day: format(date, "EEE"),
        date: format(date, "d"),
        month: format(date, "MMM"),
      });
    }
    return dates;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            service: formData.service,
            brand: formData.brand,
            date: formData.date,
            time_slot: formData.timeSlot,
            address: formData.address,
            landmark: formData.landmark,
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Booking Confirmed! 🎉",
        description: "Our team will call you shortly to confirm the details.",
      });
    } catch (error: any) {
      console.error('Booking error:', error);
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      service: "",
      brand: "",
      date: "",
      timeSlot: "",
      address: "",
      landmark: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-card rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-6 py-5 relative">
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-primary-foreground">Book a Service</h2>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Fill in the details and we'll get back to you within minutes
              </p>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-success" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for choosing ZippyHand. Our team will call you within 15 minutes to confirm your booking.
                  </p>
                  <Button onClick={handleClose} className="rounded-full px-8">
                    Done
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your 10-digit number"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-primary" />
                      Service Required
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Brand Selection */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      Select Brand
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {brands.map((brand) => (
                        <motion.button
                          key={brand}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setFormData({ ...formData, brand })}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                            formData.brand === brand
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-muted/50 text-foreground border-border hover:border-primary/50"
                          }`}
                        >
                          {brand}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Date Selection - Horizontal Scrollable Cards */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Select Date
                    </Label>
                    <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                      {dateOptions.map((dateOption) => (
                        <motion.button
                          key={dateOption.value}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setFormData({ ...formData, date: dateOption.value })}
                          className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-xl border-2 transition-all ${
                            formData.date === dateOption.value
                              ? "bg-primary text-primary-foreground border-primary shadow-lg"
                              : "bg-muted/30 text-foreground border-border hover:border-primary/50"
                          }`}
                        >
                          <span className={`text-xs font-medium ${
                            formData.date === dateOption.value ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}>
                            {dateOption.day}
                          </span>
                          <span className="text-xl font-bold">{dateOption.date}</span>
                          <span className={`text-xs ${
                            formData.date === dateOption.value ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}>
                            {dateOption.month}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Time Slot
                    </Label>
                    <Select
                      value={formData.timeSlot}
                      onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}
                      required
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Address in Gaya
                    </Label>
                    <Input
                      id="address"
                      placeholder="Enter your full address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>

                  {/* Landmark */}
                  <div className="space-y-2">
                    <Label htmlFor="landmark">Landmark (Optional)</Label>
                    <Input
                      id="landmark"
                      placeholder="Near any famous place?"
                      value={formData.landmark}
                      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl text-lg py-6 mt-4"
                      disabled={isSubmitting}
                  >
                      {isSubmitting ? "Confirming..." : "Confirm Booking"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By booking, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
