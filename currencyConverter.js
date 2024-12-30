import countryList from './codes.js';
// Base URL for the ExchangeRate API with your API key
const BASE_URL = "https://v6.exchangerate-api.com/v6/39e6e7ab8f6f6c15af507658/latest";

// Get the dropdown elements and button
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns with currency codes (assuming `countryList` is already defined)
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to update exchange rates using ExchangeRate API
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const fromCurrency = fromCurr.value.toUpperCase();
    const toCurrency = toCurr.value.toUpperCase();

    // Construct the API URL for the base currency
    const URL = `${BASE_URL}/${fromCurrency}`;
    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        let data = await response.json();
        let rate = data.conversion_rates[toCurrency];  // Access conversion rate for the target currency

        if (!rate) {
            throw new Error(`Exchange rate not available for ${toCurrency}`);
        }

        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurrency} = ${finalAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        msg.innerText = "Error fetching exchange rate. Please try again later.";
    }
};

// Function to update the country flag based on currency selection
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Event listener for button click to convert currency
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Fetch exchange rate when the page loads
window.addEventListener("load", () => {
    updateExchangeRate();
});
