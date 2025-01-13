function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  var nameError = document.getElementById("nameError");
  var imgnameError = document.getElementById("imgName");
  var name = document.getElementById("username").value.trim();
  var imgname = document.getElementById("username")
  if (name === "") {
    nameError.textContent = "Name is required.";
    nameError.style.color = "red";
    nameError.style.visibility = "visible";
    imgnameError.style.visibility = "visible";
    imgname.style.border = "2px solid hsl(0, 100%, 74%)";
    isValid = false;
  } else {
    nameError.textContent = "error";
    nameError.style.visibility = "hidden";
    imgnameError.style.visibility = "hidden";
    imgname.style.border = "2px solid rgb(128, 128, 128)";
  }

  var nameError = document.getElementById("lastNameError");
  var name = document.getElementById("lastName").value.trim();
  var LastName = document.getElementById("lastName")
  var imgLastName = document.getElementById("imgLastName");
  if (name === "") {
    nameError.textContent = "Last is required.";
    nameError.style.color = "red";
    nameError.style.visibility = "visible";
    imgLastName.style.visibility = "visible";
    LastName.style.border = "2px solid hsl(0, 100%, 74%)";
    isValid = false;
  } else {
    nameError.textContent = "error";
    nameError.style.visibility = "hidden";
    imgLastName.style.visibility = "hidden";
    LastName.style.border = "2px solid rgb(128, 128, 128)";
  }

  var email = document.getElementById("email").value.trim();
  var emailError = document.getElementById("emailError");
  var emailTag = document.getElementById("email")
  var imgEmail = document.getElementById("imgEmail")
  if (email === "") {
    emailError.textContent = "Email is required.";
    emailError.style.color = "red";
    emailError.style.visibility = "visible";
    imgEmail.style.visibility = "visible";
    emailTag.style.border = "2px solid hsl(0, 100%, 74%)";
    isValid = false;
  } else {
    emailError.textContent = "error";
    if (validateEmail(email)) {
      emailError.textContent = "error";
      emailError.style.visibility = "hidden";
      imgEmail.style.visibility = "hidden";
      emailTag.style.border = "2px solid rgb(128, 128, 128)";
    } else {
      emailError.textContent = "Email is not valid.";
      emailError.style.color = "red";
      emailError.style.visibility = "visible";
      imgEmail.style.visibility = "visible";
      emailTag.style.border = "2px solid hsl(0, 100%, 74%)";
      isValid = false;
    }
  }

  var password = document.getElementById("password").value.trim();
  var passwordError = document.getElementById("passwordError");
  var passwordTag = document.getElementById("password")
  var imgPassword = document.getElementById("imgPassword")
  if (password === "") {
    passwordError.textContent = "Password is required.";
    passwordError.style.visibility = "visible";
    imgPassword.style.visibility = "visible";
    passwordTag.style.border = "2px solid hsl(0, 100%, 74%)";
    passwordError.style.color = "red";
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    passwordError.style.color = "red";
    emailError.style.visibility = "visible";
    imgPassword.style.visibility = "visible";
    passwordTag.style.border = "2px solid hsl(0, 100%, 74%)";
    isValid = false;
  } else {
    passwordError.textContent = "error";
    passwordError.style.visibility = "hidden";
    imgPassword.style.visibility = "hidden";
    passwordTag.style.border = "2px solid rgb(128, 128, 128)";
  }

  if (isValid) {
    form.submit();
  }

}

var form = document.getElementById("form");
form.addEventListener("submit", validateForm);

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}