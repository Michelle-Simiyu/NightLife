import EventCard from "./EventCard";
import musicImage from "@/assets/event-music.jpg";
import artImage from "@/assets/event-art.jpg";
import foodImage from "@/assets/event-food.jpg";
import businessImage from "@/assets/event-business.jpg";

interface EventsSectionProps {
  title: string;
  subtitle?: string;
}

const EventsSection = ({ title, subtitle }: EventsSectionProps) => {
  // Mock data - will be replaced with API data
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
  ];

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
