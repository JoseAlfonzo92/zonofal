// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {

  // CACHE ELEMENTS
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
  const cookieForm = document.getElementById("cookie-form");
  const messageBox = document.getElementById("cookie-message");
  const hamburger = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.getElementById('more-links');

  // LANGUAGE SETUP
  let currentLanguage = localStorage.getItem("preferredLanguage") || 
                        (navigator.language.startsWith("es") ? "es" : "en");
  document.documentElement.lang = currentLanguage;

  // LANGUAGE SWITCH FUNCTION 
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

  // LANGUAGE TOGGLE BUTTONS
  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const newLang = currentLanguage === "en" ? "es" : "en";
      switchLanguage(newLang);
    });
  });

  // Initial setup
  switchLanguage(currentLanguage);

  //  CONTACT FORM VALIDATION 
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

 // FAQ TOGGLE
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
        }, 400); // match CSS transition duration
      }
    }

    if (icon) {
      icon.classList.toggle('fa-chevron-down', expanded);
      icon.classList.toggle('fa-chevron-up', !expanded);
    }
  });
});


  // DESKTOP DROPDOWN MENU
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

  // HAMBURGER MENU (MOBILE)
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

  // SCROLL REVEAL ANIMATIONS
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

  // PORTFOLIO SLIDER
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

  // IMAGE GALLERY SLIDER
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

  // COOKIE FORM
  if (cookieForm) {
    cookieForm.addEventListener("submit", e => {
      e.preventDefault();
      const preferences = {
        analytics: document.getElementById("analytics-cookies").checked,
        preference: document.getElementById("preference-cookies").checked,
        marketing: document.getElementById("marketing-cookies").checked,
      };
      localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
      const lang = document.documentElement.lang === "es" ? "es" : "en";
      const message = {
        en: "Your cookie preferences have been saved.",
        es: "Tus preferencias de cookies han sido guardadas."
      };
      messageBox.textContent = message[lang];
      messageBox.classList.add("visible");
      setTimeout(() => messageBox.classList.remove("visible"), 5000);
    });
  }

}); // END DOMContentLoaded


// HEADER SCROLL BEHAVIOR 
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