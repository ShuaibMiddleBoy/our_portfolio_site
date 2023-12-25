const loginPopup = document.querySelector(".popup-container");
const registerPopup = document.querySelector(".popup-register-container");

function showLoginPopup() {
  loginPopup.style.display = "flex";
}

function hideLoginPopup() {
  loginPopup.style.display = "none";
}


function hideRegisterPopup() {
  registerPopup.style.display = "none";
}

function toggleRegisterForm() {
  loginPopup.style.display = "none";
  registerPopup.style.display = "flex";
}


function handleLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const formData = {email, password}

    fetch("http://localhost:8000/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("Response from server:", data);
       // Save the response data in local storage
       localStorage.setItem('userData', JSON.stringify(data));
  })
  .catch((err) => {
    console.log('Error sending data:', err);
  });
}


function handleRegisterSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('regName').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const formData = {name, phone, email, password, confirmPassword}

  fetch("http://localhost:8000/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
    
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("Response from server:", data);
  })
  .catch((err) => {
    console.log('Error sending data:', err);
  });
}




const userData = JSON.parse(localStorage.getItem('userData'));

// Check if user data and role exist
if (userData && userData.user && userData.user.role === 0) {
  // Display the dashboard link
  const dashboardLink = document.createElement('div');
  dashboardLink.className = 'dashboard';
  dashboardLink.innerHTML = '<a href="./dashboard/">Dashboard</a>';
  document.body.prepend(dashboardLink);
}