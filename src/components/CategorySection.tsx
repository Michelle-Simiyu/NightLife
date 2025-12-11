import { Button } from "@/components/ui/button";
import { Music, Palette, Coffee, Briefcase, GraduationCap, Heart } from "lucide-react";

const categories = [
  { name: "Music & Concerts", icon: Music, count: 45, color: "from-primary to-orange-500" },
  { name: "Arts & Culture", icon: Palette, count: 32, color: "from-secondary to-purple-500" },
  { name: "Food & Drink", icon: Coffee, count: 28, color: "from-accent to-green-500" },
  { name: "Business", icon: Briefcase, count: 19, color: "from-primary to-secondary" },
  { name: "Workshops", icon: GraduationCap, count: 24, color: "from-accent to-primary" },
  { name: "Community", icon: Heart, count: 15, color: "from-secondary to-accent" },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Explore by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto flex-col gap-3 p-6 hover:shadow-brand transition-all group"
              >
                <div className={`bg-gradient-to-br ${category.color} p-4 rounded-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm mb-1">{category.name}</div>
                  <div className="text-xs text-muted-foreground">{category.count} events</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
