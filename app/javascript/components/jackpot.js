

const playJackpot = () => {

  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let tiles = Array.from(document.getElementsByClassName('tile'));
  let flippedTiles = [];
  let clicked = false;

  const startGame = () => {
    overlays.forEach(overlay => {
      overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
      });
    });
  };

  const round = (dice1, dice2, totalDices) => {
    // Event Listener for rollDices
    document.getElementById('btn-roll').addEventListener('click', () => {
      // random dices
      dice1 = Math.floor(Math.random()*6)+1;
      dice2 = Math.floor(Math.random()*6)+1;
      totalDices = dice1 + dice2;
      clicked = false;
      // display dices results
      document.getElementById('dice1').src = './../assets/images/dice-' + dice1 +'.png';
      document.getElementById('dice2').src = './../assets/images/dice-' + dice2 +'.png';
      // disabled btn-roll
      document.getElementById('btn-roll').setAttribute('disabled', '');

      let d1 = 0;
      let d2 = 0;
      let totalD = 0;

      if (!flippedTiles.includes(dice1)) {
        d1 = dice1;
      } else {
        d1 = 0;
      }

      if (!flippedTiles.includes(dice2)) {
        d2 = dice2;
      } else {
        d2 = 0;
      }

      if (!flippedTiles.includes(totalDices) && totalDices <= 9) {
        totalD = totalDices;
      } else {
        totalD = 0;
      }
      console.log(d1, d2, totalD)

      if (d1 === 0 && d2 === 0 && totalD === 0){
        setTimeout(() => {
          gameOver();
        },1500);
      }


      // conditions to allow the flip
      const canFlipTile = () => {
        return clicked === false;
      };

      // victory function
      const victory = () => {
        reset();
        document.getElementById('victory-text').classList.add('visible');
      };
      // flipTile function
      const flipTile = tile => {
        tiles.forEach(tile => {
          // Event listener for each tiles
          tile.addEventListener('click', function(){
            let tileVal = parseInt(this.dataset.value)
            if(canFlipTile() && (tileVal === d1 || tileVal === d2 || tileVal === totalD)) {
              tile.classList.add('flipped');
              flippedTiles.push(tileVal);
              clicked = true;
              document.getElementById('btn-roll').removeAttribute('disabled', '');
              console.log(flippedTiles);
              if (flippedTiles.length === tiles.length)
                victory();
            }
          });
        });
      };
      flipTile();
    });

    // Restart conditions
    const reset = () => {
      // Flip back tiles functions
      tiles.forEach(tile => {
        tile.classList.remove('flipped');
      });
      // Reset flippedTiles array
      flippedTiles = [];
      // set clicked to true to click nowhere
      clicked = true;
      // reset dice1 and dice2 view
      document.getElementById('dice1').src = '../assets/dice-1.png';
      document.getElementById('dice2').src = '../assets/dice-2.png';
      // Reset Roll button
      document.getElementById('btn-roll').removeAttribute('disabled', '');
    }
    // gameOver function
    const gameOver = () => {
      reset();
      document.getElementById('game-over-text').classList.add('visible');
    };
  };

  // call inner functions
  startGame();
  round();
};

export { playJackpot };



