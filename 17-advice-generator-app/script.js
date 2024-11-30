"use strict";
const apiUrl = "https://api.adviceslip.com/advice";

const adviceNumber = document.querySelector(".number");
const adviceText = document.querySelector(".advice");
const newAdvice = document.querySelector(".advice-btn");
const loadingIndicator = document.querySelector(".loading");

async function fetchWithTimeout(resource, options = {}) {
  const { timeout=5000 }=options; 
  const controller=new AbortController();
  const id=setTimeout(() => controller.abort(), timeout);
  
  const response=await fetch(resource, {
    ...options,
    signal: controller.signal
  });

  clearTimeout(id);
  return response;
}

async function getAdvice(url) {
  newAdvice.disabled = true; 
  loadingIndicator.style.display = "block";

  try {
    const response = await fetchWithTimeout(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    adviceNumber.textContent = data.slip.id;
    adviceText.textContent = data.slip.advice;
  } catch (error) {
    adviceText.textContent = "Failed to fetch advice";
    console.error("Error:", error);
  } finally {
    loadingIndicator.style.display = "none"; 
    newAdvice.disabled = false;
  }
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
