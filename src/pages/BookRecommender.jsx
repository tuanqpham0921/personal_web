import { Navbar }         from "@/components/Navbar";
import { ThemeToggle }    from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import BookRecSection from "../components/BookRecSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export const BookRecommender = () => {
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