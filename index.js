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
    constructor (itemName, quantityField, itemQuantity, itemPrice) {
        this.itemName = itemName
        this.quantityField = quantityField
        this.itemQuantity = itemQuantity
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
        totalpay = totalpay + this.itemPrice};
    deleteItem(){
        if (this.itemQuantity > 0){
            totalItemCount --;
            this.itemQuantity--;
            totalpay = totalpay - this.itemPrice
        };
        icecreamquantity.textContent=`${totalItemCount} Items £${totalpay.toFixed(2)}`;
    }};

// Latte Functionality
let lattequantity = 0;
let latte = new ItemCounting("Latte", document.getElementById("lattecount"), lattequantity, 2.39);

document.getElementById("morelatte").onclick = function(){
    cart["Latte"] = lattequantity
    latte.addItem();
    latte.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lesslatte").onclick = function(){
    latte.deleteItem();
    if (lattequantity=== 0){delete cart ["Latte"]};
    latte.updatingFields();
    updateCartTable(cart);
};

// Americano Functionality
let americanoquantity  = 0;
let americano = new ItemCounting("Americano", document.getElementById("americanocount"), americanoquantity, 1.79);

document.getElementById("moreamericano").onclick = function(){
    cart["Americano"] = americanoquantity
    americano.addItem();
    americano.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lessamericano").onclick = function(){
    if (americanoquantity === 0){delete cart ["Americano"]};
    americano.deleteItem();
    americano.updatingFields();
    updateCartTable(cart);
};

// Flat White Functionality
let flatwhitequantity = 0 ;
let flatWhite = new ItemCounting("Flat White", document.getElementById("flatwhitecount"), flatwhitequantity, 1.64);

document.getElementById("moreflatwhite").onclick = function(){
    cart["Flat White"] = flatwhitequantity;
    flatWhite.addItem();
    flatWhite.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lessflatwhite").onclick = function(){
    if (flatwhitequantity === 0){delete cart ["Flat White"]};
    flatWhite.deleteItem();
    flatWhite.updatingFields();
    updateCartTable(cart);
};

// Cappucino Functionality
let cappucinoquantity = 0;
let cappucino = new ItemCounting("Cappuccino", document.getElementById("cappuccinocount"), cappucinoquantity, 3.09);

document.getElementById("morecappuccino").onclick = function(){
    cart["Cappuccino"] = cappucinoquantity;
    cappucino.addItem();
    cappucino.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lesscappuccino").onclick = function(){
    if (cappucinoquantity === 0){delete cart ["Cappuccino"]};
    cappucino.deleteItem();
    cappucino.updatingFields();
    updateCartTable(cart);
};

// Cookies Functionality
let cookiesquantity = 0;
let cookies = new ItemCounting("Chocolate Chip Cookie", document.getElementById("cookiescount"), cookiesquantity, 0.78);

document.getElementById("morecookies").onclick = function(){
    cart["Chocolate Chip Cookie"] = cookiesquantity;
    cookies.addItem();
    cookies.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lesscookies").onclick = function(){
    cart["Chocolate Chip Cookie"] = cookiesquantity;
    if (cookiesquantity === 0){delete cart ["Chocolate Chip Cookie"]}
    cookies.deleteItem();
    cookies.updatingFields();
    updateCartTable(cart);
};

// Brownies Functionality
let browniesquantity = 0;
let brownies = new ItemCounting("Brownie", document.getElementById("browniescount"), browniesquantity, 1.05);

document.getElementById("morebrownies").onclick = function(){
    cart["Brownie"] = browniesquantity;
    brownies.addItem();
    brownies.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lessbrownies").onclick = function(){
    if (browniesquantity === 0){delete cart ["Brownie"]};
    brownies.deleteItem();
    brownies.updatingFields();
    updateCartTable(cart);
};

// Donut Functionality
let donutquantity = 0;
let donut = new ItemCounting("Sprinkled Donut", document.getElementById("donutcount"), donutquantity, 0.75);

document.getElementById("moredonut").onclick = function(){
    cart["Sprinkled Donut"] = donutquantity;
    donut.addItem();
    donut.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lessdonut").onclick = function(){
    if (donutquantity === 0){delete cart ["Sprinkled Donut"]};
    donut.deleteItem();
    donut.updatingFields();
    updateCartTable(cart);
};

// Ice Cream Functionality
let icecreamquantity = 0;
let icecream = new ItemCounting("Dairy Milk Ice Cream", document.getElementById("icecreamcount"), icecreamquantity, 1.68);

document.getElementById("moreicecream").onclick = function(){
    cart["Dairy Milk Ice Cream"] = icecreamquantity;
    icecream.addItem();
    icecream.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lessicecream").onclick = function(){
    if (icecreamquantity === 0){delete cart ["Dairy Milk Ice Cream"]};
    icecream.deleteItem();
    icecream.updatingFields();
    updateCartTable(cart);
};

// Chocolate Milkshake Functionality
let chocomilkquantity = 0;
let chocolateMilkshake = new ItemCounting("Milk Chocolate Milkshake", document.getElementById("chocomilkcount"), chocomilkquantity, 1.99);

document.getElementById("morechocomilk").onclick = function(){
   cart["Milk Chocolate Milkshake"] = chocomilkquantity;
   chocolateMilkshake.addItem();
   chocolateMilkshake.updatingFields();
   updateCartTable(cart);
};

