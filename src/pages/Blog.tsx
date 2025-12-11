import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import musicImage from "@/assets/event-music.jpg";
import artImage from "@/assets/event-art.jpg";
import foodImage from "@/assets/event-food.jpg";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Nairobi's Live Music Scene",
      excerpt: "Discover the best venues, upcoming artists, and hidden gems in Nairobi's thriving music landscape.",
      image: musicImage,
      category: "Music",
      date: "Oct 28, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Top 10 Art Galleries You Must Visit in Nairobi",
      excerpt: "From contemporary to traditional African art, explore Nairobi's most inspiring gallery spaces.",
      image: artImage,
      category: "Arts & Culture",
      date: "Oct 25, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Nairobi's Food Festival Calendar 2024",
      excerpt: "A comprehensive guide to all the food festivals, markets, and culinary events happening this year.",
      image: foodImage,
      category: "Food & Drink",
      date: "Oct 22, 2024",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-card py-16 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nairobi Pulse <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, guides, and stories from Nairobi's vibrant event scene
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-brand transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <h3 className="font-bold text-xl hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
