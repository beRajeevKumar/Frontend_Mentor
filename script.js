"use strict";

const projects = [
  {
    name: "01-Community-Card",
  },
  {
    name: "02-qr-code-component",
  },
  {
    name: "03-social-proof",
  },
  {
    name: "04-nft-project",
  },
  {
    name: "05-intractive-rating",
  },
  {
    name: "06-product-preview",
  },
  {
    name: "07-fylo-two-column-layout",
  },
  {
    name: "08-profile-card",
  },
  {
    name: "09-clipboard-landing-page",
  },
  {
    name: "10-three-column-card",
  },
  {
    name: "11-Order-summery-component",
  },
  {
    name: "12-Huddle-comm-page",
  },
  {
    name: "13-stat-preview-card",
  },
  {
    name: "14-Huddle-landing-page",
  },
  {
    name: "15-Article-Preview",
  },
  {
    name: "16-base-apparel-coming-soon",
  },
  {
    name: "17-advice-generator-app",
  },
  {
    name: "18-chat-app-css-illustration",
  },
  {
    name: "19-news-homepage",
  },
  {
    name: "20-testimonials-grid-section",
  },
  {
    name: "21-ecommerce-product-page",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="./${name}/index.html">
			<img src="./${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
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

// projects.forEach(({ name }, i) => {
//   const splitArr = console.log(splitArr);
// });

// const arr1 = "14-Hudd÷le-landing-page";

// for (let i = 0; i < projects.length; i++) {}
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Animate the logo to fade in and slide up
  gsap.from(".logo", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
  });

  // Animate the heading to fade in and slide up
  gsap.from("h2", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.5,
    ease: "power3.out",
  });

  // Array of project names (you can replace these with your actual project data)
  const projects = ["Project 1", "Project 2", "Project 3"]; 
  const listElement = document.getElementById("list");

  // Create and animate each project list item
  projects.forEach((project, index) => {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = project;

    // Append the list item to the list
    listElement.appendChild(listItem);

    // Animate the list item to fade in and slide up
    gsap.from(listItem, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      delay: 1 + index * 0.2, // Stagger animation after heading animation
      ease: "power3.out",
    });
  });
});
