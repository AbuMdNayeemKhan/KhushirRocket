document.addEventListener("mousemove", function(e){
    var rocket = document.querySelector('.rocket');
    rocket.style.left = e.offsetX +'px';
    rocket.style.top = e.offsetY +'px';
})


var counter = 0;
    document.addEventListener("DOMContentLoaded", function() {
    var divs = document.querySelectorAll(".bubble");
    divs.forEach(function(div) {
        div.addEventListener("mouseover", function() {
        counter++;
        if(counter < 10){
            document.querySelector("#demo").innerHTML = "0" + counter;
        } else {
            document.querySelector("#demo").innerHTML = counter;
        }
        
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio("../audio/blast.mp3");
    var divs = document.querySelectorAll(".bubble");
    divs.forEach(function(div) {
      div.addEventListener("mouseenter", function() {
        audio.play();
      });
      div.addEventListener("mouseleave", function() {
        audio.pause();
        audio.currentTime = 0;
      });
    });
  });
  
  

  
  