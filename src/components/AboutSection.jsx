import { Briefcase, School, MonitorCog, ArrowDown } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative"> 
            {" "}
            <div className="container mx-auto max-w-5xl">

                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left side: Education & Certifications */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <School className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left"> 
                                    <h3 className="font-bold underline text-lg mb-4">
                                        Education
                                    </h3>

                                    <p className="text-muted-foreground text-left">
                                        {" "}
                                        <span className="font-semibold">2019 - 2022</span>
                                        <br />
                                        <span className="font-semibold">The University of Texas at Austin</span>
                                        <br />
                                        Bachelor of Science, <span className="italic">Computer Science</span>
                                        <br />
                                        Bachelor of Arts, <span className="italic">Economics and Mathematics</span>
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
                                    <h3 className="font-bold underline text-lg mb-4">
                                        Certifications
                                    </h3>
                                    <p className="text-muted-foreground text-left">
                                        <ul className="list-disc list-inside">
                                            <li>Applied Statistical Modeling</li>
                                        </ul>
                                    </p>

                                    <p className="text-muted-foreground text-left">
                                        <ul className="list-disc list-inside">
                                            <li>GCP Machine Learning Engineer (in progress)</li>
                                        </ul>
                                    </p>
            
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Work Experience in a hovercard */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MonitorCog className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left w-full">
                                    <h3 className="font-bold underline text-lg mb-4">
                                        Work Experience
                                    </h3>
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-lg mb-1">
                                            United Launch Alliance (ULA)
                                        </h4>
                                        <p className="text-muted-foreground text-left">
                                            <span>November 2022 - November 2024</span>
                                            <br />
                                            <span>Embedded Software Engineer</span>
                                            <br />
                                            <span>Denver, Colorado</span>
                                        </p>
                                    </div>
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-lg mb-1">
                                            OSA McQuillian
                                        </h4>
                                        <p className="text-muted-foreground text-left">
                                            <span>June 2019 - August 2019</span>
                                            <br />
                                            <span>Accounting Intern</span>
                                            <br />
                                            <span>Dublin, Ireland</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                        <ArrowDown className="h-5 w-5 text-primary" />
                    </div>

                </div>
            </div>
        </section>
    )
}