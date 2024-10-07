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
  {
    name: "23-Weather-App",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="./${name}/index.html" target="_blank">
			<img src="./${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
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
