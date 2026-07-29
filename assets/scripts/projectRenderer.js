export function renderProject(project, lang = 'en') {
  return `
    ${renderHeader(project, lang)}
    ${renderBody(project, lang)}
    ${renderBenefits(project, lang)}
    ${renderGallery(project, lang)}
    ${renderTeam(project, lang)}
  `;
}

//  HEADER 
function renderHeader(project, lang) {
  return `
<section class="project-item-header" role="region" aria-labelledby="project-title">

  <div class="project-icon">
    <i class="fas fa-${project.icon || 'laptop-code'}" aria-hidden="true"></i>
  </div>

  <h2 id="project-title" data-en="${project.title.en}" data-es="${project.title.es}">
    ${project.title[lang]}
  </h2>

  <img src="${project.heroImage.src}" 
       alt="${project.heroImage.alt[lang]}" 
       class="project-image" loading="lazy" decoding="async">


  <p class="project-summary" 
     data-en="${project.summary.en}" 
     data-es="${project.summary.es}">
    ${project.summary[lang]}
  </p>

  <div class="project-links">
   <a href="${project.links.demo}"
   class="project-btn primary"
   target="_blank"
   rel="noopener"
   data-en="Live Demo"
   data-es="Ver Demo">
  ${lang === "es" ? "Ver Demo" : "Live Demo"}
</a>

<a href="${project.links.code}"
   class="project-btn secondary"
   target="_blank"
   rel="noopener"
   data-en="View Code"
   data-es="Ver Código">
  ${lang === "es" ? "Ver Código" : "View Code"}
</a>
  </div>

</section>`;
}

// BODY 
function renderBody(project, lang) {
  return `
<section class="project-item-body" role="region" aria-labelledby="project-details-heading">

  <h3 id="project-details-heading"
    data-en="Project Details"
    data-es="Detalles del Proyecto">
  ${lang === "es" ? "Detalles del Proyecto" : "Project Details"}
</h3>

  ${project.sections.map(section => `
    <div class="project-section">
      <h4 data-en="${section.title.en}" data-es="${section.title.es}">
        ${section.title[lang]}
      </h4>
      <p data-en="${section.text.en}" data-es="${section.text.es}">
        ${section.text[lang]}
      </p>
    </div>
  `).join('')}

</section>`;
}

// BENEFITS
function renderBenefits(project, lang) {
  return `
<section class="benefits-section" role="region" aria-labelledby="benefits-heading">

  <h3 id="benefits-heading"
      data-en="Key Benefits"
      data-es="Beneficios">
    ${lang === "es" ? "Beneficios" : "Key Benefits"}
  </h3>

  <ul class="benefits-list" role="list">
    ${project.benefits
      .map(
        (benefit, index) => `
      <li
        role="listitem"
        class="${index % 2 === 0 ? "slide-left" : "slide-right"}">

        <i class="fas fa-${benefit.icon}" aria-hidden="true"></i>

        <span
          data-en="${benefit.text.en}"
          data-es="${benefit.text.es}">
          ${benefit.text[lang]}
        </span>

      </li>
    `
      )
      .join("")}
  </ul>

</section>`;
}

// GALLERY
function renderGallery(project, lang) {
  return `
<section
  class="gallery-section"
  role="region"
  aria-labelledby="gallery-heading">

  <h3
    id="gallery-heading"
    data-en="Gallery"
    data-es="Galería">
    ${lang === "es" ? "Galería" : "Gallery"}
  </h3>

  <div class="wrapper">

    <div
      class="slider"
      role="region"
      aria-label="${lang === "es" ? "Galería de imágenes" : "Image Gallery"}">

      <button
        class="arrow left"
        type="button"
        aria-label="${lang === "es" ? "Imagen anterior" : "Previous image"}">

        <i class="fas fa-chevron-left" aria-hidden="true"></i>

      </button>

      <div class="container-images">

        ${project.gallery.images
          .map(
            (img, index) => `
          <img
            src="${img.src}"
            alt="${img.alt[lang]}"
            loading="lazy"
            decoding="async"
            data-index="${index}"
            aria-hidden="${index === 0 ? "false" : "true"}"
            class="${index === 0 ? "active" : ""}">
        `
          )
          .join("")}

      </div>

      <button
        class="arrow right"
        type="button"
        aria-label="${lang === "es" ? "Imagen siguiente" : "Next image"}">

        <i class="fas fa-chevron-right" aria-hidden="true"></i>

      </button>

    </div>

  </div>

  ${
    project.gallery.video?.url
      ? `
  <div class="gallery-video">

    <div class="video-wrapper">

      <iframe
        src="${project.gallery.video.url}"
        title="${project.gallery.video.title[lang]}"
        loading="lazy"
        allowfullscreen>
      </iframe>

    </div>

  </div>`
      : ""
  }

</section>`;
}

// TEAM
function renderTeam(project, lang) {
  return `
<section
  class="team-section"
  role="region"
  aria-labelledby="team-heading"
  aria-label="${lang === "es" ? "Miembros del equipo del proyecto" : "Project Team Members"}">

  <h3
    id="team-heading"
    data-en="Project Team"
    data-es="Equipo del Proyecto">
    ${lang === "es" ? "Equipo del Proyecto" : "Project Team"}
  </h3>

  <p
    data-en="Meet the team members who contributed to this project"
    data-es="Conocé a los miembros del equipo que contribuyeron a este proyecto">
    ${
      lang === "es"
        ? "Conocé a los miembros del equipo que contribuyeron a este proyecto"
        : "Meet the team members who contributed to this project"
    }
  </p>

  <ul class="team-list" role="list">

    ${project.team
      .map(
        (member) => `
      <li role="listitem">

        <i
          class="fas fa-user-circle team-icon"
          aria-hidden="true">
        </i>

        <div class="team-member">

          <span class="team-name">
            ${member.name}
          </span>

          <small
            class="team-role"
            data-en="${member.role.en}"
            data-es="${member.role.es}">
            ${member.role[lang]}
          </small>

        </div>

      </li>
    `
      )
      .join("")}

  </ul>

</section>`;
}