const dessertCards = document.querySelector(".desserts");
const cart = document.querySelector(".cart");
const cartItemList = document.querySelector(".cart-item-list");
const cartFooter = document.querySelector(".cart-footer");
const cardTemplate = document.getElementById("card-template");
const cartItemTemplate = document.getElementById("cart-item-template");
const orderItemTemplate = document.getElementById("order-item-template");
const orderConfirmed = document.querySelector(".order-confirmed");
const overlay = document.querySelector(".overlay");

var data;

fetch("./data.json")
	.then((res) => res.json())
	.then((jsonData) => {
		data = jsonData;
		createDessertCards(data);
	})
	.catch((error) => console.error("Error loading the data:", error));

function createDessertCards(desserts) {
	desserts.forEach((dessert) => {
		const cardClone = cardTemplate.content.cloneNode(true);

		const sources = cardClone.querySelectorAll("source");
		sources[0].srcset = dessert.image.desktop;
		sources[1].srcset = dessert.image.tablet;
		cardClone.querySelector("picture img").src = dessert.image.mobile;
		cardClone.querySelector(".category").textContent = dessert.category;
		cardClone.querySelector(".name").textContent = dessert.name;
		cardClone.querySelector(".price").textContent = `$${dessert.price.toFixed(2)}`;
		cardClone.querySelector(".card").id = `dessert-card-${dessert.name.replaceAll(" ", "-").toLowerCase()}`;

		dessertCards.appendChild(cardClone);
	});
}

function handleAddToCart(event) {
	const card = event.target.closest(".card");
	const id = card.id;
	card.querySelector(".add-to-cart-btn").classList.add("hidden");
	card.querySelector(".minus-plus-btn").classList.remove("hidden");

	const values = data.find((element) => element.name.replaceAll(" ", "-").toLowerCase() === id.replace("dessert-card-", ""));
	cartItemClone = cartItemTemplate.content.cloneNode(true);
	cartItemClone.querySelector(".name").textContent = values.name;
	cartItemClone.querySelector(".quantity span").textContent = 1;
	cartItemClone.querySelector(".price-per span").textContent = parseFloat(values.price).toFixed(2);
	cartItemClone.querySelector(".cart-item").id = `cart-item-${values.name.replaceAll(" ", "-").toLowerCase()}`;

	cartItemList.appendChild(cartItemClone);
	updateCart();
}

function handleIncrementQuantity(event) {
	const card = event.target.closest(".card");
	const button = event.target.closest(".minus-plus-btn");
	const id = card.id;
	const cartItem = document.getElementById(`cart-item-${id.replace("dessert-card-", "")}`);
	cartItem.querySelector(".quantity span").textContent = parseInt(cartItem.querySelector(".quantity span").textContent) + 1;
	button.querySelector(".quantity-display").textContent = parseInt(button.querySelector(".quantity-display").textContent) + 1;
	updateCart();
}

function handleDecrementQuantity(event) {
	const card = event.target.closest(".card");
	const button = event.target.closest(".minus-plus-btn");
	const id = card.id;
	const cartItem = document.getElementById(`cart-item-${id.replace("dessert-card-", "")}`);
	cartItem.querySelector(".quantity span").textContent = parseInt(cartItem.querySelector(".quantity span").textContent) - 1;
	button.querySelector(".quantity-display").textContent = parseInt(button.querySelector(".quantity-display").textContent) - 1;
	updateCart();
}

function handleRemoveCartItem(event) {
	removeItemFromCart(event.target.closest(".cart-item"));
	updateCart();
}

function handleConfirmOrder(event) {
	const cartItems = event.target.closest(".cart").querySelectorAll(".cart-item");
	orderConfirmed.classList.remove("hidden");
	overlay.classList.remove("hidden");
	const orderItemList = orderConfirmed.querySelector(".item-list");

	for (const item of cartItems) {
		const orderItemClone = orderItemTemplate.content.cloneNode(true);
		orderItemClone.querySelector(".name").textContent = item.querySelector(".name").textContent;
		orderItemClone.querySelector(".quantity span").textContent = item.querySelector(".quantity span").textContent;
		orderItemClone.querySelector("img").src = data.find(
			(element) => element.name.replaceAll(" ", "-").toLowerCase() === item.id.replace("cart-item-", "")
		).image.thumbnail;
		orderItemClone.querySelector(".price-per span").textContent = item.querySelector(".price-per span").textContent;
		orderItemClone.querySelector(".price-total span").textContent = (
			parseFloat(item.querySelector(".quantity span").textContent) * parseFloat(item.querySelector(".price-per span").textContent)
		).toFixed(2);

		orderItemList.append(orderItemClone);
	}
	orderConfirmed.querySelector(".order-total span").textContent = cartFooter.querySelector(".total span").textContent;
	window.scrollTo(0, 0);
}

function handleStartNewOrder(event) {
	orderConfirmed.classList.add("hidden");
	overlay.classList.add("hidden");
	const items = cartItemList.querySelectorAll(".cart-item");
	for (const item of items) {
		removeItemFromCart(item);
	}
	const orderItems = orderConfirmed.querySelectorAll(".order-item");
	for (const item of orderItems) {
		orderConfirmed.querySelector(".item-list").removeChild(item);
	}
	updateCart();
}

function updateCart() {
	if (cartItemList.querySelectorAll(".cart-item").length > 0) {
		cart.querySelector(".empty-cart").classList.add("hidden");
		cart.querySelector(".cart-items").classList.remove("hidden");
		cart.querySelector(".cart-footer").classList.remove("hidden");
	}
	const items = cartItemList.querySelectorAll(".cart-item");
	var sum = 0.0;
	var count = 0;
	for (const item of items) {
		if (parseInt(item.querySelector(".quantity span").textContent) < 1) {
			removeItemFromCart(item);
		}

		count += parseInt(item.querySelector(".quantity span").textContent);

		const productSum = parseFloat(item.querySelector(".price-per span").textContent) * parseFloat(item.querySelector(".quantity span").textContent);
		item.querySelector(".price-total span").textContent = productSum.toFixed(2);
		sum += productSum;
	}

	if (cartItemList.querySelectorAll(".cart-item").length < 1) {
		cart.querySelector(".empty-cart").classList.remove("hidden");
		cart.querySelector(".cart-items").classList.add("hidden");
		cart.querySelector(".cart-footer").classList.add("hidden");
	}

	cartFooter.querySelector(".total span").textContent = sum.toFixed(2);
	cart.querySelector(".cart-counter span").textContent = count;
}

function removeItemFromCart(item) {
	cartItemList.removeChild(item);
	const card = document.getElementById(`dessert-card-${item.querySelector(".name").textContent.replaceAll(" ", "-").toLowerCase()}`);

	const minusPlusButton = card.querySelector(".minus-plus-btn");
	const addToCartButton = card.querySelector(".add-to-cart-btn");
	minusPlusButton.querySelector(".quantity-display").textContent = 1;
	minusPlusButton.classList.add("hidden");
	addToCartButton.classList.remove("hidden");
}
