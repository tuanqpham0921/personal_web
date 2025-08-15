import { Navbar }         from "@/components/shared/Navbar";
import { ThemeToggle }    from "@/components/shared/ThemeToggle";
import { StarBackground } from "@/components/shared/StarBackground";
import { HeroSection }    from "@/components/portfolio/HeroSection";
import { AboutSection }   from "@/components/portfolio/AboutSection";
import { SkillsSection }  from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Contact } from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
    <ThemeToggle />

    {/* Background Effects */}
    <StarBackground /> 

    {/* Nav Bar */}
    <Navbar />

    {/* Main Content */}
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>

    {/* Footer */}
  </div>
  );
}