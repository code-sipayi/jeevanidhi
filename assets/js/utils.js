function toggleVisitCount() {
    var x = document.getElementById("counterDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function updateCounter(){
    fetch(`https://api.countapi.xyz/hit/mysite.com/visits`)
    .then(res => res.json())
    .then(data=>{

        counterElement.innerHTML = data.value;
        console.log(counterElement);
    });
}

function toggleYoutubeCount() {
  var x = document.getElementById("counterYoutubeDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function updateYoutubeCounter(){
  fetch(`https://api.countapi.xyz/hit/mysite.com/visits`)
  .then(res => res.json())
  .then(data=>{

      counterYoutubeElement.innerHTML = data.value;
      console.log(counterYoutubeElement);
  });
}

updateCounter();

counterElement = document.getElementsByClassName('webVisiterCount')[0];
counterYoutubeElement = document.getElementsByClassName('youtubeCount')[0];

