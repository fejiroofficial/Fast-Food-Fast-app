/** this is a function that opens the login and signup modal form*/

function openModal() {
  document.getElementById('modal-two').style.display = 'none';
  return document.getElementById('modal').style.display = 'block';
}

/** this is a function that closes the login modal form when a user clicks sign up */

function closeModal() {
  return document.getElementById('modal').style.display = 'none'
}

/** this is a function that closes the signup modal when a user clicks login */

function closeModalTwo() {
  return document.getElementById('modal-two').style.display = 'none'
}

/** this is a function that closes the user login form and opens up the signup form */

function modifyModal() {
  document.getElementById('modal').style.display = 'none';
  return document.getElementById('modal-two').style.display = 'block';
}
