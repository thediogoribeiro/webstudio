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
  var about = document.getElementById("about");
  var services = document.getElementById("services");
  var clients = document.getElementById("clients");
  var talk = document.getElementById("talk");
  var footer = document.getElementById("footer")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.src = "/images/svg/bars-solid.svg";
    about.style.display = "block";
    services.style.display = "grid";
    clients.style.display = "block";
    talk.style.display = "block";
    footer.style.display = "block";
  } else {
    x.style.display = "block";
    y.src = "/images/svg/times-solid.svg"
    about.style.display = "none";
    services.style.display = "none";
    clients.style.display = "none";
    talk.style.display = "none";
    footer.style.display = "none";
  }
}

