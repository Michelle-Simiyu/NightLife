import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import musicImage from "@/assets/event-music.jpg";
import artImage from "@/assets/event-art.jpg";
import foodImage from "@/assets/event-food.jpg";
import businessImage from "@/assets/event-business.jpg";

const Events = () => {
  // Mock data - will be replaced with API
  const events = [
    {
      id: "1",
      title: "Afro Fusion Night with Sauti Sol",
      image: musicImage,
      date: "Sat, Nov 2",
      time: "8:00 PM",
      venue: "The Carnivore",
      location: "Langata",
      category: "Music",
      price: "KES 2,500",
      featured: true,
    },
    {
      id: "2",
      title: "Contemporary Art Exhibition: New Voices",
      image: artImage,
      date: "Thu, Nov 7",
      time: "6:00 PM",
      venue: "Circle Art Gallery",
      location: "Westlands",
      category: "Arts & Culture",
      price: "Free",
    },
    {
      id: "3",
      title: "Nairobi Street Food Festival",
      image: foodImage,
      date: "Sat, Nov 9",
      time: "12:00 PM",
      venue: "Karura Forest",
      location: "Karura",
      category: "Food & Drink",
      price: "KES 500",
    },
    {
      id: "4",
      title: "Tech Startup Networking Mixer",
      image: businessImage,
      date: "Wed, Nov 6",
      time: "6:30 PM",
      venue: "iHub",
      location: "Kilimani",
      category: "Business",
      price: "KES 1,000",
    },
    // Duplicated for demonstration
    ...Array(8).fill(null).map((_, i) => ({
      id: `${i + 5}`,
      title: "Afro Fusion Night with Sauti Sol",
      image: musicImage,
      date: "Sat, Nov 2",
      time: "8:00 PM",
      venue: "The Carnivore",
      location: "Langata",
      category: "Music",
      price: "KES 2,500",
    })),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-card py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Events in <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Nairobi</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {events.length} events happening this month
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-40 bg-background border-b border-border py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search events..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="arts">Arts & Culture</SelectItem>
                  <SelectItem value="food">Food & Drink</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="date">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">By Date</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-5 w-5" />
                More Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
