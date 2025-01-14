# currencyConverter
Here’s a **README.md** for your Currency Converter project:

---

# Currency Converter

A simple, user-friendly currency converter that allows you to convert amounts between different currencies. It uses live exchange rates fetched from an external API to provide real-time conversion.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [API Used](#api-used)
- [License](#license)

---

## Features

- Convert any amount from one currency to another.
- Supports multiple currencies like USD, INR, EUR, and more.
- Displays the exchange rate result in a clear, readable format.
- Responsive design that adapts well to mobile and desktop devices.
- Flags for the currencies are displayed next to the dropdowns for better UX.

---

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```

2. Open the project folder:
   ```bash
   cd currency-converter
   ```

3. Open `index.html` in your browser to see the project in action.

---

## Usage

1. Open the `index.html` file in any modern browser.
2. Enter the amount you want to convert.
3. Select the **From** and **To** currencies using the dropdown menus.
4. Click the **Get Exchange Rate** button to see the converted value.
5. The result will display below the button in the format:
   ```plaintext
   1USD = 80INR
   ```
   The exchange rate will be updated live, based on the most recent data.

---

## Tech Stack

- **HTML**: For the structure of the page.
- **CSS**: To style the currency converter and make it visually appealing.
- **JavaScript**: For the logic of fetching currency exchange rates and displaying the result.
- **API**: The exchange rate data is fetched from [ExchangeRate-API](https://v6.exchangerate-api.com/) to get live exchange rates.

---

## API Used

- **ExchangeRate-API**: Provides free currency exchange rate data.
  - [API Documentation](https://www.exchangerate-api.com/)
  - The API used in this project is: `https://v6.exchangerate-api.com/v6/39e6e7ab8f6f6c15af507658/latest/USD`

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

**Feel free to contribute to this project!** 

---

This README provides a clean, structured way to explain your project to others, helping users understand the features, installation steps, and the technologies behind your currency converter.