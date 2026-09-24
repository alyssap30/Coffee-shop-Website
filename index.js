// Navbar 
const path = window.location.pathname.split("/").pop() || "index.html";
let activePage;
if (path === "products.html") activePage = "products";
else if (path === "about-us.html") activePage = "about us";
else if (path === "login.html") activePage = "login";
else activePage = "home";

function pageSwitching(location) {window.location.href = location;}

const homeBtn = document.getElementById("home-btn");
const productsBtn = document.getElementById("products-btn");
const aboutUsBtn = document.getElementById("about-us-btn");
const loginBtn = document.getElementById("login-btn"); 
const noAccountBtn = document.getElementById("noAccountBtn");
 
if (homeBtn) homeBtn.onclick = () => pageSwitching("index.html");
if (productsBtn) productsBtn.onclick = () => pageSwitching("products.html");
if (aboutUsBtn) aboutUsBtn.onclick = () => pageSwitching("about-us.html");
if (loginBtn) loginBtn.onclick = () => pageSwitching("login.html");
if (noAccountBtn) noAccountBtn.onclick = () => pageSwitching("index.html");

// Products Page
if (activePage == "products") {
    // Variable Declaration
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
    // Uses functions to adjust elements based on user interaction
    class ItemCounting {
        constructor (itemName, quantityField, itemPrice) {
            this.itemName = itemName
            this.quantityField = quantityField
            this.itemQuantity = 0
            this.itemPrice = itemPrice
        }
        // Updates Page Elements based on user interaction
        updatingFields() {
            itemCountField.textContent = `${totalItemCount} Items £${totalpay.toFixed(2)}`;
            this.quantityField.textContent = ` ${this.itemQuantity} `
            checkoutPriceField.textContent = `${totalItemCount} Items £${totalpay.toFixed(2)}`;
            paymentPriceField.textContent = `Amount due: £${totalpay.toFixed(2)}`
            this.updateCartTable()
        };
        // Increases the quantity of the item based on the button triggered
        addItem(){
            this.itemQuantity ++;
            totalItemCount ++;
            this.quantityField.textContent = ` ${this.itemQuantity} `;
            cart[this.itemName] = [this.itemQuantity, this.itemPrice] ;
            totalpay = totalpay + this.itemPrice;
            this.updatingFields()
        };
        // Decreases the quantity of the item based on the button triggered
        deleteItem(){
            if (this.itemQuantity > 0){
                totalItemCount --;
                this.itemQuantity--;
                totalpay = totalpay - this.itemPrice;
                if (this.itemQuantity === 0){delete cart [this.itemName]};
                this.updatingFields()
                
            }
        }
        // When the quantity of an items changes the table summary is adjusted accordingly
        updateCartTable(){
            const cartTableBody = document.querySelector("#cart-table tbody");
            let rows = "";
            Object.entries(cart).forEach(([item, [quantity, price]]) => {
            rows += `
                <tr>
                <td>${item}</td>
                <td>${quantity}</td>
                <td>£${(price * quantity).toFixed(2)}</td>
                </tr>`;});
            cartTableBody.innerHTML = rows
        };
    }

    // Object of items sold
    const menuItems = {
        latte: new ItemCounting("Latte", document.getElementById("latte-count"), 2.39),
        americano: new ItemCounting("Americano", document.getElementById("americano-count"), 1.79),
        flatwhite: new ItemCounting("Flat White", document.getElementById("flatwhite-count"), 1.64),
        cappuccino: new ItemCounting("Cappuccino", document.getElementById("cappuccino-count"), 3.09),
        cookies: new ItemCounting("Chocolate Chip Cookie", document.getElementById("cookies-count"), 0.78),
        brownies: new ItemCounting("Brownie", document.getElementById("brownies-count"), 1.05),
        donut: new ItemCounting("Sprinkled Donut", document.getElementById("donut-count"), 0.75), 
        icecream: new ItemCounting("Dairy Milk Ice Cream", document.getElementById("icecream-count"), 1.68),
        chocomilk: new ItemCounting("Milk Chocolate Milkshake", document.getElementById("chocomilk-count"), 1.99),
        oreomilk: new ItemCounting("Oreo Milkshake", document.getElementById("oreomilk-count"), 2.10),
        strawmilk: new ItemCounting("Strawberry Milkshake", document.getElementById("strawmilk-count"), 1.89),
        belgian: new ItemCounting("Belgian Chocolate Milkshake", document.getElementById("belgian-count"), 1.68),
        fruitpunch: new ItemCounting("Fruit Punch Smoothie", document.getElementById("fruit-punch-count"), 3.04),
        pineapple: new ItemCounting("Pineapple Smoothie", document.getElementById("pineapple-count"), 2.98),
        mango: new ItemCounting("Apple and Mango Smoothie", document.getElementById("mango-count"), 2.68),
        dragon: new ItemCounting("Dragon Fruit and Raspberry Smoothie", document.getElementById("dragon-count"), 2.38),
    }

    Object.keys(menuItems).forEach(key => {
        // Declaring Variables holding buttons 
        const moreButton = document.getElementById(`more-${key}`);
        const lessButton = document.getElementById(`less-${key}`);
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
    document.getElementById("link-to-checkout").onclick= function() {
        if (cart.length === 0) {
            alert("Error: Cart is empty")
        } else {
            document.getElementById("paymentmethodbox").style.display = "block";
        }
    }

    document.getElementById("ridofpayment").onclick= function() {
        document.getElementById("paymentmethodbox").style.display = "none";
    }
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
            CardNumber.value.trim() === "" || ExpiryDate.value.trim() === "" || CVNumber.value.trim() === "") {
                document.getElementById("error-pay").textContent = "Please fill out all fields";
                document.getElementById("error-pay").style.color = "red"}
        else {
            document.getElementById("paymentmethodbox").style.display = "none";
            alert("Payment Successful!")
            cart = {};

            totalItemCount = 0;  
            totalpay = 0;  
            sessionStorage.clear();
            document.getElementById("itemcart").style.display = "none";
            document.getElementById("checkout-box").style.display = "none";
            document.getElementById("itemcount").textContent = "0 Items £0.00";
            document.getElementById("checkoutprice").textContent= "0 Items £0.00";
        }}
}

