var startgame = document.getElementById("startgame");
var restartgame = document.getElementById("restartgame");
var allcards = document.getElementById("allcards");
var cardplay = document.getElementsByClassName("cardplay");
var textbuttonstart = document.getElementById("textandbuttonstart");
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
    textbuttonstart.classList.add("col-md-4");
    textbuttonstart.classList.remove("col-12");
    document.getElementById("timerstart").value = i;
  } else {
    allcards.style.display="none";
    textbuttonstart.classList.add("col-12");
    textbuttonstart.classList.remove("col-md-4");
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
    return i;
  }

  return vale;
}
