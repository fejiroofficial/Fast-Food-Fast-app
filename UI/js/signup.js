const signupBtn = document.getElementById('sign-btn');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mailSign = document.getElementById('email');
const tel = document.getElementById('telephone');
const passSign = document.getElementById('password');
const modal = document.getElementById('info');

/** this is a function that tests for email input using regex*/
const testEmail = (email) => {
  const emailregex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailregex.test(email);
};

/**
 * This method adds an event listener to the signup form button
 *
 * @method
 * @name addEventListener
 * @param {string} click browser event.
 * @param {function} function  the function to run when the event occurs
 * @returns {Object} data returned from the server
 */

signupBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const firstName = fname.value;
  const lastName = lname.value;
  const email = mailSign.value;
  const telephone = tel.value;
  const password = passSign.value;

  if (!firstName || !lastName || !password || !email || !telephone) {
    modal.style.display = 'block';
    return document.getElementById('modal-info-panel').innerHTML = 'None of the fields can be empty';
  }

  if (!testEmail(email)) {
    modal.style.display = "block";
    return document.getElementById('modal-info-panel').innerHTML = 'Your Email is invalid!';
  }

  fetch('https://food-fast-app.herokuapp.com/api/v1/auth/signup', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "firstname": firstName,
      "lastname": lastName,
      "email": email,
      "telephone": telephone,
      "password": password,
    })
  })
    .then((response) => {
      response.json()
        .then((data) => {
          localStorage.setItem('jwtoken', data.token);
          modal.style.display = "block";
          document.getElementById('modal-info-panel').innerHTML = data.message;
        })
        .catch((err) => {
          throw Error(err);
        });
    });
});

const span = document.getElementsByClassName('cancel')[0];
span.onclick = () => {
  modal.style.display = 'none';
}
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
