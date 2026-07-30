import { projects } from "./projects-data.js";
import { renderProject } from "./projectRenderer.js";
import { initGallerySlider } from "./components/gallerySlider.js";

document.addEventListener("DOMContentLoaded", () => {

    const projectContent = document.getElementById("project-content");
    if (!projectContent) {
        console.error("#project-content element not found");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    let slug = urlParams.get("slug");

    if (!slug) {
        slug = window.location.pathname.split("/").pop().replace(".html", "");
    }

    console.log("Looking for project slug:", slug);

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        console.error("Project not found with slug:", slug);
        projectContent.innerHTML = `
            <h2>Project not found</h2>
            <p>Slug: ${slug}</p>
        `;
        return;
    }

    console.log("Project found:", project.title.en);

    
      //Updates the page title and SEO metadata
     
    function updatePageMetadata(project, lang) {
        const title =
            lang === "es"
                ? `${project.title.es} | Proyecto | Zonofal`
                : `${project.title.en} | Project | Zonofal`;

        const description = (
            project.shortSummary?.[lang] || project.summary[lang]
        ).slice(0, 160);

        document.title = title;

        const setMeta = (selector, value) => {
            const meta = document.querySelector(selector);
            if (meta) {
                meta.setAttribute("content", value);
            }
        };

        setMeta('meta[name="description"]', description);

        setMeta('meta[property="og:title"]', title);
        setMeta('meta[property="og:description"]', description);
        setMeta(
            'meta[property="og:url"]',
            `https://zonofal.com/pages/projects/${project.slug}.html`
        );
        setMeta('meta[property="og:image"]', project.heroImage.src);
        setMeta(
            'meta[property="og:image:alt"]',
            project.heroImage.alt[lang]
        );

        setMeta('meta[name="twitter:title"]', title);
        setMeta('meta[name="twitter:description"]', description);
        setMeta('meta[name="twitter:image"]', project.heroImage.src);
    }

    
      //Renders the project using the current language
     
    function renderCurrentProject() {
        const lang = document.documentElement.lang || "en";

        projectContent.innerHTML = renderProject(project, lang);

        initGallerySlider(projectContent);

        if (window.revealOnScroll) {
            window.revealOnScroll(".slide-left");
            window.revealOnScroll(".slide-right");
        }

        updatePageMetadata(project, lang);
    }

    try {
        renderCurrentProject();
        console.log("Content rendered successfully");
    } catch (error) {
        console.error("Error rendering project:", error);
        projectContent.innerHTML = `
            <h2>Error rendering project</h2>
            <p>${error.message}</p>
        `;
    }

    
     // Re-render when the language changes.
     // If your language toggle dispatches this event,
     // the page title, metadata and content will all update.
     
    window.addEventListener("languageChanged", () => {
        renderCurrentProject();
    });

});