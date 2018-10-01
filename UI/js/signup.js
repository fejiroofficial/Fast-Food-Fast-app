const signupBtn = document.getElementById('sign-btn');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mailSign = document.getElementById('email');
const tel = document.getElementById('telephone');
const passSign = document.getElementById('password');

const testEmail = (email) => {
  const emailregex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailregex.test(email);
};

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let firstName = fname.value;
  let lastName = lname.value;
  let email = mailSign.value;
  const telephone = tel.value;
  let password = passSign.value;

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
          // window.location.assign('../index.html');
        })
        .catch(err => console.log(err));
    });
});
const modal = document.getElementById('info');
const span = document.getElementsByClassName("cancel")[0];
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}