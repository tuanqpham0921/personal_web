import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-0"
        >
            <div className="container max-w-4xl mx-auto z-10 flex flex-col md:flex-row w-full h-full px-6">
                {/* Profile picture section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                    <img
                        src="/profile_picture.png"
                        alt="Profile"
                        className="w-full md:w-80 h-auto md:h-80 rounded-full object-cover shadow-lg mb-4"
                    />
                </div>
                {/* Text section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-center text-center space-y-6 pb-12">
                    <h1 className="mt-6 text-3xl md:text-6xl font-bold tracking-tight text-center">
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1"> 
                            {" "}Tuan 
                        </span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> 
                            {" "}Pham 
                        </span>
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-left md:text-center">
                        Hello! I'm an ex-Software Engineer at United Launch Alliance (ULA). I created this website to help you get to know me better.<br /><br />
                        I'm passionate about automation, software development, cloud computing and machine learning.<br /><br />
                        I'm always learning and expanding my knowledge across different domains.<br /><br />
                        Feel free to reach out if you have similar interests, backgrounds, or just want to connect!
                    </p>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};