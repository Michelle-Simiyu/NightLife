import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Nairobi Pulse Events
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              We're on a mission to make Nairobi's vibrant event scene accessible to everyone
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nairobi is a city that never stops buzzing with energy, creativity, and culture. 
              From underground music sessions to high-profile business conferences, there's always 
              something happening. We created Nairobi Pulse Events to be your trusted guide to 
              discovering and experiencing the best events our beautiful city has to offer.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-card">
              <div className="bg-gradient-to-br from-primary to-orange-500 p-4 rounded-lg w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Curated Quality</h3>
              <p className="text-muted-foreground">
                Every event on our platform is carefully vetted to ensure you get the best experiences Nairobi has to offer.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card">
              <div className="bg-gradient-to-br from-secondary to-purple-500 p-4 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                We believe in building connections and supporting local organizers, artists, and communities.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card">
              <div className="bg-gradient-to-br from-accent to-green-500 p-4 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Experience</h3>
              <p className="text-muted-foreground">
                From discovery to ticket purchase, we make finding and attending events effortless and enjoyable.
              </p>
            </Card>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With years of experience in event management, technology, and community building, 
                our team is passionate about showcasing Nairobi's dynamic cultural landscape. 
                We work closely with event organizers to bring you authentic, diverse, and 
                unforgettable experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking for your next adventure or planning to list your own event, 
                Nairobi Pulse is here to connect you with what matters.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
