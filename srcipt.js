// ===============================
// KALECI WEBSITE - INTERACTIONS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // MYSPACE-STYLE NAVIGATION
  // -------------------------------

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });


  // -------------------------------
  // MUSIC PLAYER
  // -------------------------------

  const songSelect = document.getElementById("songSelect");
  const nowPlaying = document.getElementById("nowPlaying");

  if (songSelect && nowPlaying) {
    songSelect.addEventListener("change", () => {

      if (songSelect.value === "") {
        nowPlaying.textContent = "♡ choose a song ♡";
      } else {
        nowPlaying.textContent =
          "♫ now playing: " + songSelect.options[songSelect.selectedIndex].text;
      }

    });
  }


  // -------------------------------
  // ROOM COMPUTER
  // -------------------------------

  const computer = document.getElementById("computerPopup");

  window.openComputer = function () {
    if (computer) {
      computer.classList.add("show");
    }
  };

  window.closeComputer = function () {
    if (computer) {
      computer.classList.remove("show");
    }
  };


  // Close computer when clicking outside
  if (computer) {
    computer.addEventListener("click", (event) => {
      if (event.target === computer) {
        computer.classList.remove("show");
      }
    });
  }


  // -------------------------------
  // ROOM OBJECTS
  // -------------------------------

  window.roomMessage = function (message) {
    const box = document.getElementById("roomMessage");

    if (box) {
      box.textContent = message;
      box.classList.add("show");

      setTimeout(() => {
        box.classList.remove("show");
      }, 2500);
    }
  };


  // -------------------------------
  // BESTIE BUTTON
  // -------------------------------

  window.bestieMessage = function () {
    const message = document.getElementById("bestieMessage");

    if (message) {
      message.textContent = "♡ my favorite person fr ♡";
      message.classList.add("show");

      setTimeout(() => {
        message.classList.remove("show");
      }, 2500);
    }
  };


  // -------------------------------
  // SURVEY
  // -------------------------------

  window.submitSurvey = function () {
    const input = document.getElementById("surveyAnswer");
    const response = document.getElementById("surveyResponse");

    if (!input || !response) return;

    if (input.value.trim() === "") {
      response.textContent = "♡ tell me something first!";
      return;
    }

    response.textContent = "♡ saved! thank you for answering ♡";
    input.value = "";
  };


  // -------------------------------
  // LITTLE FLOATING SPARKLES
  // -------------------------------

  function createSparkle(x, y) {
    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";
    sparkle.textContent = "✦";

    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1200);
  }


  // Random sparkles
  setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    createSparkle(x, y);
  }, 1800);


  // Sparkle where you click
  document.addEventListener("click", (event) => {
    createSparkle(event.clientX, event.clientY);
  });


  // -------------------------------
  // ESCAPE CLOSES POPUPS
  // -------------------------------

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (computer) {
        computer.classList.remove("show");
      }
    }
  });


  // -------------------------------
  // SCROLL ANIMATIONS
  // -------------------------------

  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          entry.target.classList.remove("section-hidden");
        }

      });

    },
    {
      threshold: 0.15
    }
  );


  sections.forEach(section => {
    section.classList.add("section-hidden");
    observer.observe(section);
  });


  // -------------------------------
  // NAVIGATION ACTIVE SECTION
  // -------------------------------

  const pageSections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {

    let current = "";

    pageSections.forEach(section => {

      const sectionTop = section.offsetTop - 180;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }

    });

  });


  // -------------------------------
  // SMALL IMAGE TILT
  // -------------------------------

  const photos = document.querySelectorAll(".photo-card, .bestie-card");

  photos.forEach(photo => {

    photo.addEventListener("mousemove", (event) => {

      const rect = photo.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;

      photo.style.transform =
        `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

    });

    photo.addEventListener("mouseleave", () => {
      photo.style.transform = "";
    });

  });


  // -------------------------------
  // REDUCE ANIMATIONS IF NEEDED
  // -------------------------------

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

    document.querySelectorAll("*").forEach(element => {
      element.style.animationDuration = "0.01ms";
      element.style.transitionDuration = "0.01ms";
    });

  }

});