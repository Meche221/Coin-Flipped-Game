// let coin = Math.floor(Math.random() * 2);
let guess;

function game() { 
  if(coin === 0){
    return 'Heads';
  }else{
    return 'Tails';
  }
}

function checking(){
  // Flip a new coin each time
  coin = Math.floor(Math.random() * 2);
  let coinResult = game();
  let guessResult = guess === 0 ? 'Heads' : 'Tails'
  
  let message = `Coin: ${coinResult} | Your guess ${guessResult} <br>`;
    if(coinResult === guessResult){
    message += 'You wonned'
  }else{
    message += 'YOU LOSED'
  }
  
  document.body.innerHTML += `<p>${message}</p>`;
}