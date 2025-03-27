function increaseQuantity() {
  let qty = document.getElementById("quantity");
  qty.value = parseInt(qty.value) + 1;
}

function decreaseQuantity() {
  let qty = document.getElementById("quantity");
  if (parseInt(qty.value) > 1) {
    qty.value = parseInt(qty.value) - 1;
  }
}

function addToCart() {
  let qty = document.getElementById("quantity").value;
  alert(`Added ${qty} item(s) to the cart!`);
}
