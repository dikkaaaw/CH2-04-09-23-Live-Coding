let drumTotal = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumTotal; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    let buttonInnerHTML = this.innerHTML;

    makeAudio(buttonInnerHTML)
    animatedButton(buttonInnerHTML)
  }) 
}

document.addEventListener("keypress", function(event){

  console.log(event.key)
  makeAudio(event.key)
  animatedButton(event.key)
})

function makeAudio(key) {
  switch (key) {
    case "w":
      var audio = new Audio('/CH2-4-9-2023-DOM-Advance/sounds/crash.mp3');
      audio.play();
      break;
    case "a":
        var audio = new Audio('/CH2-4-9-2023-DOM-Advance/sounds/kick-bass.mp3');
        audio.play();
        break;
    case "s":
        var audio = new Audio('/CH2-4-9-2023-DOM-Advance/sounds/snare.mp3');
        audio.play();
        break;
    case "d":
        var audio = new Audio('/CH2-4-9-2023-DOM-Advance/sounds/tom-1.mp3');
        audio.play();
        break;
    case "j":
        var audio = new Audio('/CH2-4-9-2023-DOM-Advance/sounds/tom-2.mp3');
        audio.play();
        break;
    case "k":
        var audio = new Audio('/CH2-4-9-2023-DOM-Advance/sounds/tom-3.mp3');
        audio.play();
        break; 
    case "l":
        var audio = new Audio('/CH2-4-9-2023-DOM-Advance/sounds/tom-4.mp3');
        audio.play();
        break; 
    default:
      console.log("Ini ga ada sound nya!");
      break;
  }
}

function animatedButton(currentKey) {

  document.querySelector('.${currentKey}').classList.add("pressed");

  setTimeout(() => {
    document.querySelector('.${currentKey}').classList.add("pressed");
  }, 1000);
}