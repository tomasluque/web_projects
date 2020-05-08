const main = document.getElementById("main");
const add = document.getElementById("add-user");
const double = document.getElementById("double");
const showMillionaires = document.getElementById("show-millionaires");
const sort = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

// Fetch random user and add money
// Use https://randomuser.me/ API
async function getRandomUser() {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
    };

    addData(newUser);
}

function addData(obj) {
    data.push(obj);
    updateDOM();
}

function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";

    providedData.forEach((item) => {
        const element = document.createElement("div");
        formattedMoney = formatNumberAsMoney(item.money);
        element.classList.add("person");
        element.innerHTML = `<strong>${item.name}</strong>$${formattedMoney}`;
        main.appendChild(element);
    });
}

function formatNumberAsMoney(number) {
    parsedNumber = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return parsedNumber;
}

function doubleMoney(providedData = data) {
    data = data.map((user) => {
        return { ...user, money: user.money * 2 };
    });
    updateDOM();
}

function hideBeggars(providedData = data) {
    data = data.filter((user) => user.money >= 1000000);
    updateDOM();
}

function sortByMoney(providedData = data) {
    data = data.sort((a, b) => b.money - a.money);

    updateDOM();
}

function calculateWealth() {
    let totalWealth = data.reduce((acc, item) => {
        return (acc += item.money);
    }, 0);

    console.log(totalWealth);

    formattedMoney = formatNumberAsMoney(totalWealth);

    const element = document.createElement("div");
    element.innerHTML = `<h3>Total<strong>$${formattedMoney}</strong></h3>`;
    main.appendChild(element);
}
// Event Handlers
add.addEventListener("click", (res) => {
    getRandomUser();
});
double.addEventListener("click", (res) => {
    doubleMoney();
});
showMillionaires.addEventListener("click", (res) => {
    hideBeggars();
});
sort.addEventListener("click", (res) => {
    sortByMoney();
});
calculateWealthBtn.addEventListener("click", (res) => {
    calculateWealth();
});

getRandomUser();
getRandomUser();
getRandomUser();
