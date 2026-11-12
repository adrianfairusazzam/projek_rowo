document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");

  observer.observe(section);
});

const buttons = document.querySelectorAll(".link-button");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-6px) scale(1.02)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0px)";
  });
});

const logo = document.querySelector(".logo");

if (logo) {
  setInterval(() => {
    logo.animate(
      [
        {
          transform: "translateY(0px)",
        },

        {
          transform: "translateY(-8px)",
        },

        {
          transform: "translateY(0px)",
        },
      ],
      {
        duration: 2500,
      },
    );
  }, 2600);
}

document.querySelectorAll(".link-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    let circle = document.createElement("span");

    let diameter = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = diameter + "px";
    circle.style.height = diameter + "px";

    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.background = "rgba(255,255,255,.35)";
    circle.style.transform = "scale(0)";
    circle.style.left = e.offsetX - diameter / 2 + "px";
    circle.style.top = e.offsetY - diameter / 2 + "px";
    circle.style.animation = "ripple .6s linear";

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});

window.addEventListener("load", () => {
  console.log("Warung Apung Barokah 354");
});

const footer = document.querySelector("footer");

if (footer) {
  footer.innerHTML = `© ${new Date().getFullYear()} Warung Apung Barokah 354 | Perahu Wisata Barokah Rowo Jombor`;
}
