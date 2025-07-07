document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
  
    sliders.forEach((slider) => {
      const slides = slider.querySelectorAll(".slide");
      const nextBtn = slider.querySelector(".next");
      const prevBtn = slider.querySelector(".prev");
      let current = 0;
  
      const showSlide = (index) => {
        slides.forEach((slide, i) => {
          slide.classList.remove("active");
          if (i === index) slide.classList.add("active");
        });
      };
  
      const nextSlide = () => {
        current = (current + 1) % slides.length;
        showSlide(current);
      };
  
      const prevSlide = () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      };
  
      nextBtn.addEventListener("click", nextSlide);
      prevBtn.addEventListener("click", prevSlide);
  
      // Auto slide
      setInterval(nextSlide, 4000);
    });
  
    // Contact form handler
    document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you! We'll contact you soon.");
      this.reset();
    });
  });
  