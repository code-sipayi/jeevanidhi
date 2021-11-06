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

updateCounter();

counterElement = document.getElementsByClassName('webVisiterCount')[0];