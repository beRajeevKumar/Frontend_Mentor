"use strict";
const apiUrl = "https://api.adviceslip.com/advice";

const adviceNumber = document.querySelector(".number");
const adviceText = document.querySelector(".advice");
const newAdvice = document.querySelector(".advice-btn");

async function getAdvice(url) {
  const response = await fetch(url);
  const data = await response.json();
  adviceNumber.textContent = data.slip.id;
  adviceText.textContent = data.slip.advice;
}
newAdvice.addEventListener("click", () => {
  getAdvice(apiUrl);
});

// const quote = document.querySelector(".quote");
// const author = document.querySelector(".author");
// const newBtn = document.querySelector(".new-quote");
// const tweetBtn = document.querySelector(".tweet-quote");

// async function getQuote(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   quote.textContent = data.content;
//   author.innerHTML = `&mdash; ${data.author}`;
// }
// getQuote(apiUrl);

// newBtn.addEventListener("click", () => {
//   getQuote(apiUrl);
// });
// tweetBtn.addEventListener("click", () => {
//   const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.textContent}  ${author.textContent}`;
//   window.open(tweetUrl, "_blank");
// });
