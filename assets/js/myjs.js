(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let weddingDay = "Dec 01, 2021 09:30:00",
      countDown = new Date(weddingDay).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's our Wedding!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

 function toggleMusic(){
    var audioElm = document.getElementById('ambiance'); 
    var speakerImage = document.getElementById('speakerImage'); 
    audioElm.muted = !audioElm.muted;
    if(audioElm.muted ){
        speakerImage.setAttribute("src","./assets/audio/sound-off.png");
    }else{
        speakerImage.setAttribute("src","./assets/audio/sound-on.png");
    }

 }

