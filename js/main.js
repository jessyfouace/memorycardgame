var startgame = document.getElementById("startgame");
var restartgame = document.getElementById("restartgame");
var allcards = document.getElementById("allcards");
var cardplay = document.getElementsByClassName("cardplay");
var timerstart = document.getElementById("timerstart");
var textbuttonstart = document.getElementById("textandbuttonstart");
var changetext = document.getElementById("changetext");
allcards.style.display="none";
startgame.onclick = function() {gameStart("start")};
restartgame.style.display="none";
restartgame.onclick = function() {gameStart("restart")};
i = 61;
var tabImg = ["url('img/carte1.png')", "url('img/carte1.png')", "url('img/carte2.png')", "url('img/carte2.png')", "url('img/carte3.png')", "url('img/carte3.png')", "url('img/carte4.png')", "url('img/carte4.png')", "url('img/carte5.png')", "url('img/carte5.png')", "url('img/carte6.png')", "url('img/carte6.png')", "url('img/carte7.png')", "url('img/carte7.png')", "url('img/carte8.png')", "url('img/carte8.png')"];
var TabImgRandom;
var newtable = [];
var tablepush = [];

function gameStart(e) {
  vale = e;
  i--;
  var startgamevar = setTimeout(gameStart, 1000);
  var stockage = [];

  if (i >= 1) {
    startgame.style.display="none";
    allcards.style.display="inline-block";
    textbuttonstart.classList.add("col-6");
    textbuttonstart.classList.remove("mx-auto");
    timerstart.value = "Time left " + i + "s";
  } else {
    allcards.style.display="none";
    textbuttonstart.classList.remove("col-6");
    restartgame.style.display="inline-block";
    changetext.innerHTML = "Click on restart for restart a game"
    timerstart.value = "Timed out! You loose";
  }

  if (vale == "start") {
    restartgame.style.display="none";
    vale = "";
    changetext.innerHTML = "Click on the cards and try to find the pairs"
    document.getElementById("deletetext").style.display="none";
    for (var e = 0; e < 16 ; e++) {
      TabImgRandom = Math.floor(Math.random() * tabImg.length);
      stockage = Array(tabImg[TabImgRandom]);
      newtable = Array.from(stockage);
      tablepush.push(stockage)
      tabImg.splice (TabImgRandom, 1);
    }
    document.getElementById("card1").style.backgroundImage = tablepush[0];
    document.getElementById("card2").style.backgroundImage = tablepush[1];
    document.getElementById("card3").style.backgroundImage = tablepush[2];
    document.getElementById("card4").style.backgroundImage = tablepush[3];
    document.getElementById("card5").style.backgroundImage = tablepush[4];
    document.getElementById("card6").style.backgroundImage = tablepush[5];
    document.getElementById("card7").style.backgroundImage = tablepush[6];
    document.getElementById("card8").style.backgroundImage = tablepush[7];
    document.getElementById("card9").style.backgroundImage = tablepush[8];
    document.getElementById("card10").style.backgroundImage = tablepush[9];
    document.getElementById("card11").style.backgroundImage = tablepush[10];
    document.getElementById("card12").style.backgroundImage = tablepush[11];
    document.getElementById("card9").style.backgroundImage = tablepush[12];
    document.getElementById("card10").style.backgroundImage = tablepush[13];
    document.getElementById("card11").style.backgroundImage = tablepush[14];
    document.getElementById("card12").style.backgroundImage = tablepush[15];
  }

  if (vale == "restart") {
    restartgame.style.display="none";
    changetext.innerHTML = "Click on the cards and try to find the pairs"
    i = 61;
    vale = "";
    clearTimeout(startgamevar);
    return i;
  }

  return vale;
}
