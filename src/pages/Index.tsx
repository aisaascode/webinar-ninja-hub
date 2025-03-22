
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedWebinars from "@/components/home/FeaturedWebinars";
import Speakers from "@/components/home/Speakers";
import Features from "@/components/home/Features";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedWebinars />
        <Speakers />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
