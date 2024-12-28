// function play(){
//    const homeSection = document.getElementById('home-screen')
//    homeSection.classList.add('hidden')

//    const playGround = document.getElementById('play-ground')
//    playGround.classList.remove('hidden')
// }




function continueGame(){
  // Step -1: generat a random alphabet
  const alphabet = genratARandomAlphabet()
  console.log(alphabet);

  // Step -2: set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById('current-alphabet')
  currentAlphabetElement.innerText = alphabet;

  // Step -3: set background color
  setBagroundCollorById(alphabet)


}



function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}