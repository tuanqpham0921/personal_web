import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative"> 
            {" "}
            <div className="container mx-auto max-w-5xl">
                
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* left section */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer & Tech Creator</h3>

                        {/* TODO: update these info */}
                        <p className="text-muted-foreground">
                            I specialize in building dynamic and responsive 
                            web applications that provide real value to users..... 
                        </p>

                        <p className="text-muted-foreground">
                            I specialize in building dynamic and responsive 
                            web applications that provide real value to users..... 
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get in Touch
                            </a>

                            {/* TODO: add a file to download*/}
                            <a href="" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                {" "}
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* right section */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left"> 
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        I create modern, responsive websites and 
                                        applications using the latest technologies.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left"> 
                                    <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        I create modern, responsive websites and 
                                        applications using the latest technologies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left"> 
                                    <h4 className="font-semibold text-lg"> Project Development </h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        I create modern, responsive websites and 
                                        applications using the latest technologies.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}