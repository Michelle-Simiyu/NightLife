import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Share2, Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import musicImage from "@/assets/event-music.jpg";

const EventDetail = () => {
  const { id } = useParams();
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedTier, setSelectedTier] = useState("general");

  // Mock data - will be replaced with API call
  const event = {
    id,
    title: "Afro Fusion Night with Sauti Sol",
    image: musicImage,
    date: "Saturday, November 2, 2024",
    time: "8:00 PM - 2:00 AM",
    venue: "The Carnivore Restaurant",
    location: "Langata Road, Nairobi",
    category: "Music & Concerts",
    description: "Get ready for an unforgettable night of Afro-fusion music with Kenya's legendary band Sauti Sol! Experience their greatest hits alongside new tracks in an intimate outdoor setting. Special guest performances throughout the night.",
    highlights: [
      "Live performance by Sauti Sol",
      "Special guest DJ sets",
      "Food and drinks available",
      "VIP meet & greet option",
      "Professional photography",
    ],
    ticketTiers: [
      { id: "early", name: "Early Bird", price: 2000, available: 0, description: "Limited early access pricing" },
      { id: "general", name: "General Admission", price: 2500, available: 150, description: "Standard entry to the event" },
      { id: "vip", name: "VIP Package", price: 5000, available: 25, description: "Premium seating, meet & greet, and complimentary drinks" },
    ],
  };

  const currentTier = event.ticketTiers.find(t => t.id === selectedTier);
  const totalPrice = (currentTier?.price || 0) * ticketQuantity;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero Image */}
        <section className="relative h-[400px] md:h-[500px]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </section>

        {/* Event Details */}
        <section className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 shadow-card">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {event.category}
                      </Badge>
                      <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        {event.title}
                      </h1>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Share2 className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-semibold">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Clock className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-semibold">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Venue</p>
                        <p className="font-semibold">{event.venue}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event.description}
                </p>
                <h3 className="text-xl font-bold mb-3">Event Highlights</h3>
                <ul className="space-y-2">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Ticket Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 shadow-brand sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Select Tickets</h2>
                
                {/* Ticket Tiers */}
                <div className="space-y-3 mb-6">
                  {event.ticketTiers.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      disabled={tier.available === 0}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        selectedTier === tier.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      } ${tier.available === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="font-semibold">{tier.name}</p>
                          <p className="text-sm text-muted-foreground">{tier.description}</p>
                        </div>
                        <p className="font-bold text-lg">KES {tier.price.toLocaleString()}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {tier.available === 0 ? "Sold Out" : `${tier.available} available`}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-3">Quantity</label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                      disabled={ticketQuantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-2xl font-bold min-w-[3ch] text-center">
                      {ticketQuantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setTicketQuantity(Math.min(10, ticketQuantity + 1))}
                      disabled={ticketQuantity >= 10 || ticketQuantity >= (currentTier?.available || 0)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">KES {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span className="font-semibold">KES {(totalPrice * 0.05).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">KES {(totalPrice * 1.05).toLocaleString()}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button 
                  className="w-full shadow-brand" 
                  size="lg"
                  disabled={!currentTier || currentTier.available === 0}
                >
                  Proceed to Checkout
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Secure checkout powered by M-Pesa & Stripe
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
