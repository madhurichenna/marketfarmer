console.log("JS is working");
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popupModal');
  const openBtn = document.getElementById('openPopupBtn');
  const closeBtn = document.getElementById('closePopupBtn');
  const showLogin = document.getElementById('showLogin');
  const showSignUp = document.getElementById('showSignUp');
  const loginForm = document.getElementById('loginForm');
  const signUpForm = document.getElementById('signUpForm');
  
  document.getElementById("openPopupBtn").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("closePopupBtn").classList.remove("hidden");
});


  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('hidden');
    signUpForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  showLogin.addEventListener('click', () => {
    signUpForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });

  showSignUp.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
  });

  document.getElementById('signUpSubmit').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Signed up!");
    popup.classList.add('hidden');
  });

  document.getElementById('loginSubmit').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Logged in!");
    popup.classList.add('hidden');
  });
});

