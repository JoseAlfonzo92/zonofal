export function initGallerySlider(root = document) {
  const slider = root.querySelector(".slider");

  if (!slider) return;

  const images = slider.querySelectorAll(".container-images img");
  const arrows = slider.querySelectorAll(".arrow");

  if (!images.length || !arrows.length) return;

  const totalImages = images.length;

  const getActiveIndex = () =>
    [...images].findIndex((img) => img.classList.contains("active"));

  const updateSlide = (newIndex, direction) => {
    const currentIndex = getActiveIndex();

    if (currentIndex === -1 || currentIndex === newIndex) return;

    if (newIndex >= totalImages) newIndex = 0;
    if (newIndex < 0) newIndex = totalImages - 1;

    const currentImage = images[currentIndex];
    const nextImage = images[newIndex];

    // Prepare incoming image
    nextImage.classList.add(direction);
    nextImage.setAttribute("aria-hidden", "false");

    // Force browser reflow
    void nextImage.offsetWidth;

    // Animate
    currentImage.classList.add(direction);
    nextImage.classList.add("active");
    nextImage.classList.remove(direction);

    currentImage.setAttribute("aria-hidden", "true");

    setTimeout(() => {
        currentImage.classList.remove(
            "active",
            "to_left",
            "to_right"
        );
    }, 500);
    
  };

  const goNext = () => {
    updateSlide(
      getActiveIndex() + 1,
      "to_left"
    );
  };

  const goPrevious = () => {
    updateSlide(
      getActiveIndex() - 1,
      "to_right"
    );
  };

  // Mouse
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      if (arrow.classList.contains("left")) {
        goPrevious();
      } else {
        goNext();
      }
    });

    // Keyboard (Enter / Space)
    arrow.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;

      e.preventDefault();

      if (arrow.classList.contains("left")) {
        goPrevious();
      } else {
        goNext();
      }
    });
  });

  // Keyboard arrows
  slider.tabIndex = 0;

  slider.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        goPrevious();
        break;

      case "ArrowRight":
        e.preventDefault();
        goNext();
        break;
    }
  });

  //swipe on mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const minSwipeDistance = 50;

    slider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;

    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
        goNext();
    } else {
        goPrevious();
    }
    }, { passive: true });

    
}