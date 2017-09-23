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
    var outStr = `In your cart, you have `
    
    for (var i = 0; i < cart.length; i++) {
      var currentItem = cart[i]
      var currentItemName = Object.keys(cart[i])[0]
      if (currentItem.hasOwnProperty(cartItem)) {
        var ItemPrice = cart[i][cartItem];
      }
      if (i === cart.length - 1) {
        outStr += `${currentItemName} at ${ItemPrice}.`
      } else {
        outStr += `${currentItemName} at ${ItemPrice} and `
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
