let jeansPrice = (2499 - (41 / 100 * 2499) - 29);
let bagPrice = (15599 - (10 / 100 * 15599) - 272);
let bagValue = Math.round((jeansPrice + bagPrice + 25 + 20) * 118 / 100);
let bagSummary = `Your final myntra bag amount is ₹ ${bagValue}`;
console.log(bagSummary);
let cartQuantity = 0;
document.querySelector('.cart-summary').innerText = `Your Bag Has  ${cartQuantity}  Items`;
