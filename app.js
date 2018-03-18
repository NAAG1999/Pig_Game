/* Game instructions:
    Random dice is rolled and if a player gets a 1 then player loses all the score taken,
    the player first crossing 100 will be declared winner.
    It uses random event of javascript */





var scores, roundscores, activePlayer, dice;

scores = [0,0];
roundscores = 0;
activePlayer = 0;


//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>';
//var x = document.querySelector('#score-0').textContent;
//console.log(x);


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click',function(){

    var dice = Math.floor(Math.random() * 6) +1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if (dice !==1){
        roundscores += dice;
        //roundscores = roundscores + dice;
        document.querySelector('#current-' + activePlayer ).textContent = roundscores;
    } else {
        nextPlayer();

    }
});

document.querySelector('.btn-hold').addEventListener('click',function () {

    scores[activePlayer] += roundscores;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //hitting hold transfers the die to other player
    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
    }
    else {
        nextPlayer();
    }
})

function nextPlayer(){

    activePlayer ===0 ? activePlayer =1 : activePlayer =0;
    roundscores = 0;

    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';


}


