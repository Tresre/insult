var button1;
var button2;
var button3;
var button4;
var button5;
var stage = 0;
var display;
var plural;
var next;
var and = 0;

button1 = randomNoun();
const splitButton1 = button1.split("[");
document.getElementById("button1").innerHTML = capitalizeFirstLetter(splitButton1[0]);

button2 = randomNoun();
const splitButton2 = button2.split("[");
document.getElementById("button2").innerHTML = capitalizeFirstLetter(splitButton2[0]);

button3 = randomNoun();
const splitButton3 = button3.split("[");
document.getElementById("button3").innerHTML = capitalizeFirstLetter(splitButton3[0]);

button4 = randomNoun();
const splitButton4 = button4.split("[");
document.getElementById("button4").innerHTML = capitalizeFirstLetter(splitButton4[0]);

button5 = randomNoun();
const splitButton5 = button5.split("[");
document.getElementById("button5").innerHTML = capitalizeFirstLetter(splitButton5[0]);

function button(id) {
  sound = new Audio('https://tresre.dev/insult/assets/mp3/ButtonClick.mp3');
  function buttonSound() {
   sound.currentTime = 0;
   sound.play();
    sound.onended = function() {titleMusic();};
  }
  if (display == undefined) {display = "";}
  if (stage == 0) {
    buttonSound();
    var choice = capitalizeFirstLetter(window[id]);
    console.log(choice);
    const splitSemantic = choice.split("[");
    display = display.concat("" + splitSemantic[0]);
    plural = (splitSemantic[1]);
    console.log("plural " + plural);
    document.getElementById("display").innerHTML = display;
    nextStage();
    return;
  }
  if (stage == 1) {
    buttonSound();
    var choice = window[id];
    const splitSemantic = choice.split("[");
    console.log("plural " + plural);
    display = display.concat("" + splitSemantic[0]);
    document.getElementById("display").innerHTML = display;
    nextStage();
    return;
  }
  if (stage == 2) {
    buttonSound();
    var choice = window[id];
    const splitSemantic = choice.split("]");
    const splitSemantic1 = (splitSemantic[1]).split("{");
    next = splitSemantic1[1];
    console.log("next " + next);
    splitPlurality = (splitSemantic[0]).split("/");
    plurality = splitPlurality[(plural - 1)];
    display = display.concat("" + plurality + splitSemantic1[0]);
    document.getElementById("display").innerHTML = display;
    nextStage();
    return;
  }
  if (stage == 3) {
    buttonSound();
    var choice = window[id];
    if (choice == "and") {
      stage = 4;
      ++and;
      display = display.concat("and ");
      document.getElementById("display").innerHTML = display;
      
      button1 = randomVerb();
      splitVerb = button1.split("]");
      splitPlurality = (splitVerb[0]).split("/");
      plurality = splitPlurality[(plural - 1)];
      splitVerb1 = (splitVerb[1]).split("{");
      document.getElementById("button1").innerHTML = (plurality + splitVerb1[0]);

      button2 = randomVerb();
      splitVerb = button2.split("]");
      splitPlurality = (splitVerb[0]).split("/");
      plurality = splitPlurality[(plural - 1)];
      splitVerb1 = (splitVerb[1]).split("{");
      document.getElementById("button2").innerHTML = (plurality + splitVerb1[0]);

      button3 = randomVerb();
      splitVerb = button3.split("]");
      splitPlurality = (splitVerb[0]).split("/");
      plurality = splitPlurality[(plural - 1)];
      splitVerb1 = (splitVerb[1]).split("{");
      document.getElementById("button3").innerHTML = (plurality + splitVerb1[0]);
    
      button4 = randomNoun();
      const splitButton4 = button4.split("[");
      document.getElementById("button4").innerHTML = splitButton4[0];

      button5 = randomNoun();
      const splitButton5 = button5.split("[");
      document.getElementById("button5").innerHTML = splitButton5[0];
      return;
    } else {
      display = display.slice(0, -1);
      display = display.concat(", " + choice);
      document.getElementById("display").innerHTML = display;
      nextStage();
      return;
    }
  }
  if (stage == 4) {
    buttonSound();
    var choice = window[id];
    const buttonChoice = id.split("button");
    if (buttonChoice[1] < 4) {
      const splitSemantic = choice.split("]");
      const splitSemantic1 = (splitSemantic[1]).split("{");
      next = splitSemantic1[1];
      console.log("next " + next);
      splitPlurality = (splitSemantic[0]).split("/");
      plurality = splitPlurality[(plural - 1)];
      display = display.concat("" + plurality + splitSemantic1[0]);
      document.getElementById("display").innerHTML = display;
      nextStage();
      return;
    } else {
      const splitSemantic = choice.split("[");
      console.log("plural " + plural);
      display = display.concat("" + splitSemantic[0]);
      document.getElementById("display").innerHTML = display;
      next = "verb";
      console.log("next " + next);
      nextStage();
      return;
    }
  }
  buttonSound();
  if (stage == 5) {
    var choice = window[id];
    const splitSemantic = choice.split("[");
    display = display.concat("" + splitSemantic[0]);
    document.getElementById("display").innerHTML = display;
    nextStage();
    return;
  }
}

