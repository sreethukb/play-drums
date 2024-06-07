var numberOfDrums = document.querySelectorAll(".drum").length;

//Detecting button presses
for(var i=0; i<numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimate(buttonInnerHTML);
    });
}

//Detecting key presses
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimate(event.key);
})

function makeSound(key) {
    switch (key) {
        case "d":
            var crash = new Audio("./sounds/tom-1.mp3");
            crash.play();
        break;
        case "f":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case "g":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case "h":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimate(currentKey) {
    var currentButton = document.querySelector("."+currentKey);
    currentButton.classList.add("pressed");

    setTimeout(function(){
        currentButton.classList.remove("pressed");
    }, 100);
}