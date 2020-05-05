const currencyOne_El = document.getElementById("currency-one");
const currencyTwo_El = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rate and update dom
function calculate() {
    const currency_one = currencyOne_El.value;
    const currence_two = currencyTwo_El.value;

    fetch(
        `https://prime.exchangerate-api.com/v5/07763629da725e355dc24172/latest/${currency_one}`
    )
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currence_two];
            amountTwo.value = +amountOne.value * rate;
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currence_two}`;
        });
}

function swapCurrencies() {
    const currency_one = currencyOne_El.value;
    const currence_two = currencyTwo_El.value;
    currencyOne_El.value = currence_two;
    currencyTwo_El.value = currency_one;
    calculate();
}

// Event listeners
currencyOne_El.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo_El.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);
swap.addEventListener("click", swapCurrencies);
calculate();
