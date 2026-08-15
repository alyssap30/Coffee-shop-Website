//Products Page
let cart = {};
let totalItemCount = 0;  
let totalpay = 0; 
const itemCountField = document.getElementById("itemcount");
const checkoutPriceField = document.getElementById("items-and-price-display");
const paymentPriceField = document.getElementById("amount-due");

console.log(cart);
console.log(`Item count: ${totalItemCount}`);
console.log(`Amount due: £${totalpay.toFixed(2)}`);

// Dynamic cart update based on items selected
function updateCartTable(cart){
    const cartTableBody = document.querySelector("#cart-table tbody");
    let rows = "";
    Object.entries(cart).forEach(([item, quantity]) => {
    rows += `
        <tr>
        <td>${item}</td>
        <td>${quantity}</td>
        </tr>`;});
    cartTableBody.innerHTML = rows};

// Uses functions to adjust elements based on user interaction
class ItemCounting {
    constructor (itemName, quantityField, itemPrice) {
        this.itemName = itemName
        this.quantityField = quantityField
        this.itemQuantity = 0
        this.itemPrice = itemPrice
    }
    updatingFields() {
        itemCountField.textContent = `${totalItemCount} Items £${totalpay.toFixed(2)}`;
        this.quantityField.textContent = ` ${this.itemQuantity} `
        checkoutPriceField.textContent = `${totalItemCount} Items £${totalpay.toFixed(2)}`;
        paymentPriceField.textContent = `Amount due: £${totalpay.toFixed(2)}`};
    addItem(){
        this.itemQuantity ++;
        totalItemCount ++;
        this.quantityField.textContent = ` ${this.itemQuantity} `;
        cart[this.itemName] = this.itemQuantity;
        totalpay = totalpay + this.itemPrice;
        this.updatingFields()
        updateCartTable()
    };
    deleteItem(){
        if (this.itemQuantity > 0){
            totalItemCount --;
            this.itemQuantity--;
            totalpay = totalpay - this.itemPrice;
            if (this.itemQuantity === 0){delete cart [this.itemName]};
            this.updatingFields()
            updateCartTable()
        }
    }
}

// Object of items sold
const menuItems = {
    latte: new ItemCounting("Latte", document.getElementById("lattecount"), 2.39),
    americano: new ItemCounting("Americano", document.getElementById("americanocount"), 1.79),
    flatwhite: new ItemCounting("Flat White", document.getElementById("flatwhitecount"), 1.64),
    cappucino: new ItemCounting("Cappuccino", document.getElementById("cappuccinocount"), 3.09),
    cookies: new ItemCounting("Chocolate Chip Cookie", document.getElementById("cookiescount"), 0.78),
    brownies: new ItemCounting("Brownie", document.getElementById("browniescount"), 1.05),
    donut: new ItemCounting("Sprinkled Donut", document.getElementById("donutcount"), 0.75), 
    icecream: new ItemCounting("Dairy Milk Ice Cream", document.getElementById("icecreamcount"), 1.68),
    chocomilk: new ItemCounting("Milk Chocolate Milkshake", document.getElementById("chocomilkcount"), 1.99),
    oreoMilkshake: new ItemCounting("Oreo Milkshake", document.getElementById("oreomilkcount"), 2.10),
    strawmilk: new ItemCounting("Strawberry Milkshake", document.getElementById("strawmilkcount"), 1.89),
    belgian: new ItemCounting("Belgian Chocolate Milkshake", document.getElementById("belgiancount"), 1.68),
    punch: new ItemCounting("Fruit Punch Smoothie", document.getElementById("punchcount"), 3.04),
    pine: new ItemCounting("Pineapple Smoothie", document.getElementById("pinecount"), 2.98),
    mango: new ItemCounting("Apple and Mango Smoothie", document.getElementById("mangocount"), 2.68),
    drag: new ItemCounting("Dragon Fruit and Raspberry Smoothie", document.getElementById("dragcount"), 2.38),
}

Object.keys(menuItems).forEach(key => {
    // Declaring Variables holding buttons 
    const moreButton = document.getElementById(`more${key}`);
    const lessButton = document.getElementById(`less${key}`);
    // Creating the functionality for the 2 declared buttons
    moreButton.onclick= function(){menuItems[key].addItem()}
    lessButton.onclick= function(){menuItems[key].deleteItem()}
})

// View Cart Table
document.getElementById("pay-button").onclick= function () {
    document.getElementById("checkout-box").style.display = "block";
}
document.getElementById("close-checkout-box").onclick= function() {
    document.getElementById("checkout-box").style.display = "none";
}

// Go to Checkout 
// Checkout validation
document.getElementById("paycheckout").onclick = function() {
    const PaymentMethod = document.querySelector('input[name="card"]:checked');
    const CardNumber = document.getElementById("card");
    const ExpiryDate = document.getElementById("exdate");
    const CVNumber = document.getElementById("cv");
    const SuccessfulPayment = document.getElementById("successful-payment-box");

    if  (CardNumber.value.trim().length !== 16) {
        const CardNumberLength = CardNumber.value.trim().length;
        alert("Card number must be 16 digits. You have entered " + CardNumberLength + " digits.");
        return};
    if (CVNumber.value.trim().length !== 3) {
        alert("CV number must be 3 digits")
        return};

    if (!PaymentMethod ||
        CardNumber.value.trim() === "" || 
        ExpiryDate.value.trim() === "" || 
        CVNumber.value.trim() === "") {
            document.getElementById("error-pay").textContent = "Please fill out all fields";
            document.getElementById("error-pay").style.color = "red"}
    else {
        document.getElementById("paymentmethodbox").style.display = "none";
        alert("Payment Successful!")
        lattequantity = 0;
        americanoquantity = 0;
        flatwhitequantity = 0;
        cappucinoquantity = 0;
        cookiesquantity = 0;
        browniesquantity = 0;
        icecreamquantity = 0;
        donutquantity = 0;
        chocomilkquantity = 0;
        strawmilkquantity = 0;
        oreomilkquantity = 0;
        belgianquantity = 0;
        punchquantity = 0;
        pinequantity = 0;
        mangoquantity = 0;
        dragquantity = 0;
        cart = {};
        totalItemCount = 0;  
        totalpay = 0;  
        sessionStorage.clear();
        document.getElementById("itemcart").style.display = "none";
        document.getElementById("itemcount").textContent = "0 Items £0.00";
        document.getElementById("checkoutprice").textContent= "0 Items £0.00";
    }}