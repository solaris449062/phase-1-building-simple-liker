// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDivElement = document.querySelector("div#modal");
const errorMessageElement = document.querySelector("p#modal-message");
errorMessageElement.innerText = "Random server error. Try again."
errorDivElement.setAttribute("class", "hidden");
let isLiked = false;

let heartElementArray = document.querySelectorAll("span.like-glyph")
for (let i = 0; i < heartElementArray.length; i++) {
  heartElementArray[i].addEventListener("click", function() {
    mimicServerCall()
    .then(() => {
      errorDivElement.setAttribute("class", "hidden");
      isLiked = !isLiked;
      if (isLiked) {
        heartElementArray[i].innerText = FULL_HEART;
        heartElementArray[i].setAttribute("class", "activated-heart");
      }
      else {
        heartElementArray[i].innerText = EMPTY_HEART;
        heartElementArray[i].removeAttribute("class");
      }
    })
    .catch(() => {
      errorDivElement.removeAttribute("class");
      setTimeout(function() {
        errorDivElement.setAttribute("class", "hidden")}, 3000);
    })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
