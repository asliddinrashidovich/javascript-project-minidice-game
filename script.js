// buttons;
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// dice image;

const diceImg = document.querySelector('.dice');
diceImg.style.display = 'none'

// variables;

let currentScore = 0;
let activePlayer = 0
let score = [0, 0];
let gameover = true

// players;
let player0 = document.getElementById('player--0');
let player1 = document.getElementById('player--1');

// score ;

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');


btnRoll.addEventListener('click', ()=> {
    if(gameover) {
        diceImg.style.display = 'block'

        const random = Math.floor(Math.random() * 6 + 1);
        diceImg.src = `./dice-${random}.png`

        if(random !== 1) {
            currentScore += random;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');
        }
    }
})

// hold btn;

btnHold.addEventListener('click', () => {
    if(gameover) {
        if(activePlayer == 0) {
            score[0] += currentScore;
            score0.textContent = score[0];
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            activePlayer = 1;
            if(score[0] >= 20) {
                player0.classList.add('player--winner')
                console.log(player0)
                gameover = false;
            } else {
                gameover = true
                player0.classList.toggle('player--active');
                player1.classList.toggle('player--active');
            }
        } else {
            score[1] += currentScore;
            score1.textContent = score[1];
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            activePlayer = 0;
            if(score[1] >= 20) {
                player1.classList.add('player--winner')
                gameover = false;
            } else {
                gameover = true
                player0.classList.toggle('player--active');
                player1.classList.toggle('player--active');
            }
        }

    }
})

// newgame;

btnNew.addEventListener('click', ()=> {
    currentScore = 0;
    activePlayer = 0;
    score = [0,0];
    gameover = true;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    score0.textContent = 0;
    score1.textContent = 0;


})