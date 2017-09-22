var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newPrice = Math.floor(Math.random() * 100)
 var newItem = {
   [item]: newPrice
 }
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)

 return cart
}

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var outStr = "In your cart you, have "
    for (var i = 0; i < cart.length; i++) {
      var cartItem = Object.keys(cart[i])[0]
      if (cart.hasOwnProperty(cartItem)) {
        var ItemPrice = cart[i][cartItem];
      }
      if (i === cart.length - 1) {
        outStr += `${cartItem} at ${ItemPrice}.`
      } else {
        outStr += `${cartItem} at ${ItemPrice} and `
      }
    }
    console.log(outStr)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
