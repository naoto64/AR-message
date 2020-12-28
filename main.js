var param = location.search.slice(1).split("&");
var text = "";
var image = "";
window.alert(param);
for(var i = 0; i < param.length; i++){
  var param_split = [];
  var param_index = param[i].search("=");
  if(param_index != -1){
    param_split.push(param[i].slice(0, param_index));
    param_split.push(param[i].slice(param_index + 1));
  }else{
    continue
  }
  console.log(param_split);
  if(param_split[0] == "text"){
    text = param_split[1];
  }else if(param_split[0] == "image"){
    image = param_split[1];
  }
}

function getText() {
  return text;
}

function getImage(e) {
  document.getElementById("image").src = image;
}

window.addEventListener("load", getImage);
