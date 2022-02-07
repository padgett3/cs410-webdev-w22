let form = document.querySelector('form');
let usernameInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
let newsletterYes = document.querySelector("#yes-register");
let newsletterNo = document.querySelector("#no-register");
let registrationDate = document.querySelector("#register-date");

form.addEventListener('submit', handleSubmit);

let getReadableFieldValue = (field) => {
  if (field.value == null || field.value == "") {
    return "no submission";
  } else {
    return field.value;
  }
}

function handleSubmit(event) {
  // Add your code here
  console.log("");
  console.group("========= Form Submission =========");
  console.log("Username: " + getReadableFieldValue(usernameInput));
  console.log("Email: " + getReadableFieldValue(emailInput));
  
  let radioSelectionString = "no submission";
  if (newsletterNo.checked) {
    radioSelectionString = "No";
  } else if (newsletterYes.checked) {
    radioSelectionString = "Yes";
  }
  console.log("Newsletter: " + radioSelectionString);
  console.log("Date: " + getReadableFieldValue(registrationDate));
  console.groupEnd();
}
