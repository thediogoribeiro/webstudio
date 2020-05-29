var services = [false, false, false, false];
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
  var head = document.getElementById("header_container");
  var house = document.getElementById("nav_house");
  var about = document.getElementById("about");
  var services = document.getElementById("services");
  var clients = document.getElementById("clients");
  var talk = document.getElementById("talk");
  var footer = document.getElementById("footer")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.src = "/images/svg/bars-solid.svg";
    head.style.display = "grid";
    house.style.display = "block";
    about.style.display = "block";
    services.style.display = "grid";
    clients.style.display = "grid";
    talk.style.display = "block";
    footer.style.display = "grid";
  } else {
    x.style.display = "block";
    y.src = "/images/svg/times-solid.svg"
    head.style.display = "none";
    house.style.display = "none";
    about.style.display = "none";
    services.style.display = "none";
    clients.style.display = "none";
    talk.style.display = "none";
    footer.style.display = "none";
  }
}

function navbarGo() {
  var navbar = document.getElementById("navbar_links");
  var icon = document.getElementById("img_icon");
  var head = document.getElementById("header_container");
  var house = document.getElementById("nav_house");
  var about = document.getElementById("about");
  var services = document.getElementById("services");
  var clients = document.getElementById("clients");
  var talk = document.getElementById("talk");
  var footer = document.getElementById("footer")
  navbar.style.display = "none";
  icon.src = "/images/svg/bars-solid.svg";
  head.style.display = "grid";
  house.style.display = "block";
  about.style.display = "block";
  services.style.display = "grid";
  clients.style.display = "grid";
  talk.style.display = "block";
  footer.style.display = "grid";
}

// Header image selection
function imgChange(){
  var x = document.getElementById('img_city');
  var y0 = document.getElementById('client-2');
  if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280){
    x.src = "/images/house-desktop.png";
  } else if (document.documentElement.clientWidth < 768){
    x.src = "/images/house-mobile.png";
  } else {
    x.src = "/images/house-desktop-3.png";
  };
}

// Open services list
function openService(clas1, clas2,s) {
  var parent = document.getElementById(clas1);
  var child = document.getElementById(clas2);
  if (!services[s]) {
    services[s]=true;
    child.style.display = "block";
    if (document.documentElement.clientWidth >= 768){
      parent.style.height = "340px";
    } else if (document.documentElement.clientWidth < 768){
      parent.style.height = "300px";
    };
  } else {
    services[s]=false;
    if (document.documentElement.clientWidth >= 1280){
      parent.style.height = "140px";
    } else if (document.documentElement.clientWidth < 1280){
      parent.style.height = "125px";
    };
    child.style.display = "none";
  };
}

//send form using malito
function sendQuote(){
  var campos = [];

  if(document.getElementById("cb1").checked == true) campos.push("Identidade digital");
  if(document.getElementById("cb2").checked == true) campos.push("Flyers, cartões de visita, desdobráveis, etc.");
  if(document.getElementById("cb3").checked == true) campos.push("Esboço de um website");
  if(document.getElementById("cb4").checked == true) campos.push("Montar um website");
  if(document.getElementById("cb5").checked == true) campos.push("Loja online");
  if(document.getElementById("cb6").checked == true) campos.push("Estratégia de marketing");
  if(document.getElementById("cb7").checked == true) campos.push("Gestão de redes sociais");
  if(document.getElementById("cb8").checked == true) campos.push("Publicidade paga");
  if(document.getElementById("cb9").checked == true) campos.push("Optimização google");

  if (document.getElementById("form_email").value != "" && document.getElementById("form_nome").value != ""){
    var body = "\nNome: " + document.getElementById("form_nome").value;
    body += "\nEmail: " + document.getElementById("form_email").value;
    body += "\n\nVenho por este meio pedir orçamento para um website";
    body += "\n\nOBS: " + document.getElementById("form_obs").value;
    body += "\n\nCampos: "+campos;
    body = encodeURIComponent(body);
    window.open('mailto:info@zetazone.com?subject=Orçamento_Zeta_Zone&body='+body);
    /*
    var nome = document.getElementById("form_nome").value;
    var email = document.getElementById("form_email").value;
    var obs = document.getElementById("form_obs").value;
    const options = {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({nome:nome, email:email, obs:obs, campos:campos})
    };
    fetch('/sendEmail', options).then(function(res) {
      return res.json()
    }).then(function(data) {
      if(data.res=="ok") alert("Enviado com sucesso");
      else alert("Erro ao enviar email, entre em contato de outra forma");
    }).catch(function(error) {
      console.error(error)
    })*/
  }else{
    alert("Nome e Email obrigatório");
  }
}

  

