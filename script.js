const btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let error = document.querySelector(".error");
btn.addEventListener("click", function(){
    if(input.value === ""){
        input.style.border = "2px solid #dc625f";
        input.style.backgroundImage ="url('images/icon-error.svg')";
        input.style.backgroundRepeat = "no-repeat";
        input.style.backgroundPosition = "82% 50%";
        error.textContent = "Please provie a valid Email";
    } else if(input.value.indexOf("@") == -1){
        input.style.border = "2px solid #dc625f";
        input.style.backgroundImage ="url('images/icon-error.svg')";
        input.style.backgroundRepeat = "no-repeat";
        input.style.backgroundPosition = "82% 50%";
        error.textContent = "Please provie a valid Email";
    } else if(input.value.indexOf("gmail") == -1){
        input.style.border = "2px solid #dc625f";
        input.style.backgroundImage ="url('images/icon-error.svg')";
        input.style.backgroundRepeat = "no-repeat";
        input.style.backgroundPosition = "82% 50%";
        error.textContent = "Please provie a valid Email";
    } else if(input.value.indexOf(".") == -1){
        input.style.border = "2px solid #dc625f";
        input.style.backgroundImage ="url('images/icon-error.svg')";
        input.style.backgroundRepeat = "no-repeat";
        input.style.backgroundPosition = "82% 50%";
        error.textContent = "Please provie a valid Email";
    } else if(input.value.indexOf("com") == -1){
        input.style.border = "2px solid #dc625f";
        input.style.backgroundImage ="url('images/icon-error.svg')";
        input.style.backgroundRepeat = "no-repeat";
        input.style.backgroundPosition = "82% 50%";
        error.textContent = "Please provie a valid Email";
    } else{
        input.style.border = "2px solid #e1d3d7";
        error.textContent = "";
        input.style.backgroundImage ="none";
    }
});