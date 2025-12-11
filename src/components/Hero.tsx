import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-nairobi.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Nairobi events and nightlife"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Curated Guide to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nairobi's Best Experiences
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Discover concerts, festivals, workshops, and cultural events happening right now in Nairobi.
          </p>

          {/* Search Bar */}
          <div className="bg-card shadow-card rounded-xl p-4 md:p-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search events, artists, venues..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="shrink-0">
                  <Calendar className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="shrink-0">
                  <MapPin className="h-5 w-5" />
                </Button>
                <Button className="shrink-0 shadow-brand">
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm">This Weekend</Button>
              <Button variant="secondary" size="sm">Free Events</Button>
              <Button variant="secondary" size="sm">Music & Concerts</Button>
              <Button variant="secondary" size="sm">Food & Drink</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
