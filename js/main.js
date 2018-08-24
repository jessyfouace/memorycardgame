var startgame = document.getElementById("startgame");
var restartgame = document.getElementById("restartgame");
var allcards = document.getElementById("allcards");
var cardplay = document.getElementsByClassName("cardplay");
var timerstart = document.getElementById("timerstart");
var textbuttonstart = document.getElementById("textandbuttonstart");
var changetext = document.getElementById("changetext");
var bcard = document.getElementsByClassName("bcard");
allcards.style.display="none";
startgame.onclick = function() {gameStart("start")};
restartgame.style.display="none";
restartgame.onclick = function() {gameStart("restart")};
i = 41;
var tabImg = ["url('img/carte1.png')", "url('img/carte1.png')", "url('img/carte2.png')", "url('img/carte2.png')", "url('img/carte3.png')", "url('img/carte3.png')", "url('img/carte4.png')", "url('img/carte4.png')", "url('img/carte5.png')", "url('img/carte5.png')", "url('img/carte6.png')", "url('img/carte6.png')", "url('img/carte7.png')", "url('img/carte7.png')", "url('img/carte8.png')", "url('img/carte8.png')"];
var TabImgRandom;
var newtable = [];
var tablepush = [];
var d;

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
    for(cardal=1;cardal<=16;cardal++){
    	var c = 'card'+cardal;
      d = document.getElementById(c).style.backgroundImage = tablepush[cardal - 1];
    }
  }

  if (vale == "restart") {
    restartgame.style.display="none";
    changetext.innerHTML = "Click on the cards and try to find the pairs"
    i = 41;
    vale = "";
    clearTimeout(startgamevar);
    for (var e = 0; e < 16 ; e++) {
      TabImgRandom = Math.floor(Math.random() * tabImg.length);
      stockage = Array(tabImg[TabImgRandom]);
      newtable = Array.from(stockage);
      tablepush.push(stockage)
      tabImg.splice (TabImgRandom, 1);
    }
    for(cardal=1;cardal<=16;cardal++){
    	var c = 'card'+cardal;
      d = document.getElementById(c).style.backgroundImage = tablepush[cardal - 1];
    }
    for(delopa=1;delopa<=16;delopa++){
    	var delopa1 = 'bcard'+delopa;
      delopa2 = document.getElementById(delopa1).style.opacity = "1";
    }
    return i;
  }

  return vale;
}

var vie = 0;
function getId(monId) {
  vie++;
  if (vie < 3) {
    var clickmyid = monId;
    var stylebyid = document.getElementById(clickmyid);
    stylebyid.style.opacity="0";
    if (stylebyid.parentElement.backgroundImage == stylebyid.parentElement.backgroundImage) {
      console.log("gregerge");
      vie = 0;
      return vie;
    } else {
      vie = 0;
      stylebyid.style.opacity="1";
      return vie;
    }
  }
}
