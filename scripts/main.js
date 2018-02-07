var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/boys.png') {
      myImage.setAttribute ('src','images/family.png');
    } else {
      myImage.setAttribute ('src','images/boys.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'The best place to be, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'The best place to be, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

document.querySelector('html').onclick = function() {
alert('Ouch! Stop poking me!');
}
