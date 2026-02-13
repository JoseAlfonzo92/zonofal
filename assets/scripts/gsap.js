// Animation for "Coming Soon" page using GSAP and SplitText
gsap.registerPlugin(SplitText); // Register the SplitText plugin for character-level animation

document.fonts.ready.then(() => {
  const heading = document.querySelector(".split"); // Select the heading element with class "split"
  if (!heading) return; // Exit if the heading is not found

  // Determine current language from <html lang="...">
  const lang = document.documentElement.lang === "es" ? "es" : "en";

  // Get the localized message from data attributes (e.g., data-en or data-es)
  const message = heading.getAttribute(`data-${lang}`) || "Coming Soon";

  heading.textContent = message; // Set the heading text to the localized message
  gsap.set(heading, { opacity: 0 }); // Hide the heading initially

  // Create an IntersectionObserver to trigger animation when heading enters viewport
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        obs.unobserve(entry.target); // Stop observing once triggered

        gsap.set(heading, { opacity: 1 }); // Make heading visible

        // Split the heading text into individual characters
        const split = SplitText.create(heading, {
          type: "chars", // Split by characters
          charsClass: "char" // Assign class "char" to each character
        });

        // Animate each character with staggered motion and rotation
        gsap.from(split.chars, {
          y: -120, // Start above
          opacity: 0, // Start invisible
          rotation: "random(-60, 60)", // Random rotation
          stagger: 0.08, // Delay between each character
          duration: 1.5, // Animation duration
          ease: "power3.out" // Easing function
        });
      }
    });
  }, { threshold: 0.4 }); // Trigger when 40% of heading is visible

  observer.observe(heading); // Start observing the heading
});