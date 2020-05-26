((document) => {
  initializeSlides();

  function initializeSlides() {
    const allSlides = document.querySelectorAll(".slider .slide");

    allSlides.forEach((slide, index) => {
      slide.setAttribute("data-slide", index);
      if (index === 0) {
        slide.classList.add("slide-active");
        slide.classList.add("slide-in");
      }

      const nextSlideButton = slide.querySelector(
        ".slider-controls .next-button"
      );

      const prevSlideButton = slide.querySelector(
        ".slider-controls .prev-button"
      );
      //   prevSlideButton.setAttribute("data-target", prevSlideTarget);

      addListenersToButtons(
        prevSlideButton,
        nextSlideButton,
        index,
        allSlides.length
      );
    });
  }

  function addListenersToButtons(
    prevSlideButton,
    nextSlideButton,
    index,
    allSlidesLenght
  ) {
    const nextSlideTarget = index < allSlidesLenght - 1 ? index + 1 : 0;
    const prevSlideTarget = index > 0 ? index - 1 : allSlidesLenght - 1;
    console.log({ index, nextSlideTarget, prevSlideTarget });
    //  nextSlideButton.setAttribute("data-target", nextSlideTarget);
    nextSlideButton.addEventListener("click", () =>
      transitionSlides(index, nextSlideTarget)
    );

    prevSlideButton.addEventListener("click", () =>
      transitionSlides(index, prevSlideTarget)
    );
  }

  function activateSlide(index) {
    const slideToActivate = document.querySelector(
      `.slide[data-slide="${index}"]`
    );
    slideToActivate.classList.add("slide-active");
  }

  function inactivateSlide(index) {
    const slideToActivate = document.querySelector(
      `.slide[data-slide="${index}"]`
    );
    slideToActivate.classList.remove("slide-active");
  }

  function transitionSlides(current, target) {
    console.log({ current, target });
    activateSlide(target);
    animateOutSlide(current);

    inactivateSlide(current);
    animateInSlide(target);
  }

  function animateInSlide(index) {
    const slideToAnimate = document.querySelector(
      `.slide[data-slide="${index}"]`
    );
    slideToAnimate.classList.remove("slide-out");
    slideToAnimate.classList.add("slide-in");
  }

  function animateOutSlide(index) {
    const slideToAnimate = document.querySelector(
      `.slide[data-slide="${index}"]`
    );

    slideToAnimate.classList.remove("slide-in");
    slideToAnimate.classList.add("slide-out");
  }
})(document);
