
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Calendar, Clock, User } from "lucide-react";

const webinars = [
  {
    id: 1,
    title: "Mastering Digital Marketing Strategies for 2023",
    description: "Learn the latest digital marketing techniques and strategies to grow your business in the digital age.",
    date: "2023-11-15",
    time: "10:00 AM PST",
    duration: "90",
    speaker: "Sarah Johnson",
    speakerTitle: "Digital Marketing Strategist",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Marketing",
  },
  {
    id: 2,
    title: "Introduction to Artificial Intelligence and Machine Learning",
    description: "Explore the fundamentals of AI and ML and discover how these technologies are transforming industries.",
    date: "2023-11-22",
    time: "2:00 PM EST",
    duration: "120",
    speaker: "Dr. Michael Chen",
    speakerTitle: "AI Research Scientist",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Technology",
  },
  {
    id: 3,
    title: "Sustainable Business Practices: The Future of Commerce",
    description: "Discover how implementing sustainable practices can benefit your business and contribute to a healthier planet.",
    date: "2023-12-05",
    time: "11:00 AM GMT",
    duration: "75",
    speaker: "Emma Rodriguez",
    speakerTitle: "Sustainability Consultant",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Business",
  },
];

const FeaturedWebinars = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Upcoming <span className="text-gradient">Webinars</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Register for our upcoming live sessions with industry experts and enhance your knowledge.
            </p>
          </div>
          <Link to="/webinars" className="mt-4 md:mt-0">
            <Button variant="outline">
              View All Webinars
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webinars.map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WebinarCard = ({ webinar }: { webinar: typeof webinars[number] }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border/50 card-hover group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent z-10" />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
            {webinar.category}
          </span>
        </div>
        <img 
          src={webinar.image} 
          alt={webinar.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold line-clamp-2 mb-2 h-14">
          {webinar.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
          {webinar.description}
        </p>
        
        <div className="flex items-center gap-2 mb-2">
          <User className="h-4 w-4 text-primary" />
          <span className="text-sm text-foreground/90 font-medium">
            {webinar.speaker}
          </span>
          <span className="text-xs text-muted-foreground">
            {webinar.speakerTitle}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {formatDate(webinar.date)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {webinar.time} ({webinar.duration} min)
            </span>
          </div>
        </div>
        
        <Link to={`/webinar/${webinar.id}`}>
          <Button variant="default" className="w-full" ripple>
            Register Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedWebinars;
