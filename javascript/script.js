let price = 499;
let discount = 15;

function promoCalculator(price, discount) {
    let finalDiscount = 100 - discount;
    let finalPrice = (price * finalDiscount) / 100;

    return finalPrice;
}

function promoCalculate() {
    let inputCode = document.getElementById("inputCode");
    let inputCodeValue = inputCode.value;

    if(inputCodeValue == "vintage2022") {
        let finalCost = promoCalculator(price, discount);

        let resultDiscount = document.getElementById("resultDiscount");
        resultDiscount.innerText = `Price with discount USD $${finalCost}`;
    } else if (inputCodeValue != "vintage2022") {
        let resultDiscount = document.getElementById("resultDiscount");
        resultDiscount.innerText = "Invalid promo code";
    }
}