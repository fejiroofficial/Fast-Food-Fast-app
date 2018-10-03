const loginForm = document.forms['loginForm'];
const mailLog = document.getElementById('log-email');
const passLog = document.getElementById('log-password');
const logModal = document.getElementById('log-info');

const testLogEmail = (email) => {
  const emailregex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailregex.test(email);
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = mailLog.value;
  const password = passLog.value;

  if (!password || !email) {
    logModal.style.display = 'block';
    return document.getElementById('modal-info').innerHTML = 'None of the fields can be empty';
  }

  if (password.length < 6) {
    logModal.style.display = 'block';
    return document.getElementById('modal-info').innerHTML = 'Password must be minimum of 6 characters';
  }

  if (!testLogEmail(email)) {
    logModal.style.display = 'block';
    return document.getElementById('modal-info').innerHTML = 'Your Email is invalid!';
  }

  fetch('https://food-fast-app.herokuapp.com/api/v1/auth/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      'email': email,
      'password': password,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      logModal.style.display = 'block';
      document.getElementById('modal-info').innerHTML = data.message;
      localStorage.setItem('jwtoken', data.token);
      localStorage.setItem('fullname', data.fullname);
      localStorage.setItem('firstname', data.firstname);
      localStorage.setItem('lastname', data.lastname);
      localStorage.setItem('email', data.email);
      localStorage.setItem('telephone', data.telephone);
      if (data.success === 'true') {
        document.location.reload();
      }
    })
    .catch(err => console.log(err));
});
const loginSpan = document.getElementsByClassName('cancel-log')[0];
loginSpan.onclick = () => {
  logModal.style.display = 'none';
};
