// function play(){
//    const homeSection = document.getElementById('home-screen')
//    homeSection.classList.add('hidden')

//    const playGround = document.getElementById('play-ground')
//    playGround.classList.remove('hidden')
// }

//------------Keybord-----Add---Event---------
function handleKeybordleyUpEvent(event) {
  const playerPressed = event.key;

  //------get the expected to press-------
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  //--------check matched or not-------
  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");
    removeBagroundColorById(expectedAlphabet)
    continueGame()
  } else {
    console.log("you missed. you lost a life");
  }
}

//------capture keybord key press---------
document.addEventListener("keyup", handleKeybordleyUpEvent);




function continueGame() {
  // Step -1: generat a random alphabet
  const alphabet = genratARandomAlphabet();
  console.log(alphabet);

  // Step -2: set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // Step -3: set background color
  setBagroundCollorById(alphabet);
}

function play() {
  hiddenElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
