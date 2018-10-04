const mealForm = document.forms['mealForm'];
const food = document.getElementById('foodName');
const price = document.getElementById('foodPrice');
const foodAddress = document.getElementById('foodUrl');
const mealModal = document.getElementById('meal-log-info');


/**
 * This method adds an event listener to the meal form
 *
 * @method
 * @name addEventListener
 * @param {string} submit browser event.
 * @param {function} function  the function to run when the event occurs
 * @returns {Object} data returned from the server
 */

mealForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const foodName = food.value;
  const foodPrice = price.value;
  const foodUrl = foodAddress.value;

  if (!foodName || !foodPrice || !foodUrl) {
    mealModal.style.display = 'block';
    return document.getElementById('meal-info-panel').innerHTML = 'None of the fields can be empty';
  }

  fetch('https://food-fast-app.herokuapp.com/api/v1/menu', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': localStorage.getItem('jwtoken'),
    },
    body: JSON.stringify({
      'itemName': foodName,
      'price': foodPrice,
      'foodUrl': foodUrl,
    }),
  })
    .then(response => response.json())
    .then((responseObject) => {
      mealModal.style.display = 'block';
      document.getElementById('meal-info-panel').innerHTML = responseObject.message;
    })
    .catch((err) => {
      throw Error(err);
    });
});
const loginSpan = document.getElementsByClassName('cancel-info')[0];
loginSpan.onclick = () => {
  mealModal.style.display = 'none';
};
