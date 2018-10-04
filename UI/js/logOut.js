function logOut() {
  localStorage.removeItem('jwtoken');
  localStorage.removeItem('fullname');
  localStorage.removeItem('firstname');
  localStorage.removeItem('lastname');
  localStorage.removeItem('email');
  localStorage.removeItem('telephone');
  location.assign('../UI/index.html');
}