var startgame = document.getElementById("startgame");
var restartgame = document.getElementById("restartgame");
var allcards = document.getElementById("allcards");
var cardplay = document.getElementsByClassName("cardplay");
allcards.style.display="none";
startgame.onclick = function() {gameStart("start")};
restartgame.style.display="none";
restartgame.onclick = function() {gameStart("restart")};
i = 61;
var tabImg = Array.from(cardplay);

function gameStart(e) {
  vale = e;
  i--;
  var startgamevar = setTimeout(gameStart, 1000);

  if (i >= 1) {
    startgame.style.display="none";
    allcards.style.display="inline-block";
    document.getElementById("textandbuttonstart").classList.add("col-md-4");
    document.getElementById("timerstart").value = i;
  } else {
    allcards.style.display="none";
    restartgame.style.display="inline-block";
    document.getElementById("timerstart").value = "Temps écoulé!";
  }

  if (vale == "start") {
    restartgame.style.display="none";
    vale = "";
  }

  if (vale == "restart") {
    restartgame.style.display="none";
    i = 61;
    vale = "";
    clearTimeout(startgamevar);
    randomtabl = Math.floor(Math.random() * 4);
    console.log(randomtabl);
    return i;
  }

  return vale;
}
