import { Navbar }         from "@/components/Navbar";
import { ThemeToggle }    from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import BookRecSection from "../components/BookRecSection";



export const BookRecommender = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
    <ThemeToggle />

    {/* Background Effects */}
    <StarBackground /> 

    {/* Nav Bar */}
    <Navbar />

    {/* Book Recommendation Section */}
    <BookRecSection />
    
  </div>
  );
}