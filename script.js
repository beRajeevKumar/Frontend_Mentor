"use strict";
const projects = [
  {
    name: "01-Community-Card",
    tags: ["HTML", "CSS"],
  },
  {
    name: "02-qr-code-component",
    tags: ["HTML","CSS", "JavaScript"],
  },
  {
    name: "03-social-proof",
    tags: ["HTML", "CSS"],
  },
  {
    name: "04-nft-project",
    tags: ["HTML", "CSS"],
  },
  {
    name: "05-intractive-rating",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "06-product-preview",
    tags: ["HTML", "CSS"],
  },
  {
    name: "07-fylo-two-column-layout",
    tags: ["HTML", "CSS"],
  },
  {
    name: "08-profile-card",
    tags: ["HTML", "CSS"],
  },
  {
    name: "09-clipboard-landing-page",
    tags: ["HTML", "CSS"],
  },
  {
    name: "10-three-column-card",
    tags: ["HTML", "CSS"],
  },
  {

    name: "11-Order-summery-component",
    tags: ["HTML", "CSS"],

  },
  {
    name: "12-Huddle-comm-page",
    tags: ["HTML", "CSS"],
  },
  {
    name: "13-stat-preview-card",
    tags: ["HTML", "CSS"],
  },
  {
    name: "14-Huddle-landing-page",
    tags: ["HTML", "CSS"],
  },
  {
    name: "15-Article-Preview",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "16-base-apparel-coming-soon",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "17-advice-generator-app",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "18-chat-app-css-illustration",
    tags: ["HTML", "CSS"],
  },
  {
    name: "19-news-homepage",
    tags: ["HTML", "CSS"],
  },
  {
    name: "20-testimonials-grid-section",
    tags: ["HTML", "CSS"],
  },
  {
    name: "21-ecommerce-product-page",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "23-Weather-App",
    tags: ["HTML", "CSS", "JavaScript", "API",],
  },
  {
    name: "24-joke-generator",
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    name: "26-responsive-restaurant-website",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "23-login-signup",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name }, i) => {
  const listItem = document.createElement("li");
  const tags = projects[i].tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");
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

function formatProjectName(name) {
  return name
    .split("-")
    .splice(1)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}


// FAQs Section Script
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

