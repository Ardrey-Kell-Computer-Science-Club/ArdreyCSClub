import { Braces, ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// ========================================
// PROJECT GALLERY - ADD YOUR PROJECTS HERE
// ========================================
// To add a new project:
// 1. Upload your project screenshot to /public/projects/
// 2. Add a new object to this array with your project details
// 3. Submit a PR to share your work!
type Project = {
  title: string;
  description: string;
  image?: string;
  author: string;
  link: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Sample Project",
    description: "This is a sample project to demonstrate the gallery format. Replace this with your own project!",
    author: "Your Name",
    link: "https://github.com/yourusername/your-project",
    github: "https://github.com/yourusername/your-project",
  },
  // Add more projects below following the same format:
  // {
  //   title: "Project Name",
  //   description: "Brief description of your project",
  //   image: "/projects/your-image.png",
  //   author: "Your Name",
  //   link: "https://your-project-url.com",
  //   github: "https://github.com/yourusername/project"
  // },
];

export default function ProjectGallery() {
  return (
    <main className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Member <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Check out the amazing projects built by our club members. Want to showcase your work? Go to the github repo and the ProjectGallery.tsx page!!

          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">No projects yet. Be the first to add yours!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={`${project.title}-${project.author}`} project={project} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300">
      <div className="aspect-video bg-zinc-800 relative overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(183,166,255,0.14),transparent_65%)] text-purple-300">
            <Braces className="h-12 w-12" aria-hidden="true" />
            <span className="sr-only">Project preview coming soon</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-zinc-500">by {project.author}</span>
          <div className="flex gap-2">
            {project.github && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitBranch className="h-4 w-4" />
                  <span className="sr-only">View {project.title} on GitHub</span>
                </a>
              </Button>
            )}
            <Button size="sm" variant="default" className="bg-purple-600 hover:bg-purple-700" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Open {project.title}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
