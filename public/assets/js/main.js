// main.js - client-side code to connect to the bad password API

// REFERENCES
let password = document.querySelector("#password");
let button = document.querySelector("#submit");

// EVENTS
window.addEventListener("load", updatePassword);
document.addEventListener("submit", (e) => {
  e.preventDefault();
  updatePassword();
});

// add a change event listener to each option
document.querySelectorAll("input[type=radio]").forEach((ele) => {
  ele.addEventListener("change", updatePassword);
});

// called from load and user events
async function updatePassword() {
  // 👉 add code inside this function (from Chapter 9) ...

  // get the value from both groups
  let group1 = document.querySelector("input[name=group1]:checked");
  let group2 = document.querySelector("input[name=group2]:checked");

  // base url for API
  // let url = "https://bad-password-api.glitch.me/api";
  let url = "/api";
  // append options to the end
  url += "/custom?params=" + group1.value + "," + group2.value;
  // console.log(url);

  // request data
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log("fetch() response", json);
      password.value = json.message;
    });
}
