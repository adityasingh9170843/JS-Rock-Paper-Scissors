let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

updateScore();



function PickcomputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissor';
      }

      return computerMove;
}

function playerMove(Move){
    const computerMove = PickcomputerMove();


    let result = '';
    if(Move == 'rock'){
        if(computerMove === 'rock'){
            result = 'tie';
        }
        else if(computerMove === 'paper'){
            result = 'lose';
        }
        else if(computerMove === 'scissor'){
            result = 'win';
        }
    }
    else if(Move === 'paper'){
        if(computerMove === 'rock'){
            result = 'lose';
        }
        else if(computerMove === 'paper'){
            result = 'tie';
        }
        else if(computerMove === 'scissor'){
            result = 'win';
        }
    }
    else if (Move === 'scissor'){
        if(computerMove === 'rock'){
            result = 'lose';
        }
        else if(computerMove === 'paper'){
            result = 'win';
        }
        else if(computerMove === 'scissor'){
            result = 'tie';
        }
    }

    if (result === 'win') {
        score.wins += 1;
    } else if (result === 'lose') {
        score.losses += 1;
    } else if (result === 'tie') {
        score.ties += 1;
    }
    
    updateScore();
    document.querySelector('.js-result').innerHTML= `${result}`;
    document.querySelector('.js-moves').innerHTML= ` You Chose: <img src="${Move}-emoji.png">
        Computer Chose: <img src="${computerMove}-emoji.png" >`;
    localStorage.setItem('score',JSON.stringify(score));
   
}

function updateScore(){
     document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, Losses: ${score.losses},Tie: ${score.ties}`
}