function nextStage() {
  if (stage == 0) {
    stage = 2;
    populateButtons("verb");
    return;
  }
  if (stage == 1) {
    stage = 2;
    populateButtons("verb");
    return;
  }
  if (stage == 2) {
    console.log("testnext " + next);
    if (next == "end") {
      stage = 3;
      populateButtons("end");
      return;
    }
    if (next == "noun") {
      stage = 5;
      populateButtons("noun");
      return;
    }
    return;
  }
  if (stage == 3) {
    finishGame();
    return;
  }
  if (stage == 4) {
    if (next == "noun") {
      stage = 5;
      populateButtons("noun");
      return;
    }
    if (next == "verb") {
      stage = 2;
      populateButtons("verb");
      return;
    }
    if (next == "end") {
      stage = 3;
      populateButtons("end");
      return;
    }
    return;
  }
  if (stage == 5) {
    stage = 3;
    populateButtons("end");
    return;
  }
}


function populateButtons(part) {
  if (part == "noun") {
    button1 = randomNoun();
    const splitButton1 = button1.split("[");
    document.getElementById("button1").innerHTML = splitButton1[0];
    
    button2 = randomNoun();
    const splitButton2 = button2.split("[");
    document.getElementById("button2").innerHTML = splitButton2[0];
    
    button3 = randomNoun();
    const splitButton3 = button3.split("[");
    document.getElementById("button3").innerHTML = splitButton3[0];
    
    button4 = randomNoun();
    const splitButton4 = button4.split("[");
    document.getElementById("button4").innerHTML = splitButton4[0];
    
    button5 = randomNoun();
    const splitButton5 = button5.split("[");
    document.getElementById("button5").innerHTML = splitButton5[0];
  }
  if (part == "verb") {
    button1 = randomVerb();
    splitVerb = button1.split("]");
    splitPlurality = (splitVerb[0]).split("/");
    plurality = splitPlurality[(plural - 1)];
    splitVerb1 = (splitVerb[1]).split("{");
    document.getElementById("button1").innerHTML = (plurality + splitVerb1[0]);
    
    button2 = randomVerb();
    splitVerb = button2.split("]");
    splitPlurality = (splitVerb[0]).split("/");
    plurality = splitPlurality[(plural - 1)];
    splitVerb1 = (splitVerb[1]).split("{");
    document.getElementById("button2").innerHTML = (plurality + splitVerb1[0]);
    
    button3 = randomVerb();
    splitVerb = button3.split("]");
    splitPlurality = (splitVerb[0]).split("/");
    plurality = splitPlurality[(plural - 1)];
    splitVerb1 = (splitVerb[1]).split("{");
    document.getElementById("button3").innerHTML = (plurality + splitVerb1[0]);
    
    button4 = randomVerb();
    splitVerb = button4.split("]");
    splitPlurality = (splitVerb[0]).split("/");
    plurality = splitPlurality[(plural - 1)];
    splitVerb1 = (splitVerb[1]).split("{");
    document.getElementById("button4").innerHTML = (plurality + splitVerb1[0]);
    
    button5 = randomVerb();
    splitVerb = button5.split("]");
    splitPlurality = (splitVerb[0]).split("/");
    plurality = splitPlurality[(plural - 1)];
    splitVerb1 = (splitVerb[1]).split("{");
    document.getElementById("button5").innerHTML = (plurality + splitVerb1[0]);
  }
  if (part == "end") {
    button1 = randomEnd();
    document.getElementById("button1").innerHTML = button1;
    button2 = randomEnd();
    document.getElementById("button2").innerHTML = button2;
    button3 = randomEnd();
    document.getElementById("button3").innerHTML = button3;
    button4 = randomEnd();
    document.getElementById("button4").innerHTML = button4;
    if (and < 2) {
      button5 = "and";
      document.getElementById("button5").innerHTML = button5;
    } else {
      button5 = randomEnd();
      document.getElementById("button5").innerHTML = button5;
    }
  }
}

function finishGame() {
  var url = display;
  url = url.replaceAll(" ", "+");
  location.replace("https://tresre.dev/insult/result?output=" + url)
}

function autoGenerate() {
  setInterval(function() {
    autogen = Math.floor(Math.random() * 5) + 1;
    button("button" + autogen)
  }, 250)
}

function randomNoun() {
  var random = nouns[Math.floor(Math.random()*nouns.length)];
  return random;
}

function randomVerb() {
  var random = verbs[Math.floor(Math.random()*verbs.length)];
  return random;
}

function randomEnd() {
  var random = end[Math.floor(Math.random()*end.length)];
  return random;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
