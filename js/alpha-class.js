// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');

// }
function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet',alphabet);

    const currentAlphabetElementId = document.getElementById('current-Alphabet');
    currentAlphabetElementId.innerText =  alphabet;


    setBackgroundColorId(alphabet);
}


function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}