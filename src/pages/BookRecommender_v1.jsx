import { Navbar }         from "@/components/shared/Navbar";
import { ThemeToggle }    from "@/components/shared/ThemeToggle";
import { StarBackground } from "@/components/shared/StarBackground";
import BookRecSection from "../components/book_recommender/v1/BookRecSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export const BookRecommenderV1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
    <ThemeToggle />

    {/* Background Effects */}
    <StarBackground /> 

    {/* Nav Bar */}
    <Navbar />

    <main>
      {/* Book Recommendation Section */}
      <BookRecSection />
    </main>

    {/* Footer */}
    <ProjectsSection />
    <ContactSection />
    
  </div>
  );
}