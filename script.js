"use strict";

const projects = [
  { name: "01-Community-Card", tags: ["HTML", "CSS"] },
  { name: "02-qr-code-component", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "03-social-proof", tags: ["HTML", "CSS"] },
  { name: "04-nft-project", tags: ["HTML", "CSS"] },
  { name: "05-intractive-rating", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "06-product-preview", tags: ["HTML", "CSS"] },
  { name: "07-fylo-two-column-layout", tags: ["HTML", "CSS"] },
  { name: "08-profile-card", tags: ["HTML", "CSS"] },
  { name: "09-clipboard-landing-page", tags: ["HTML", "CSS"] },
  { name: "10-three-column-card", tags: ["HTML", "CSS"] },
  { name: "11-Order-summery-component", tags: ["HTML", "CSS"] },
  { name: "12-Huddle-comm-page", tags: ["HTML", "CSS"] },
  { name: "13-stat-preview-card", tags: ["HTML", "CSS"] },
  { name: "14-Huddle-landing-page", tags: ["HTML", "CSS"] },
  { name: "15-Article-Preview", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "16-base-apparel-coming-soon", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "17-advice-generator-app", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "18-chat-app-css-illustration", tags: ["HTML", "CSS"] },
  { name: "19-news-homepage", tags: ["HTML", "CSS"] },
  { name: "20-testimonials-grid-section", tags: ["HTML", "CSS"] },
  { name: "21-ecommerce-product-page", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "22-Weather-App", tags: ["HTML", "CSS", "JavaScript", "API"] },
  { name: "23-joke-generator", tags: ["HTML", "CSS", "JavaScript", "API"] },
  { name: "24-login-signup", tags: ["HTML", "CSS", "JavaScript", "API"] },
  { name: "26-shoe-website", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "27-Code_Editor", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "30-Age_Calc", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "22-url-shortening", tags: ["HTML", "CSS", "JavaScript", "API"] },
  { name: "23-Weather-App", tags: ["HTML", "CSS", "JavaScript", "API"] },
  { name: "24-joke-generator", tags: ["HTML", "CSS", "JavaScript", "API"] },
  { name: "26-guess-the-number-game", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "26-shoe-website", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "27-swiggy-clone", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "28-Zomato-clone", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "29-to-do-list", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "30-currency-converter", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "31-tic-tac-toe", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "32-calculator-application", tags: ["HTML", "CSS", "JavaScript"] },
  { name: "33-CSS-Animations", tags: ["HTML", "CSS", "JavaScript"] }
];

// Menu toggle functionality
const menuToggle = document.querySelector(".menu-toggle");
const navbarFunction = document.querySelector(".navbar-function");

if (menuToggle && navbarFunction) {
  menuToggle.addEventListener("click", () => {
    navbarFunction.classList.toggle("active"); // Toggle class to show/hide nav
  });
}

// Populate the list of projects dynamically
const list = document.getElementById("list");

if (list) {
  projects.forEach(({ name }, i) => {
    const listItem = document.createElement("li");
    const tags = projects[i].tags
      ? projects[i].tags
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join(" ")
      : "";
    listItem.innerHTML = `
      <a href="./${name}/index.html" target="_blank">
        <img src="./${name}/design/desktop-design.jpg" alt="${name}" />
        <p>${i + 1}. ${formatProjectName(name)}</p>
        <div class="tags">Technologies: ${tags}</div>
      </a>
      <div class="links-container" target="_blank">
        <a href="./${name}/index.html" class="blue">
          <i class="fas fa-eye"></i>
        </a>
      </div>
    `;
    list.appendChild(listItem);
  });
}

function formatProjectName(name) {
  return name
    .split("-")
    .splice(1)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// FAQs Section Script
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    // Toggle the panel's maxHeight for smooth expand/collapse
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Smooth scroll-to-top button
const btn = document.querySelector(".scroll-up-btn");

if (btn) {
  btn.addEventListener("click", () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// GSAP Animations
if (typeof gsap !== "undefined") {
  gsap.from(".navbar", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power2.out",
  });
  gsap.from(".footer", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.5,
  });
}
