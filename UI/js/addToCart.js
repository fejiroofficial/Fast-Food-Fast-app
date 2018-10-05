function addToCart(item) {
  const foodId = item.id;
  const defaultQuantity = 1; 
  fetch('https://pacific-reaches-76232.herokuapp.com/api/v1/cart', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': localStorage.getItem('jwtoken'),
    },
    body: JSON.stringify({
      "foodId": foodId,
      "quantity": defaultQuantity,
    })
  })
    .then((response) => {
      response.json()
        .then((data) => {
          console.log(data);
          if(data.message === 'Invalid user authorization token') {
            openModal();
          }
        })
        .catch(err => console.log(err));
    });
}

