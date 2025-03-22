
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const speakers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Digital Marketing Strategist",
    bio: "With over 15 years of experience in digital marketing, Sarah helps businesses develop effective online strategies.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3",
    topics: ["Digital Marketing", "SEO", "Content Strategy"],
  },
  {
    id: 2,
    name: "Michael Chen, PhD",
    title: "AI Research Scientist",
    bio: "Michael leads AI research at TechFuture and has published numerous papers on machine learning applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3",
    topics: ["Artificial Intelligence", "Machine Learning", "Neural Networks"],
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Sustainability Consultant",
    bio: "Emma advises Fortune 500 companies on implementing sustainable business practices that benefit both profits and the planet.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2522&auto=format&fit=crop&ixlib=rb-4.0.3",
    topics: ["Sustainability", "Corporate Responsibility", "Green Business"],
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Technology Entrepreneur",
    bio: "James has founded three successful tech startups and mentors emerging entrepreneurs in the technology sector.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
    topics: ["Entrepreneurship", "Startups", "Tech Innovation"],
  },
];

const Speakers = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[400px] h-[400px] top-1/2 right-[10%] opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-heading">
              Expert <span className="text-gradient">Speakers</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Learn from industry leaders who share their expertise and insights through our platform.
            </p>
          </div>
          <Link to="/speakers" className="mt-4 md:mt-0">
            <Button variant="outline">
              View All Speakers
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker }: { speaker: typeof speakers[number] }) => {
  return (
    <div className="neo-glass rounded-lg overflow-hidden card-hover">
      <div className="h-60 overflow-hidden">
        <img 
          src={speaker.image} 
          alt={speaker.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-1 font-heading">
          {speaker.name}
        </h3>
        
        <p className="text-sm text-primary mb-3">
          {speaker.title}
        </p>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {speaker.bio}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {speaker.topics.map((topic, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground/90"
            >
              {topic}
            </span>
          ))}
        </div>
        
        <Link to={`/speaker/${speaker.id}`}>
          <Button variant="outline" className="w-full" size="sm">
            View Profile
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Speakers;
