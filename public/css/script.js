const labels = document.querySelectorAll("label");
// login page animations
labels.forEach(label => {
  // console.log(label.innerText);
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => {
    return `<span style="transition-delay: ${index*30}ms">${letter}</span>`;})
    .join('');
  console.log(label.innerHTML);
});

// Login pages
document.getElementById("btn").onclick = function() {login()};

function loggedin() {
    var username = document.getElementById("username").value;
    var myDate = new Date();
    var hrs = myDate.getHours();
    var greet;
    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.querySelector("change-text").innerHTML = greet + ', ' + username;
}


// Check if value is empty
function login() {
  var uname = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

    if((!isEmpty(uname, "Log In")) && (!isEmpty(pass, "Password"))) {
        loggedin();
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