import { ArrowRight, ExternalLink, Github, ArrowDown } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pseudocode to C++ Translator",
    description:
      "Created a machine learning model that translates Pseudocode to C++. Utilized the Stanford’s SPoC dataset.",
    tags: ["PyTorch", "Google Colab", "HuggingFace"],
    demoUrl: "https://colab.research.google.com/drive/1TVuvG0gCWD-CgkhOzX7hBGMqHejtQFtv?usp=sharing#scrollTo=_GGr-XPlJEUq",
    githubUrl: "https://colab.research.google.com/drive/1TVuvG0gCWD-CgkhOzX7hBGMqHejtQFtv?usp=sharing#scrollTo=_GGr-XPlJEUq",
  },
  {
    id: 2,
    title: "Personal Website",
    description: "A personal website using React and TailwindCSS.",
    tags: ["React", "TailwindCSS", "Vite", "FireBase", "GCP"],
    demoUrl: "https://github.com/tuanqpham0921/personal_web",
    githubUrl: "https://github.com/tuanqpham0921/personal_web",
  },
  {
    id: 3,
    title: "Book Recommender",
    description: ".................",
    tags: [".....................",],
    demoUrl: "/book-recommender",
    githubUrl: "https://github.com/tuanqpham0921/Semantic-Book-Recommender",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-left"> {project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 text-left">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center left-6 bottom-6">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tuanqpham0921"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};