const urlRegex = /^(https?:\/\/)[\w\d-]+(\.[\w]+)+$/;

const userInput = prompt("Enter a URL:");

if (urlRegex.test(userInput)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
