// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}

// MENU hamburger
function showBurger(id1, id2) {
  var x = document.getElementById(id1);
  var y = document.getElementById(id2);
  if (x.style.display === "block") {
    x.style.display = "none";
    y.src = "/images/svg/bars-solid.svg";
  } else {
    x.style.display = "block";
    y.src = "/images/svg/times-solid.svg"
  }
}

