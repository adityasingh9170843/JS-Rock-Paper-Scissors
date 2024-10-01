let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  
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
        score.win += 1;
    } else if (result === 'lose') {
        score.lose += 1;
    } else if (result === 'tie') {
        score.tie += 1;
    }
    

    localStorage.setItem('score',JSON.stringify(score));
    
    alert(`You picked ${Move}. Computer picked ${computerMove}. you${result}
wins: ${score.win}, Losses: ${score.lose},Tie: ${score.tie}`);
}