// login.html
else if (activePage == "login") {
    // Variable Declaration
    let fn = sessionStorage.getItem("fn");
    let ln = sessionStorage.getItem("ln");
    let email = sessionStorage.getItem("email");
    let pass= sessionStorage.getItem("pass");
    let fnInput = document.getElementById("fn");
    let lnInput = document.getElementById("ln");
    let emailInput = document.getElementById("email");
    let passInput = document.getElementById("pass");

    // Presence Check
    function presenceCheck (fieldVar, fieldName, errorId) {
        if (fieldVar.value.trim() === "") {
            errorId.textContent = `Please enter your ${fieldName}`
            return false;
        }
        else {
            errorId.textContent = ""
            return true;
        }
    }
    // Length Check
    function lengthCheck (fieldVar, fieldName, errorId, minLength = 0, maxLength = 100) {
        if (fieldVar.value.length < minLength) {
            errorId.textContent = `${fieldName} must be ${minLength} characters long`
            return false
        }
        else if (fieldVar.value.length > maxLength) {
            errorId.textContent = `${fieldName} must be less than ${maxLength} long`
            return false
        }
        else {
            return true
        }
    }

    // Checking valid user input
    document.getElementById("createaccountbutton").onclick= function(){
        let valid = true;
        // First name field
        valid = presenceCheck(fnInput, "First Name", document.getElementById("fnerror")) && valid;
        // Last name field
        valid = presenceCheck(lnInput, "Last Name", document.getElementById("lnerror")) && valid;
        // Email field
        valid = presenceCheck(emailInput, "Email", document.getElementById("emailerror")) && valid;
        // Password field
        valid = presenceCheck(passInput, "Password", document.getElementById("passerror")) && valid;
        valid = lengthCheck(passInput, "Password", document.getElementById("passerror"), 8) && valid;

        if (valid) {
            pageSwitching("index.html")
            console.log(`The first name is ${fn}, The last name is ${ln}, The email is ${email}` )
        }};
            
        // Password Generator 
        function GeneratePassword(length, includeLowcase, includeNumbers, includeUppercase, includeSymbols){
            const LowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
            const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const Symbols = "!£$%&*@#";
            const numbers = "0123456789";

            let password = "";
            let allowedcharacters = LowerCaseChars + Symbols + UppercaseChars + numbers;

            for(let i = 0; i < length; i++){
                const randomIndex = Math.floor(Math.random() * allowedcharacters.length);
                password += allowedcharacters[randomIndex]
            }
            return password;
        };
        const passwordLength = 12;

        document.getElementById("generatepassword").onclick= function(){
            const passwordGenerated = GeneratePassword(passwordLength)
            console.log(`Generated Password: ${passwordGenerated}`);
            passInput.value = passwordGenerated;
            sessionStorage.setItem("pass", passwordGenerated);
            document.getElementById("passerror").textContent= "";
            alert(`Your password is ${passwordGenerated}`);

        };
              
        // View / Hide Password
        const passwordfield = document.getElementById("pass");
        const ShowPassword = document.getElementById("viewiconshow");
        const HidePassword = document.getElementById("viewiconhide");
        HidePassword.style.display = "none";

        ShowPassword.onclick= function(){
            passwordfield.type = "text";
            ShowPassword.style.display = "none";
            HidePassword.style.display = "inline";};

        HidePassword.onclick= function(){
            passwordfield.type = "password";
            ShowPassword.style.display = "inline";
            HidePassword.style.display = "none";}
}
// about-us.html
else if (activePage == "about us") {
    const JobName = document.getElementById("jobname");
            const ApplyBox = document.getElementById("applybox");

            // Class for applying to jobs
            class JobApplying {
                constructor(jobTitle) {
                    this.jobTitle = jobTitle
                }
                applyingForJob() {
                    ApplyBox.style.display = "block";
                    JobName.textContent= this.jobTitle;    
                }
            }
            // Contains  all active jobs
            const jobsObj = {
                1: new JobApplying("Barista"), 2: new JobApplying("Waiting Staff"), 
                3: new JobApplying("Cleaner"), 4: new JobApplying("Head Chef"),
                5: new JobApplying("Chef"), 6: new JobApplying("Food Supplier"),
            }
            // Functionality of buttons
            Object.keys(jobsObj).forEach(key => { 
                // Applying buttons
                const applyingFromLearnMoreTab = document.getElementById(`apply-from-more${key}`);
                const applyBtn = document.getElementById(`apply-for-job${key}`);
                // Learn more buttons
                const openMoreBtn = document.getElementById(`learnmore${key}`);
                const closeMoreBtn = document.getElementById(`close-more${key}`)
                // Applying functions
                applyingFromLearnMoreTab.onclick= function(){
                    jobsObj[key].applyingForJob()
                    document.getElementById(`learnmorebox${key}`).style.display = "none";
                }
                applyBtn.onclick= function(){jobsObj[key].applyingForJob()}
                // Learn more box functions
                openMoreBtn.onclick = function() {document.getElementById(`learnmorebox${key}`).style.display= "block"}
                closeMoreBtn.onclick = function() {document.getElementById(`learnmorebox${key}`).style.display= "none"}
            })
            
            // Closes the Application form
            document.getElementById("canceljob").onclick = function() {
                ApplyBox.style.display = "none";
            };
            // Sending application to hiring team
            document.getElementById("ApplyJob").onclick = function() {
                const FullName = document.getElementById("full-name");
                const Email = document.getElementById("email");
                const PhoneNumber = document.getElementById("phone-num");
                const StartDate = document.getElementById("start-date");
                if (!FullName.value.trim() === "" && !Email.value.trim() === "" && 
                    !PhoneNumber.value.trim() === "" && !StartDate.value.trim() === "") {
                        alert("Please fill out all fields")}
                else {
                    alert("Application sent to hiring team")
                    ApplyBox.style.display = "none"
                }
            }
}