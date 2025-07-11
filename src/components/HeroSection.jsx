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
                        className="w-28 md:w-80 h-auto md:h-80 rounded-full object-cover shadow-lg mb-4"
                    />
                    {/* Contact Info */}
                    <div className="flex flex-col items-center space-y-2 mb-4 animate-fade-in-delay-2">
                        <a
                            href="mailto:tuanqpham0921@gmail.com"
                            className="text-sm text-muted-foreground hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            tuanqpham0921@gmail.com
                        </a>
                        <a
                            className="text-sm text-muted-foreground hover:underline text-right self-end"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            San Macros, TX
                        </a>
                        <div className="flex flex-row items-center space-x-4">
                            <a
                                href="https://www.linkedin.com/in/tuanqpham0921/"
                                className="text-sm text-muted-foreground hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/tuanqpham0921"
                                className="text-sm text-muted-foreground hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1rzh5nR2Dui5ub65zgElOPbhc5c6uoy1g/view?usp=sharing"
                                className="text-sm text-muted-foreground hover:underline"
                                target="_blank"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
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
                    <p className="text-sm md:text-base text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-left">

                        I previously worked at United Launch Alliance (ULA), 
                        where I gained experience across the software development lifecycle, 
                        from writing code to supporting testing and product releases.<br /><br />

                        I have a strong foundation in Software Engineering with experience in Python, C++, big data, CI/CD and cloud technologies.<br /><br />

                        Feel free to reach out if you'd like to connect or discuss potential opportunities!
                    </p>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};