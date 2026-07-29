import { projects } from "./projects-data.js";
import { renderProject } from "./projectRenderer.js";
import { initGallerySlider } from "./components/gallerySlider.js";

document.addEventListener("DOMContentLoaded", () => {
    
    const projectContent = document.getElementById("project-content");
    if (!projectContent) {
        console.error(" #project-content element not found");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    let slug = urlParams.get('slug');

    if (!slug) {
        slug = window.location.pathname.split('/').pop().replace('.html', '');
    }

    console.log(" Looking for project slug:", slug);

    const project = projects.find(p => p.slug === slug);

    if (project) {
        console.log("Project found:", project.title.en);
        try {
            const html = renderProject(project, document.documentElement.lang || 'en');
            projectContent.innerHTML = html;
            // Initialize gallery after HTML exists
            initGallerySlider(projectContent);
            console.log(" Content rendered successfully");
        } catch (error) {
            console.error(" Error rendering project:", error);
            projectContent.innerHTML = `<h2>Error rendering project</h2><p>${error.message}</p>`;
        }
    } else {
        console.error(" Project not found with slug:", slug);
        projectContent.innerHTML = `<h2>Project not found</h2><p>Slug: ${slug}</p>`;
    }
});