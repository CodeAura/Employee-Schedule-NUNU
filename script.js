const labels = document.querySelectorAll("label");

labels.forEach(label => {
  // console.log(label.innerText);
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => {
    return `<span style="transition-delay: ${index*30}ms">${letter}</span>`;})
    .join('');
  console.log(label.innerHTML);
});

document.getElementById("btn").onclick = function() {login()};

function login() {
  var uname = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

    if((!isEmpty(uname, "Log In")) && (!isEmpty(pass, "Password"))) {
        return true;
    }else{
        return false;

    }

function isEmpty(elemValue, field){
    if((elemValue == "") || (elemValue == null)){
        alert("u kunt "+field+" niet leeglaten");
        return true;
    }else{
        return false;
    }
  }
}

var audio = ""