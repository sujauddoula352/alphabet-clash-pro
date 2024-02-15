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
function handleKeyUpEven(even){
    const playerPress = even.key
    console.log('player press',playerPress);
    const currentAlphabetElement = document.getElementById('current-Alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPress,expectedAlphabet );

    if( playerPress === expectedAlphabet ){
        console.log('your are get point');
        removedBackgroundColorId(expectedAlphabet);
        continueGame()
    }
    
    else{
        console.log('You miss .you lost life')
    }
    
}
document.addEventListener('keyup',handleKeyUpEven)


function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}