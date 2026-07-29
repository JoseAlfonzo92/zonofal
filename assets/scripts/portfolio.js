import { renderPortfolioCards } from "./projectsCardRender.js";

document.addEventListener("DOMContentLoaded", () => {
    
    // Render portfolio cards on portfolio page
    if (document.getElementById('portfolio-grid')) {
        renderPortfolioCards();
    }

});