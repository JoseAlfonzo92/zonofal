import { projects } from "./projects-data.js";

function revealOnScroll(selector) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible", "revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

export function renderPortfolioCards() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) {
    console.warn("Portfolio grid element (#portfolio-grid) not found.");
    return;
  }

  const currentLang = document.documentElement.lang || "en";

  function getText(obj, fallback = "") {
    return obj?.[currentLang] || obj?.en || fallback;
  }

  grid.innerHTML = "";

  projects.forEach((project) => {
    const html = `
      <article class="portfolio-item"
              role="listitem"
              aria-labelledby="project-${project.slug}-title">

        <figure>
          <img
            src="${project.heroImage.src}"
            alt="${getText(project.heroImage.alt)}"
            class="portfolio-thumb"
            loading="lazy"
            decoding="async">
        </figure>

        <div class="portfolio-info">

          <h3 id="project-${project.slug}-title"
              data-en="${project.title.en}"
              data-es="${project.title.es}">
            ${getText(project.title)}
          </h3>

          <p
            data-en="${project.shortSummary?.en || project.summary.en}"
            data-es="${project.shortSummary?.es || project.summary.es}">
            ${getText(project.shortSummary || project.summary)}
          </p>

          <div class="portfolio-tags"
              role="list"
              aria-label="Technologies used">

            ${
              project.technologies?.length
                ? project.technologies
                    .map(
                      (tech) => `<span role="listitem">${tech}</span>`
                    )
                    .join("")
                : `<span role="listitem">${project.category?.toUpperCase() || "PROJECT"}</span>`
            }

          </div>

          <a
            href="../projects-pages/project-page.html?slug=${project.slug}"
            class="portfolio-button-1"
            aria-label="View ${project.title.en} project"
            data-en="View Project"
            data-es="Ver Proyecto">
            ${currentLang === "es" ? "Ver Proyecto" : "View Project"}
          </a>

        </div>

      </article>
    `;

    grid.insertAdjacentHTML("beforeend", html);
  });

  // Start observing the newly-added cards
  requestAnimationFrame(() => {
    revealOnScroll(".portfolio-item");
  });
}