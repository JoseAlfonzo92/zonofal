// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {

  // Cache elements
  const translatableElements = document.querySelectorAll("[data-en]");
  const langButtons = document.querySelectorAll(".language-toggle");
  const faqButtons = document.querySelectorAll(".faq-question");
  const contactForm = document.getElementById("contact-form");
  const sliderTrack = document.querySelector('.portfolio-item-section .portfolio-slider-track');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const slides = document.querySelectorAll('.portfolio-item-section .portfolio-item-container');
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider .container-images img");
  const arrows = document.querySelectorAll(".slider .arrow");
  const hamburger = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.getElementById('more-links');

  // Language setup
  let currentLanguage = localStorage.getItem("preferredLanguage") || 
                        (navigator.language.startsWith("es") ? "es" : "en");
  document.documentElement.lang = currentLanguage;

  // Language switching function
  function switchLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    localStorage.setItem("preferredLanguage", lang);

    // Update all elements with data-en / data-es attributes
    translatableElements.forEach(el => {
      const newText = el.dataset[lang];
      if (!newText) return;

      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
        el.placeholder = newText;
      } else {
        let replaced = false;
        el.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() && !replaced) {
            node.textContent = ` ${newText}`;
            replaced = true;
          }
        });

        if (!replaced) {
          const icon = el.querySelector("i");
          if (icon) icon.insertAdjacentText("afterend", ` ${newText}`);
          else el.textContent = newText;
        }
      }
    });

    // Update toggle button labels
    langButtons.forEach(btn => btn.textContent = lang === "en" ? "ES" : "EN");

     updateComparisonLanguage(lang);

    // Update thank-you message
    const thankYou = document.getElementById("thank-you-message");
    if (thankYou && thankYou.style.display === "block") {
      thankYou.textContent = lang === "es"
        ? "¡Gracias! Tu mensaje ha sido enviado."
        : "Thank you! Your message has been sent.";
    }

    // Update existing error messages
    document.querySelectorAll(".error-message").forEach(msg => {
      const field = msg.previousElementSibling;
      if (!field) return;
      const label = field.dataset[lang] || field.name;

      if (/required|obligatorio/.test(msg.textContent)) {
        msg.textContent = lang === "es"
          ? `${label} es obligatorio.`
          : `${label} is required.`;
      }

      if (/correo válida|valid email/.test(msg.textContent)) {
        msg.textContent = lang === "es"
          ? "Por favor ingrese una dirección de correo válida."
          : "Please enter a valid email address.";
      }
    });
  }

  // Language toggle button event listeners
  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const newLang = currentLanguage === "en" ? "es" : "en";
      switchLanguage(newLang);
    });
  });

  // Initial setup
  switchLanguage(currentLanguage);

  //  Contact form validation and submission
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const form = e.target;
      let valid = true;

      // Clear previous errors
      form.querySelectorAll(".error-message").forEach(msg => msg.remove());
      form.querySelectorAll("input, textarea").forEach(field => field.classList.remove("error"));

      const requiredFields = ["name", "email", "message"];
      requiredFields.forEach(id => {
        const field = form.querySelector(`#${id}`);
        if (!field.value.trim()) {
          valid = false;
          field.classList.add("error");
          const error = document.createElement("div");
          error.className = "error-message";
          const label = field.dataset[currentLanguage] || field.name;
          error.textContent = currentLanguage === "es"
            ? `${label} es obligatorio.`
            : `${label} is required.`;
          field.insertAdjacentElement("afterend", error);
        }
      });

      const email = form.querySelector("#email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value && !emailRegex.test(email.value)) {
        valid = false;
        email.classList.add("error");
        const error = document.createElement("div");
        error.className = "error-message";
        error.textContent = currentLanguage === "es"
          ? "Por favor ingrese una dirección de correo válida."
          : "Please enter a valid email address.";
        email.insertAdjacentElement("afterend", error);
      }

      if (valid) {
        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        })
        .then(() => {
          form.style.display = "none";
          const thankYou = document.getElementById("thank-you-message");
          if (thankYou) {
            thankYou.textContent = currentLanguage === "es"
              ? "¡Gracias! Tu mensaje ha sido enviado."
              : "Thank you! Your message has been sent.";
            thankYou.style.display = "block";
          }
        })
        .catch(() => {
          alert(currentLanguage === "es"
            ? "Algo salió mal. Por favor intenta nuevamente más tarde."
            : "Something went wrong. Please try again later.");
        });
      }
    });
  }

 // FAQ toggle
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));

    const answer = document.getElementById(button.getAttribute('aria-controls'));
    const icon = button.querySelector('.faq-toggle-icon');

    if (answer) {
      if (!expanded) {
        answer.hidden = false;
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
      } else {
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        setTimeout(() => {
          answer.hidden = true;
        }, 400); 
      }
    }

    if (icon) {
      icon.classList.toggle('fa-chevron-down', expanded);
      icon.classList.toggle('fa-chevron-up', !expanded);
    }
  });
});


  // Desktop dropdown menu
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.classList.toggle('show');
      dropdownToggle.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
        dropdownMenu.classList.remove('show');
        dropdownToggle.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', false);
      }
    });
  }

  // Hamburger menu for mobile
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('show');
      hamburger.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('show');
        hamburger.classList.remove('open');
      }
    });
  }

  // Scroll reveal animations using Intersection Observer
  const revealOnScroll = (selector) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible", "revealed");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    elements.forEach(el => observer.observe(el));
  };

  // Lazy-init scroll animations
  setTimeout(() => {
    [
      ".timeline-item",
      ".feature-card",
      ".service-block",
      ".contact-info-item",
      ".uxui-feature-item",
      ".process-steps li",
      ".feature-section",
      ".how-steps li",
      ".portfolio-item",
      ".portfolio-item-section",
      ".slide-left",
      ".slide-right"
    ].forEach(revealOnScroll);
  }, 500);

  // Portfolio slider
  let currentIndex = 0;
  const updateSlider = () => {
    if (sliderTrack) sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  if (prevBtn && nextBtn && slides.length) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });
  }

  // Touch swipe support
  let startX = 0;
  if (sliderTrack) {
    sliderTrack.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    sliderTrack.addEventListener('touchend', e => {
      const deltaX = e.changedTouches[0].clientX - startX;
      if (Math.abs(deltaX) > 50) {
        currentIndex = deltaX < 0
          ? (currentIndex + 1) % slides.length
          : (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
      }
    });
  }

  // Image gallery slider
  if (slider && images.length) {
    const totalImages = images.length;
    const getActiveIndex = () => [...images].findIndex(img => img.classList.contains("active"));

    const updateSlide = (newIndex, transitionClass) => {
      const currentIndex = getActiveIndex();
      const currentImage = images[currentIndex];
      if (newIndex >= totalImages) newIndex = 0;
      if (newIndex < 0) newIndex = totalImages - 1;
      const nextImage = images[newIndex];
      nextImage.classList.add(transitionClass);
      void nextImage.offsetWidth;
      currentImage.classList.add(transitionClass);
      nextImage.classList.add("active");
      nextImage.classList.remove(transitionClass);
      setTimeout(() => {
        currentImage.classList.remove("active", "to_left", "to_right");
      }, 500);
    };

    arrows.forEach(arrow => {
      arrow.addEventListener("click", () => {
        const isLeft = arrow.classList.contains("left");
        const currentIndex = getActiveIndex();
        const newIndex = isLeft ? currentIndex - 1 : currentIndex + 1;
        const transition = isLeft ? "to_right" : "to_left";
        updateSlide(newIndex, transition);
      });
    });
  }

  

}); // End DOMContentLoaded


