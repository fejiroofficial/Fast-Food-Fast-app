const cartBtn = document.getElementById('auth-box');
const cartItems = document.querySelector('div.cart-items');

cartBtn.addEventListener('click', (event) => {
  const loadCart = (foodCart) => {
    foodCart.forEach((eachFood) => {
      const itemName = eachFood.itemName;
      const itemPrice = eachFood.itemPrice;
      const itemQuantity = eachFood.itemQuantity;
      const itemTotal = eachFood.itemTotal;
      const foodOnCart = `
      <div class="cart-item">
      <div class="cart-food-name">${itemName}</div>
      <div class="cart-food-price"><span>₦</span>${itemPrice}</div>
      <div class="cart-food-quantity">${itemQuantity}</div>
      <div class="cart-food-total"><span>₦</span>${itemTotal}</div>
      </div>
`;
      cartItems.innerHTML += foodOnCart;
    });
  };
  fetch('https://pacific-reaches-76232.herokuapp.com/api/v1/cart', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': localStorage.getItem('jwtoken'),
    },
  })
    .then((response) => {
      response.json()
        .then((dataFromCart) => {
          const foodCart = dataFromCart.cart;
           loadCart(foodCart);
        })
        .catch((err) => {
          throw Error(err)
        });
    });
});
