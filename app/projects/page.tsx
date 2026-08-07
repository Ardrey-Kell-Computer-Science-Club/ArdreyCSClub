import ProjectGallery from "./components/ProjectGallery";

// To add a new project to the gallery:
// 1. Upload your project image to /public/projects/ (create the directory if it doesn't exist)
// 2. Add a new object to the projects array in components/ProjectGallery.tsx with:
//    - title: Project name
//    - description: Brief description
//    - image: Path to your image (e.g., "/projects/your-image.png")
//    - author: Your name
//    - link: URL to project (GitHub, live demo, etc.)
// 3. Submit a PR with your changes
export default function Projects() {
  return (
    <div>
      <ProjectGallery />
    </div>
  );
}