// Header scroll behavior 
const header = document.getElementById("header");
const navLinks = document.querySelector(".nav-links");
const footer = document.querySelector("footer");
const ctaSection = document.querySelector(".cta-section");
const newsletterSection = document.querySelector(".newsletter-section");

function handleScrollStyling() {
  const scrollY = window.scrollY;
  if (header && navLinks) {
    header.classList.toggle("scrolled", scrollY > 50);
    navLinks.classList.toggle("scrolled", scrollY > 50);
  }
  if (footer && header) {
    const footerOffset = footer.offsetTop;
    const headerHeight = header.offsetHeight;
    const reachedFooter = scrollY + window.innerHeight >= footerOffset - headerHeight;
    header.classList.toggle("header-hidden", reachedFooter);
  }
  if (ctaSection && header) {
    const ctaTop = ctaSection.getBoundingClientRect().top;
    const nearCTA = ctaTop < header.offsetHeight + 50;
    header.classList.toggle("header-hidden", nearCTA);
  }
  if (newsletterSection && header) {
    const newsletterTop = newsletterSection.getBoundingClientRect().top;
    const nearNewsletter = newsletterTop < header.offsetHeight + 50;
    header.classList.toggle("header-hidden", nearNewsletter);
  }
}

let isScrolling = false;
window.addEventListener("scroll", () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      handleScrollStyling();
      isScrolling = false;
    });
    isScrolling = true;
  }
});
handleScrollStyling();



const cards = document.querySelectorAll('.pricing-card');

function getLang() {
  return document.documentElement.lang === 'es' ? 'es' : 'en';
}

function closeCard(card) {
  card.classList.remove('expanded');

  card.querySelectorAll('.extra-feature').forEach(el => {
    el.style.height = '0px';
  });

  const btn = card.querySelector('.toggle-features');
  if (btn) {
    btn.textContent = btn.dataset[getLang()];
    btn.setAttribute('aria-expanded', 'false');
  }
}

cards.forEach(card => {
  const button = card.querySelector('.toggle-features');

  button.addEventListener('click', () => {
    const isExpanded = card.classList.toggle('expanded');
    const lang = getLang();

    // Accordion behavior
    cards.forEach(other => {
      if (other !== card) closeCard(other);
    });

    // Animate features
    card.querySelectorAll('.extra-feature').forEach(el => {
      if (isExpanded) {
        el.style.height = el.scrollHeight + 'px';
      } else {
        el.style.height = '0px';
      }
    });

    // Button label
    button.textContent = isExpanded
      ? (lang === 'es'
          ? 'Ver menos características'
          : 'Show fewer features')
      : button.dataset[lang];

    button.setAttribute('aria-expanded', isExpanded);
  });
});



function updateComparisonLanguage(lang) {

  // Feature labels
  document
    .querySelectorAll('.pricing-comparison .feature-label')
    .forEach(label => {
      if (label.dataset[lang]) {
        label.textContent = label.dataset[lang];
      }
    });

  // Cell values
  document
    .querySelectorAll('.pricing-comparison .cell[data-en]')
    .forEach(cell => {
      cell.textContent = cell.dataset[lang];
    });

  // Tooltips
  document
    .querySelectorAll('.pricing-comparison .cell.feature')
    .forEach(cell => {
      const tooltip = cell.querySelector('.comparison-tooltip');
      if (!tooltip) return;

      tooltip.textContent =
        lang === 'es'
          ? cell.dataset.tipEs
          : cell.dataset.tipEn;
    });

  // Mobile plan labels
  document
    .querySelectorAll('.pricing-comparison .cell[data-plan-en]')
    .forEach(cell => {
      cell.dataset.plan =
        lang === 'es'
          ? cell.dataset.planEs
          : cell.dataset.planEn;
    });
}