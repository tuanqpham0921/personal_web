import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";


// '#' is an anchor link that refers to the ID of a section in the page
// '/' is used for routing to different pages in a single-page application
const navItems = [
    { name: "Home", href: "/#hero", hash: "#hero" },
    { name: "About", href: "/#about", hash: "#about" },
    { name: "Skills", href: "/#skills", hash: "#skills" },
    { name: "Projects", href: "/#projects", hash: "#projects" },
    { name: "Contact", href: "/#contact", hash: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // Helper to handle navigation and scrolling
    const handleNavClick = (e, hash) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate("/", { replace: false });
            // Wait for navigation, then scroll
            setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav 
            className = {cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5",
            )}
        >

            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center"
                    href="/#hero"
                    onClick={e => handleNavClick(e, "#hero")}
                >
                    <span className="relative z-10">
                        {/* The {" "} inserts an explicit space */}
                        {/* <span className="text-glow text-foreground"> Tuan's </span> {" "} */}
                        Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            onClick={e => handleNavClick(e, item.hash)}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                
                {/* mobile nav */}
                <button onClick={() => setIsMenuOpen(prev => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                > 
                    
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen 
                        ? "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                onClick={e => handleNavClick(e, item.hash)}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    );
};