
function roll() {
    let randomNumber1 = Math.round(Math.random() * 5) + 1 ; //random number
    let randomNumber2= Math.round(Math.random() * 5 ) + 1 ;

    document.querySelector('.img1').src = `images/dice${randomNumber1}.png`; // replace image
    document.querySelector('.img2').src = `images/dice${randomNumber2}.png`; 

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML ='<i class="fas fa-fist-raised"></i> Player One Wins';
    
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML ='Player Two Wins <i class="fas fa-fist-raised"></i> ';
    } else {
        document.querySelector('h1').textContent='Tie!';
    }
}

roll();