//Cart Functionality..>(Increments cart count when a product is added).

let cartCount = 0; //initialize cart count to 0.

function addToCart() {
  cartCount++; // Increments cartCount when the "Buy Now Button is clicked"
  document.getElementById("cart-count").innerText = cartCount;
  document.getElementById("cart-message").innerText =
    "Items in cart: " + cartCount;
}

//Product Searching..>(Hides or show products based on user input).

function filterDeals() {
  let query = document.getElementById("search").value.toLowerCase(); //using .toLowerCase()--> The reason for this is to ensure a case-insensitive search.
  let deals = document.querySelectorAll(".deal-card");
  //loops through all deal-cart elements.
  deals.forEach((deal) => {
    let text = deal.innerText.toLowerCase();
    if (text.includes(query)) {
      deal.style.display = "block"; //Hides Others.
    } else {
      deal.style.display = "none"; //Hides Others.
    }
  });
}

//Login Validation..>(Ensures username/password meet length requirements)

function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username.length < 3 || password.length < 6) {
    alert(
      "Username must be at least 3 characters and password at least 6 characters."
    ); //Display an alert if username is less than 3 characters and password is less than 6 character. if valid show "login Successful"
    return false;
  }
  alert("Login successful!");
  return true;
}
