window.onload = () => {
  const token = localStorage.getItem('jwtoken');
  if (token === 'null' || token === 'undefined') {
    console.log('you dont have an account, please signup');
  } else if (token) {
    const fullname = localStorage.getItem('fullname');
    document.getElementById('auth-box').innerHTML = `<a href="./cart.html"><i class="material-icons cart-icon">shopping_cart</i></a>
<div class="prof-name-box">
<i class="material-icons acct-icon">account_circle</i>
<div id="prof-name"><a href="./user.html">${fullname}</a></div>
</div>`;
    document.getElementById('user-name').innerHTML = `${fullname}`;
  }
};
