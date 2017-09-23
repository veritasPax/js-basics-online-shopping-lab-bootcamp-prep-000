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
  //empty
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var outStr = `In your cart, you have `

    for (var i = 0; i < cart.length; i++) {
      var item = cart[i]
      var itemName = Object.keys(cart[i])[0]
      if (item.hasOwnProperty(itemName)) {
        var itemPrice = cart[i][itemName];
      }
      //single item or last item in cart
      if (i == cart.length - 1) {
        outStr += `${itemName} at $${itemPrice}.`
      }
      //penultimate item where cart has only two items 
      else if (i == cart.length - 2 && cart.length == 2) {
        outStr += `${itemName} at $${itemPrice} and `
      } 
      //penultimate item where cart has > two items
      else if (i == cart.length - 2 && cart.length !== 2) {
        outStr += `${itemName} at $${itemPrice}, and `
      } 
      //subsequent items
      else {
        outStr += `${itemName} at $${itemPrice}, `
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