document.getElementById("lesschocomilk").onclick = function(){
    if (chocomilkquantity === 0){delete cart ["Milk Chocolate Milkshake"]};
    chocolateMilkshake.deleteItem();
    chocolateMilkshake.updatingFields();
    updateCartTable(cart);
};

// Oreo Milkshake Functionality
let oreomilkquantity = 0;
let oreoMilkshake = new ItemCounting("Oreo Milkshake", document.getElementById("oreomilkcount"), oreomilkquantity, 2.10);

document.getElementById("moreoreomilk").onclick = function(){
   cart["Oreo Milkshake"] = oreomilkquantity;
   oreoMilkshake.addItem();
   oreoMilkshake.updatingFields();
   updateCartTable(cart);
};
document.getElementById("lessoreomilk").onclick = function(){
    if (oreomilkquantity === 0){delete cart ["Oreo Milkshake"]};
    oreoMilkshake.deleteItem();
    oreoMilkshake.updatingFields();
    updateCartTable(cart);
};


// Strawberry Milkshake Functionality
let strawmilkquantity = 0;
let strawberryMilkshake = new ItemCounting("Strawberry Milkshake", document.getElementById("strawmilkcount"), strawmilkquantity, 1.89);

document.getElementById("morestrawmilk").onclick = function(){
   cart["Strawberry Milkshake"] = strawmilkquantity;
   strawberryMilkshake.addItem();
   strawberryMilkshake.updatingFields();
   updateCartTable(cart);
};
document.getElementById("lessstrawmilk").onclick = function(){
    if (strawmilkquantity === 0){delete cart ["Strawberry Milkshake"]};
    strawberryMilkshake.deleteItem();
    strawberryMilkshake.updatingFields();
    updateCartTable(cart);
};

// Belgian Chocolate Milkshake Functionality
let belgianquantity = 0;
let belgianChocolateMilkshake = new ItemCounting("Belgian Chocolate Milkshake", document.getElementById("belgiancount"), belgianquantity, 1.68);

document.getElementById("morebelgian").onclick = function(){
    cart["Belgian Chocolate Milkshake"] = belgianquantity;
    belgianChocolateMilkshake.addItem();
    belgianChocolateMilkshake.updatingFields();
    updateCartTable(cart);
};

document.getElementById("lessbelgian").onclick = function(){
    if (belgianquantity === 0){delete cart ["Belgian Chocolate Milkshake"]};
    belgianChocolateMilkshake.deleteItem();
    belgianChocolateMilkshake.updatingFields();
    updateCartTable(cart)
};

// Fruit Punch Smoothie Functionality
let punchquantity = 0;
let fruitPunchSmoothie = new ItemCounting("Fruit Punch Smoothie", document.getElementById("punchcount"), punchquantity, 3.04);

document.getElementById("morepunch").onclick = function(){
    cart["Fruit Punch Smoothie"] = punchquantity;
    fruitPunchSmoothie.addItem();
    fruitPunchSmoothie.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lesspunch").onclick = function(){
    if (punchquantity === 0){delete cart ["Fruit Punch Smoothie"]};
    fruitPunchSmoothie.deleteItem();
    fruitPunchSmoothie.updatingFields();
    updateCartTable(cart);
};

// Pineapple Smoothie Functionality
let pinequantity = 0;
let pineappleSmoothie = new ItemCounting("Pineapple Smoothie", document.getElementById("pinecount"), pinequantity, 2.98);

document.getElementById("morepine").onclick = function(){
    cart["Pineapple Smoothie"] = pinequantity;
    pineappleSmoothie.addItem();
    pineappleSmoothie.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lesspine").onclick = function(){
    if (pinequantity === 0){delete cart ["Pineapple Smoothie"]};
    pineappleSmoothie.deleteItem();
    pineappleSmoothie.updatingFields();
    updateCartTable(cart);
};

// Apple and Mango Smoothie Functionality
let mangoquantity = 0;
let AppleMangoSmoothie = new ItemCounting("Apple and Mango Smoothie", document.getElementById("mangocount"), mangoquantity, 2.68);

document.getElementById("moremango").onclick = function(){
    cart["Apple and Mango Smoothie"] = mangoquantity;
    AppleMangoSmoothie.addItem();
    AppleMangoSmoothie.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lessmango").onclick = function(){
    if (mangoquantity === 0){delete cart ["Apple and Mango Smoothie"]};
    AppleMangoSmoothie.deleteItem();
    AppleMangoSmoothie.updatingFields();
    updateCartTable(cart);
};

// Dragon Fruit and Raspberry Smoothie Functionality
let dragquantity = 0;
let dragonFruitRaspberrySmoothie = new ItemCounting("Dragon Fruit and Raspberry Smoothie", document.getElementById("dragcount"), dragquantity, 2.38);

document.getElementById("moredrag").onclick = function(){
    cart["Dragon Fruit and Raspberry Smoothie"] = dragquantity;
    dragonFruitRaspberrySmoothie.addItem();
    dragonFruitRaspberrySmoothie.updatingFields();
    updateCartTable(cart);
};
document.getElementById("lessdrag").onclick = function(){
    if (dragquantity === 0){delete cart ["Dragon Fruit and Raspberry Smoothie"]};
    dragonFruitRaspberrySmoothie.deleteItem();
    dragonFruitRaspberrySmoothie.updatingFields();
    updateCartTable(cart)
};
 
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
    }};