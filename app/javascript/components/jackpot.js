
class Jackpot {
  // constructor(dice1, dice2, cards){
  //   this.cardsArray = cards;
  //   this.dice1 = dice1;
  //   this.dice2 = dice2;
  // }
  // conditions for the game to start
  startGame(){
    this.selectCard = null;
    this.selectedCards = [];
  }
  //
  // selectCard(card){
  //   if (this.canSelectCard(card)) {
  //     this.selectedCards.push(card);
  //     card.classList.add('selected');
  //   }
  // }


  // rollDices function
  rollDices(){
    document.getElementById('btn-roll').addEventListener('click', () => {
      // create random for dices
      let dice1 = Math.floor(Math.random()*6)+1;
      let dice2 = Math.floor(Math.random()*6)+1;
      let sum = dice1 + dice2;

      if (sum < 9){
        document.getElementById('status').innerText = "Card to select either: " + dice1 + " or " + dice2 + " or " + sum;
      } else {
        document.getElementById('status').innerText = "Card to select either: " + dice1 + " or " + dice2;
      }

      document.getElementById('c' + dice1).classList.add('selected');
      document.getElementById('c' + dice2).classList.add('selected');
      document.getElementById('c' + dice1 + dice2).classList.add('selected');



      // display the dices' results
      document.getElementById('dice1').src = '/assets/dice-' + dice1 +'.png';
      document.getElementById('dice2').src = '/assets/dice-' + dice2 +'.png';
      // disabled button after rolling
      document.getElementById('btn-roll').setAttribute('disabled', true);

    });
  }


  canSelectCard(card){
    return card === dice1 || card === dice2 || card === dice1 + dice2 || !this.selectedCards.includes(card);
  }
  // victory function
  victory(){
    document.getElementById('victory-text').classList.add('visible');
  }
  // game over function
  gameOver(){
    document.getElementById('game-over-text').classList.add('visible');
  }
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', playJackpot());
} else {
  playJackpot();
}

function playJackpot(){
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let tiles = Array.from(document.getElementsByClassName('tile'));
  let game = new Jackpot();

  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      game.startGame();
    });
  });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      let cardVal = parseInt(card-jackpot.dataset.value);

        card.classList.add('selected');
        this.selectedCards.push('card');
    });
  });
}

export { playJackpot };
