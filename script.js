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

function login() {
    var uname = document.form["login"]["username"].value;
    var pass = document.form["login"]["password"].value;

    if((!isEmpty(uname, "Log In")) && (!isEmpty(pass, "Password"))){

        return true;
    }else{
        return false;
    }
}

function isEmpty(elemValue, field){
    if((elemValue == "") || (elemValue == null)){
        alert("you can not have "+field+" field empty");
        return true;
    }else{
        return false;
    }
}