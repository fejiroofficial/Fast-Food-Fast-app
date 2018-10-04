/** this is a function that uploads user information when login is successful */

window.onload = () => {
  const token = localStorage.getItem('jwtoken');
  if (token === 'null' || token === 'undefined') {
    console.log('you dont have an account, please signup');
  } else if (token) {
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    const email = localStorage.getItem('email');
    const telephone = localStorage.getItem('telephone');
    document.getElementById('auth-box').innerHTML = `<a class="shopping-cart" href="./cart.html">
    <div class="la-cart">
      <i class="fa fa-shopping-cart la-cart" ></i>
    </div>
  </a>
<div class="prof-name-box">
<i class="fa fa-user-circle-o" id="user-circle"></i>
<div id="prof-name"><a href="./user.html">${firstname}</a></div>
<div class="dropdown-content">
<div class="drop-item"><a id="profile-link" href="./user.html">Profile</a></div>
<div class="drop-item" onclick="logOut()">Sign out</div>
</div>
</div>`;
    document.getElementById('user-name').innerHTML = `${fullname}`;

    document.getElementById('user-acct-box').innerHTML =  ` <div class="sec-header">Account Settings</div>
    <div class="sec-content">
      <p>This is your private area. Please keep your information up to date.</p>

      <form action="#" method="post" class="user-form" name="user-form">
        <h5 class="form-h5">Personal information</h5>
        <div class="field">
          <label class="name-label first-name-label">First name</label>
          <div class="control">
            <input type="text" id="info-firstname" name="firstname-form" required="required" class="input" value=${firstname}>
          </div>
        </div>

        <div class="field">
            <label class="name-label">Last name</label>
            <div class="control">
              <input type="text" id="info-lastname" name="fullname-form" required="required" class="input" value=${lastname}>
            </div>
          </div>

        <h5 class="form-h5">Contact Details</h5>
        <div class="field">
          <label class="email-label"> Email</label>
          <div class="control">
            <input type="email" id="info-email" name="personal_email" required="required" class="input" value=${email}>
          </div>
        </div>

        <div class="field">
          <label class="tel-label">Telephone</label>
          <div class="control">
            <input type="tel" id="info-tel" name="personal_tel" required="required" class="input" value=${telephone}>
          </div>
        </div>

        <div class="btn-field">
          <div class="control">
            <button type="submit" id="savePersonalData" name="personal_save" class="data-btn">Save Changes</button>
          </div>
        </div>
      </form>
    </div>`;
  }
};
