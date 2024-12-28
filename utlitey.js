
//--------Added------Item--------
function hiddenElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
//--------Remove-----Item---------
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

//--------addBagroundCollor-----------
function setBagroundCollorById(elementId){
   const element = document.getElementById(elementId)
   element.classList.add('bg-[#ff4500]')
   element.classList.add('text-[#fff]')
}

//--------removeBagroundColor-----------
function removeBagroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#ff4500]')
}


//--------genrat---A----Random---Alphabet------
function genratARandomAlphabet(){
    //-----get or create an alphabet array
   const alphabetString = 'abcdefghijklmnopqrstuvwxyz' 
   const alphabets = alphabetString.split('')


   //-----get a random index betwreen 0 -25
   const randomNumber = Math.random()*25;
   const index = Math.round(randomNumber)
   

   const alphabet = alphabets[index]
   console.log(index, alphabet);
   return alphabet;
}
