import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

// Updated skills list with numeric proficiency for progress bars
const skills = [
    // Languages
    { name: "Python",       level: 90, label: "Proficient", category: "Languages" },
    { name: "C",            level: 70, label: "Familiar",   category: "Languages" },
    { name: "C++",          level: 70, label: "Familiar",   category: "Languages" },
    { name: "Java",         level: 70, label: "Familiar",   category: "Languages" },
    { name: "SQL",          level: 70, label: "Familiar",   category: "Languages" },
    { name: "JavaScript",   level: 50, label: "Exposure",   category: "Languages" },
    { name: "HTML",         level: 50, label: "Exposure",   category: "Languages" },
    { name: "CSS",          level: 50, label: "Exposure",   category: "Languages" },

    // DevOps / Automation
    { name: "Git/GitHub",         level: 90, label: "Proficient", category: "DevOps" },
    { name: "Bash/Shell",  level: 70, label: "Familiar",   category: "DevOps" },
    { name: "Makefiles",   level: 70, label: "Familiar",   category: "DevOps" },
    { name: "Docker",      level: 70, label: "Familiar",   category: "DevOps" },
    { name: "Bamboo",      level: 50, label: "Exposure",   category: "DevOps" },
    { name: "Kubernetes",  level: 50, label: "Exposure",   category: "DevOps" },

    // Project Management
    { name: "Agile",        level: 70, label: "Familiar", category: "Project Management" },
    { name: "Scrum",        level: 70, label: "Familiar", category: "Project Management" },
    { name: "Confluence",   level: 70, label: "Familiar", category: "Project Management" },
    { name: "Jira",         level: 70, label: "Familiar", category: "Project Management" },
    { name: "BitBucket",    level: 70, label: "Familiar", category: "Project Management" },

    // Web Development
    { name: "ReactJS",      level: 50, label: "Exposure", category: "Web Development" },
    { name: "Flask",        level: 50, label: "Exposure", category: "Web Development" },
    { name: "Tailwind CSS", level: 50, label: "Exposure", category: "Web Development" },
    { name: "Postman",      level: 50, label: "Exposure", category: "Web Development" },
    { name: "Node.js",      level: 50, label: "Exposure", category: "Web Development" },
    { name: "PostgreSQL",   level: 50, label: "Exposure", category: "Web Development" },

    // AI / Data Science
    { name: "Polars",       level: 70, label: "Familiar", category: "AI / Data Science" },
    { name: "NumPy",        level: 70, label: "Familiar", category: "AI / Data Science" },
    { name: "Pandas",       level: 70, label: "Familiar", category: "AI / Data Science" },
    { name: "TensorFlow",   level: 70, label: "Familiar", category: "AI / Data Science" },
    { name: "PyTorch",      level: 70, label: "Familiar", category: "AI / Data Science" },
    { name: "Scikit-learn", level: 70, label: "Familiar", category: "AI / Data Science" },
    { name: "Keras",        level: 70, label: "Familiar", category: "AI / Data Science" },
    { name: "HuggingFace",  level: 50, label: "Exposure", category: "AI / Data Science" },
    { name: "Apache Spark", level: 50, label: "Exposure", category: "AI / Data Science" },
    { name: "Hadoop",       level: 50, label: "Exposure", category: "AI / Data Science" },
    
    // Tools
    { name: "VS Code",      level: 90, label: "Proficient", category: "Tools"},
    { name: "Anaconda",     level: 90, label: "Proficient", category: "Tools"},
    { name: "Jupyter",      level: 90, label: "Proficient", category: "Tools"},
    { name: "Linux",        level: 70, label: "Familiar",   category: "Tools"},
    { name: "GCP",          level: 70, label: "Familiar",   category: "Tools"},
    { name: "AWS",          level: 50, label: "Exposure",   category: "Tools"},
];

const categories = [
    "Languages",
    "DevOps",
    "Project Management",
    "Web Development",
    "AI / Data Science",
    "Tools",
    "All" // Add "All" as the last tab
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to first category

    const filteredSkills =
        activeCategory === "All"
            ? skills
            : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", {
                                "bg-primary text-white": activeCategory === category,
                                "bg-secondary text-muted-foreground": activeCategory !== category
                            })}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover relative group"
                        >   
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs text-muted-foreground">{skill.category}</span>
                                </div>
                            </div>
                            {/* Tooltip appears when hovering the whole card */}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4 px-2 py-1 bg-card border rounded text-xs text-primary z-10 whitespace-nowrap">
                                {skill.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}