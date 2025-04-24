// Age Calculator
function calculateAge() {
  const birthDate = new Date(document.getElementById("dob").value);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  document.getElementById("ageResult").innerText = `You are ${age} years old.`;
}

// Loan Calculator
function calculateLoan() {
  const amount = parseFloat(document.getElementById("loanAmount").value);
  const rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const years = parseInt(document.getElementById("loanTerm").value);
  const payments = years * 12;

  const x = Math.pow(1 + rate, payments);
  const monthly = (amount * x * rate) / (x - 1);

  if (!isNaN(monthly)) {
    document.getElementById("loanResult").innerText = `Monthly Payment: ₹${monthly.toFixed(2)}`;
  } else {
    document.getElementById("loanResult").innerText = "Please enter valid numbers.";
  }
}

// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  document.getElementById("bmiResult").innerText = `Your BMI is: ${bmi.toFixed(2)}`;
}

// Currency Converter
function convertCurrency() {
  const usd = parseFloat(document.getElementById("usdAmount").value);
  const inrRate = 83;
  const inr = usd * inrRate;
  document.getElementById("currencyResult").innerText = `$${usd} = ₹${inr.toFixed(2)}`;
}

// Quotes Generator
const quotes = [
  "Don't watch the clock; do what it does. Keep going.",
  "The best way to predict the future is to create it.",
  "You miss 100% of the shots you don't take.",
  "Stay hungry, stay foolish.",
  "Do something today that your future self will thank you for."
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteBox").innerText = quotes[randomIndex];
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Language Translator (LibreTranslate API)
async function translateText() {
  const text = document.getElementById("textToTranslate").value;
  const lang = document.getElementById("targetLang").value;

  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ q: text, source: "en", target: lang, format: "text" }),
  });

  const data = await res.json();
  document.getElementById("translatedText").innerText = `Translated: ${data.translatedText}`;
}

// Recipe Generator (simulated)
function getRecipe() {
  const ingredients = document.getElementById("ingredients").value;
  const fakeRecipe = `
    Based on: ${ingredients}<br>
    Try making a simple stir fry! Sauté your ingredients with garlic, soy sauce, and a dash of sesame oil.
  `;
  document.getElementById("recipeResult
