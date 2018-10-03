window.addEventListener('load', (event) => {
  event.preventDefault();
  const meal = document.querySelector('div.meal-box-content');

  const load = (foodMenu) => {
    foodMenu.forEach((element) => {
      const itemName = element.item_name;
      const price = element.price;
      const foodUrl = element.food_url;
      const template = `
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

      meal.innerHTML += template;
    });
  };

  fetch('https://food-fast-app.herokuapp.com/api/v1/menu', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
    .then((response) => {
      response.json()
        .then((data) => {
          const foodMenu = data.menu;

          load(foodMenu);
        })
        .catch(err => console.log(err));
    });
});
