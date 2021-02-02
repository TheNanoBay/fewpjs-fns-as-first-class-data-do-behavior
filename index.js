/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/



/* Write your implementation of greet() */

function greet(stringTime){
  const splitArray = stringTime.split(':')
  const hourString = parseInt(splitArray[0])

  if (hourString < 12) {
    return "Good Morning"
  } else if (hourString > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(currentString){
  document.getElementById("greeting").innerText = currentString
}


/* Write your implementation of displayMessage() */
