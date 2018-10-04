window.addEventListener('load', (event) => {
  event.preventDefault();
  const meal = document.querySelector('div.meal-box-content');

  const load = (foodMenu) => {
    foodMenu.forEach((element) => {
      const itemName = element.item_name;
      const price = element.price;
      const foodUrl = element.food_url;
      const foodOnMenu = `
      <div class="meal-single">
      <div class="meal-img" style="background-image: url(${foodUrl})"></div>
      <div class="meal-info">
        <div class="meal-info-title">${itemName}</div>
        <div class="meal-info-price">
          <span>₦</span>${price}</div>
        <div class="meal-info-cart">
          <div class="to-cart-btn">Add to cart</div>
        </div>
      </div>
    </div>`;

      meal.innerHTML += foodOnMenu;
    });
  };
  document.getElementById('loader').style.display = 'block';
  fetch('https://food-fast-app.herokuapp.com/api/v1/menu', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
    .then((response) => {
      response.json()
        .then((responseObject) => {
          const foodMenu = responseObject.menu;
          load(foodMenu);
          document.getElementById('loader').style.display = 'none';
        })
        .catch((err) => {
          throw Error(err);
        });
    });
});
