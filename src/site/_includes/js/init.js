function init() {
  imgChange();
  tagColor();
}

// Header image selection
function imgChange(){
  var x = document.getElementById('img_city-2');
  var y = document.getElementById('img_city-1');
  var z = document.getElementById('img_city-3');
  if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280){
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else if (document.documentElement.clientWidth < 768){
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  };
}

function tagColor(){
  var className = document.getElementsByClassName('tag');
  var classColor1 = document.getElementsByClassName('blog_tag');
  var classColor2 = document.getElementsByClassName('tag_item');
  var classnameCount = className.length;
  for(var i = 0; i < classnameCount; i++){
    switch (className[i].innerHTML) {
      case "ZetaZone":
        classColor1[i].style.backgroundColor = "#04d976";
        classColor2[i].style.backgroundColor = "#04d976";
        classColor1[i].style.border = "2px solid #04d976";
        classColor2[i].style.border = "2px solid #04d976";
        className[i].style.color = "#1a2040";
        break;
      case "Curiozetas":
        classColor1[i].style.backgroundColor = "#f2f2f2";
        classColor2[i].style.backgroundColor = "#f2f2f2";
        classColor1[i].style.border = "2px solid #1a2040";
        classColor2[i].style.border = "2px solid #1a2040";
        className[i].style.color = "#1a2040";
        break;
      case "Ferramentas":
        classColor1[i].style.backgroundColor = "#1a2040";
        classColor2[i].style.backgroundColor = "#1a2040";
        classColor1[i].style.border = "2px solid #1a2040";
        classColor2[i].style.border = "2px solid #1a2040";
        className[i].style.color = "#f2f2f2";
        break; 
    }
  }
}

