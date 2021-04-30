let name = document.getElementById("name");
let mobile = document.getElementById("mobile");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let form = document.getElementById("regexForm");

//console.log(name, mobile, email, password, cpassword);

const isRequired = (value) => (value === "" ? false : true);

//Function to show error

const showError = (input, message) => {
  //get the parent element of input
  const formField = input.parentElement;
  //add the error class
  formField.classList.remove("success");
  formField.classList.add("error");
  //Show the error message
  let error = formField.getElementsByTagName("small");
  error[0].innerHTML = message;
};

const showSuccess = (input) => {
  //get the parent element of input
  const formField = input.parentElement;
  //add the success class
  formField.classList.add("success");
  formField.classList.remove("error");
  //Hide the error message
  let error = formField.getElementsByTagName("small");
  error[0].innerHTML = " ";
};

//Validate Name

name.addEventListener("blur", () => {
  let valid = false;
  //console.log("name blurred");
  let regex = /^[a-zA-Z][a-zA-Z ]{1,23}[a-zA-Z]$/;
  let str = name.value.trim();
  if (!isRequired(str)) {
    showError(name, "Name cannot be blank");
  } else if (!regex.test(str)) {
    showError(
      name,
      "Name should begin and end with an alphabet,can contain spaces and alphabets in between and should be Max 25 characters long"
    );
  } else {
    showSuccess(name);
    valid = true;
  }
  //console.log(valid);
  //return valid;
});

//Validate mobile

mobile.addEventListener("blur", () => {
  let valid = false;
  let regex = /^[6-9][0-9]{9}$/;
  let str = mobile.value.trim();
  if (!isRequired(str)) {
    showError(mobile, "Mobile number cannot be blank");
  } else if (!regex.test(str)) {
    showError(
      mobile,
      "Mobile number should be of exact 10 digits and should begin with 6,7,8 or 9"
    );
  } else {
    showSuccess(mobile);
    valid = true;
  }
  //console.log(valid);
  //return valid;
});

//Validate Email

email.addEventListener("blur", () => {
  let valid = false;
  let regex = /^([_a-zA-Z0-9\-\.]+)@([_a-zA-Z0-9\-\.]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value.trim();
  if (!isRequired(str)) {
    showError(email, "Email cannot be blank");
  } else if (!regex.test(str)) {
    showError(email, "Email should be of the format xyz@xyz.xyz");
  } else {
    showSuccess(email);
    valid = true;
  }
  //console.log(valid);
  //return valid;
});

//Validate Password

password.addEventListener("blur", () => {
  let valid = false;
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  let str = password.value;
  if (!isRequired(str)) {
    showError(password, "Password cannot be blank");
  } else if (!regex.test(str)) {
    showError(
      password,
      "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
    );
  } else {
    showSuccess(password);
    valid = true;
  }
});

cpassword.addEventListener("blur", () => {
  let valid = false;
  let str = cpassword.value.trim();
  if (!isRequired(str)) {
    showError(cpassword, "Enter your password again");
  } else if (password.value.trim() !== str) {
    showError(cpassword, "Passwords do not match");
  } else {
    showSuccess(cpassword);
    valid = true;
  }
  //console.log(valid);
  //return valid;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementsByClassName("success").length === 5) {
    name.value = "";
    mobile.value = "";
    email.value = "";
    password.value = "";
    cpassword.value = "";
    //Remove Success class from form-fields
    let toRemove = document.getElementsByClassName("success");
    for (let i = 4; i >= 0; i--) {
      toRemove[i].classList.remove("success");
    }
    alert("Form Submitted Successfully");
    //console.log("Form is valid");
  } else {
    alert("Your Form is empty or has errors");
  }
});
