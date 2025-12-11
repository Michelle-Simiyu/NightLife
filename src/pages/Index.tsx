import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import EventsSection from "@/components/EventSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        <CategorySection />
        <EventsSection 
          title="Trending Events" 
          subtitle="The hottest events happening in Nairobi right now"
        />
        <EventsSection 
          title="This Weekend in Nairobi" 
          subtitle="Make the most of your weekend"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
