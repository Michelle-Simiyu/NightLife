import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  category: string;
  price: string;
  featured?: boolean;
}

const EventCard = ({
  id,
  title,
  image,
  date,
  time,
  venue,
  location,
  category,
  price,
  featured = false,
}: EventCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-brand transition-all duration-300 h-full flex flex-col">
      <CardHeader className="p-0 relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            {category}
          </Badge>
          {featured && (
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4 space-y-3">
        <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary shrink-0" />
            <span>{date} • {time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span className="line-clamp-1">{venue}, {location}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Ticket className="h-5 w-5 text-primary" />
          <span className="font-bold text-lg">{price}</span>
        </div>
        <Link to={`/events/${id}`}>
          <Button className="shadow-brand">
            Get Tickets
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
