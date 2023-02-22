const allButtons = document.querySelectorAll("button");

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this.textContent);
    });
})