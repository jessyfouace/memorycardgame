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
// timer
i = 61;
var tabImg = ["url('img/carte1.png')", "url('img/carte1.png')", "url('img/carte2.png')", "url('img/carte2.png')", "url('img/carte3.png')", "url('img/carte3.png')", "url('img/carte4.png')", "url('img/carte4.png')", "url('img/carte5.png')", "url('img/carte5.png')", "url('img/carte6.png')", "url('img/carte6.png')", "url('img/carte7.png')", "url('img/carte7.png')", "url('img/carte8.png')", "url('img/carte8.png')"];
var TabImgRandom;
var newtable = [];
var tablepush = [];
var d;
var trials = 0;

function gameStart(e) {
  vale = e;
  // timer --
  i--;
  // Interval for timer did -- all 1 second
  var startgamevar = setTimeout(gameStart, 1000);
  // create table for stock the random img
  var stockage = [];

  // if timer second is more than 1 or = at one AND if i == 0
  if (i >= 1) {
    startgame.style.display="none";
    allcards.style.display="inline-block";
    textbuttonstart.classList.add("col-6");
    timerstart.value = "Time left " + i + "s";
  } else if (i == 0) {
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
    return vale;
  }

  // RESTART OPTION
  if (vale == "restart") {
    // stock all image on table
    tabImg = ["url('img/carte1.png')", "url('img/carte1.png')", "url('img/carte2.png')", "url('img/carte2.png')", "url('img/carte3.png')", "url('img/carte3.png')", "url('img/carte4.png')", "url('img/carte4.png')", "url('img/carte5.png')", "url('img/carte5.png')", "url('img/carte6.png')", "url('img/carte6.png')", "url('img/carte7.png')", "url('img/carte7.png')", "url('img/carte8.png')", "url('img/carte8.png')"];
    // Reset the tabl for random img
    tablepush = [];
    restartgame.style.display="none";
    changetext.innerHTML = "Click on the cards and try to find the pairs"
    i = 61;
    vale = "";
    clearTimeout(startgamevar);
    // recreate random image for tablepush
    for (var e = 0; e < 16 ; e++) {
      TabImgRandom = Math.floor(Math.random() * tabImg.length);
      stockage = Array(tabImg[TabImgRandom]);
      newtable = Array.from(stockage);
      tablepush.push(stockage)
      tabImg.splice (TabImgRandom, 1);
      trials = 0;
    }
    // set the random image to background of div
    for(cardal=1;cardal<=16;cardal++){
    	var c = 'card'+cardal;
      d = document.getElementById(c).style.backgroundImage = tablepush[cardal - 1];
    }
    // reset opacity
    for(delopa=1;delopa<=16;delopa++){
    	var delopa1 = 'bcard'+delopa;
      delopa2 = document.getElementById(delopa1).style.opacity = "1";
      delopa3 = document.getElementById(delopa1).style.visibility = "visible";
    }
    return i;
  }
  return vale;
}

var safeguardfirstclick;
var clickmyid;
var vie = 0;
var tablforcompare = [];
var changechildren;
var changechildren2;
var search = 0;

// function for take the id of parent and child
function getId(monId) {
  vie++;

  // All card = 1 life, you need 2 card pear round so you need 2 life, and reset it if first click !== second click
  if (vie == 1) {
    safeguardfirstclick = monId;
    var changeopa = document.getElementById(safeguardfirstclick);
    var children = changeopa.children[0];
    changechildren = children;
    changechildren.style.opacity="0";
    changechildren.style.visibility="hidden";
    var fortablcompare = changeopa.style.backgroundImage;
    tablforcompare.push(fortablcompare);
  }
  if (vie == 2) {
    trials++;
    clickmyid = monId;
    var stylebyid = document.getElementById(clickmyid);
    var children2 = stylebyid.children[0];
    changechildren2 = children2;
    changechildren2.style.opacity="0";
    changechildren2.style.visibility="hidden";
    var test = stylebyid.style.backgroundImage;
    document.getElementById("trials").innerHTML = "Trials: " + trials;
    tablforcompare.push(test);
    setTimeout(compare, 1000);
  }
}

// function for compare the first and second click
function compare() {
  if (tablforcompare[0] == tablforcompare[1]) {
    vie = 0;
    tablforcompare = [];
    search++;
  } else {
    vie = 0;
    tablforcompare = [];
    changechildren2.style.opacity="1";
    changechildren2.style.visibility="visible";
    changechildren.style.opacity="1";
    changechildren.style.visibility="visible";
  }
  // if you got all good result
  if (search == 8) {
    vie = 0;
    search = 0;
    i = "You win";
    allcards.style.display="none";
    textbuttonstart.classList.remove("col-6");
    restartgame.style.display="inline-block";
    changetext.innerHTML = "Click on restart for restart a game"
    timerstart.value = "You Win, Congratulations";
    return i;
  }
}
