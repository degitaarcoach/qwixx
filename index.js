let diceContainer = document.querySelector('.dice-container');
let btnRoll = document.querySelector('.btn-roll');
let btnAction = document.querySelector('.btn-action')
let btnNewgame = document.querySelector('.btn-newgame')
let playerDiv;

let newDiv = document.createElement('div');
let player = 'player';

let allDice = ['die-white die-white-one', 'die-white die-white-two', 'die-red', 'die-yellow', 'die-green', 'die-blue'];

let rowRed = document.querySelector('.row-red');
let rowYellow = document.querySelector('.row-yellow');
let rowGreen = document.querySelector('.row-green');
let rowBlue = document.querySelector('.row-blue');

let toArray = function(arr) {
  return [].slice.call(arr.children)
}
let rowRedArray = toArray(rowRed)
let rowYellowArray = toArray(rowYellow)
let rowGreenArray = toArray(rowGreen)
let rowBlueArray = toArray(rowBlue)

let rowRedCrosses = []
let rowYellowCrosses = []
let rowGreenCrosses = []
let rowBlueCrosses = []

let diceValues;
let action = 0;
let playedAction = true;


// New Game 

let newGame = function() {
  rowRedCrosses = []
  rowYellowCrosses = []
  rowGreenCrosses = []
  rowBlueCrosses = []
  allDice = ['die-white die-white-one', 'die-white die-white-two', 'die-red', 'die-yellow', 'die-green', 'die-blue'];
  action = 0
  playedAction = true
}


// When the game ends...

let points = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];
let minusPoints = [0, 5, 10, 15, 20];

let totalRedScore = document.querySelector('.total-color-red')
let totalYellowScore = document.querySelector('.total-color-yellow')
let totalGreenScore = document.querySelector('.total-color-green')
let totalBlueScore = document.querySelector('.total-color-blue')
let totalMinusScore = document.querySelector('.total-minus')
let totalScore = document.querySelector('.total-score')

let endGame = function() {
  let red = points[rowRedCrosses.length]
  let yellow = points[rowYellowCrosses.length]
  let green = points[rowGreenCrosses.length]
  let blue = points[rowBlueCrosses.length]
  let minus = minusPoints[minusSquareNum]
  let total = (red + yellow + green + blue) - minus
  totalRedScore.textContent = red
  totalYellowScore.textContent = yellow
  totalGreenScore.textContent = green
  totalBlueScore.textContent = blue
  totalMinusScore.textContent = minus
  totalScore.textContent = total;
  btnAction.classList.add('hide')
  btnRoll.classList.add('hide')
  playerDiv.classList.add('hide')
  btnNewgame.classList.remove('hide')
}


// Check the value for dice

let diceValueCheck = function(container) {
  let diceArray = toArray(container)
  diceValues = [null, null, null, null, null, null]
  diceArray.forEach((die, index) => {
    if(die.classList.contains('first-face')) {
      diceValues[index] = 1
    } else if (die.classList.contains('second-face')) {
      diceValues[index] = 2
    } else if (die.classList.contains('third-face')) {
      diceValues[index] = 3
    } else if (die.classList.contains('fourth-face')) {
      diceValues[index] = 4
    } else if (die.classList.contains('fifth-face')) {
      diceValues[index] = 5
    } else if (die.classList.contains('sixth-face')) {
      diceValues[index] = 6
    }
  })
  console.log(diceValues)
}

// Cross functionality for red row
let redCrossChecker = function() {
  rowRedCrosses = []
  rowRedArray.forEach((element, index) => {
  if (element.classList.contains('cross') || element.classList.contains('key-cross')) {
    rowRedCrosses.push(index)} 
})};
  rowRedArray.forEach((square, index) => {
    square.addEventListener('click', function() {
      if (action === 1){ 
        if (diceValues[0] + diceValues[1] === index + 2 && !square.classList.contains('cross') && !square.classList.contains('disabled')) {
          action = 2;
          btnAction.textContent = 'actie 2'
          playedAction = true;
          btnRoll.classList.remove('hide')
          square.classList.add('cross')}
        redCrossChecker()
        let maxIndexNumberRed = Math.max(...rowRedCrosses)
        rowRedArray.forEach((el, i) => {
          if (i < maxIndexNumberRed && !el.classList.contains('cross') ) {el.classList.add('disabled')} })}
      else if (action === 2){ 
        if ((diceValues[0] + diceValues[2] === index + 2 || diceValues[1] + diceValues[2] === index + 2) && !square.classList.contains('cross') && !square.classList.contains('disabled')){
          action = 0
          btnAction.textContent = ''
          btnAction.classList.add('hide')
          btnRoll.classList.remove('hide')
          playedAction = true;
          square.classList.add('cross')}
        redCrossChecker()
        let maxIndexNumberRed = Math.max(...rowRedCrosses)
        rowRedArray.forEach((el, i) => {
          if (i < maxIndexNumberRed && !el.classList.contains('cross') ) {el.classList.add('disabled')} })}
    })
  });

// Cross functionality for yellow row
let yellowCrossChecker = function() {
  rowYellowCrosses = []
  rowYellowArray.forEach((element, index) => {
  if (element.classList.contains('cross') || element.classList.contains('key-cross')) {
    rowYellowCrosses.push(index)} 
})};
  rowYellowArray.forEach((square, index) => {
    square.addEventListener('click', function() {
      if (action === 1){ 
        if (diceValues[0] + diceValues[1] === index + 2 && !square.classList.contains('cross') && !square.classList.contains('disabled')) {
          action = 2;
          btnAction.textContent = 'actie 2'
          playedAction = true;
          btnRoll.classList.remove('hide')
          square.classList.add('cross')}
        yellowCrossChecker()
        let maxIndexNumberYellow = Math.max(...rowYellowCrosses)
        rowYellowArray.forEach((el, i) => {
          if (i < maxIndexNumberYellow && !el.classList.contains('cross')) {el.classList.add('disabled')} })}
        else if (action === 2){ 
          if ((diceValues[0] + diceValues[3] === index + 2 || diceValues[1] + diceValues[3] === index + 2) && !square.classList.contains('cross') && !square.classList.contains('disabled')){
            action = 0
            btnAction.textContent = ''
            btnAction.classList.add('hide')
            btnRoll.classList.remove('hide')
            playedAction = true;
            square.classList.add('cross')}
          yellowCrossChecker()
          let maxIndexNumberYellow = Math.max(...rowYellowCrosses)
          rowYellowArray.forEach((el, i) => {
            if (i < maxIndexNumberYellow && !el.classList.contains('cross') ) {el.classList.add('disabled')} })}
      })
  });

// Cross functionality for green row
let greenCrossChecker = function() {
  rowGreenCrosses = []
  rowGreenArray.forEach((element, index) => {
  if (element.classList.contains('cross') || element.classList.contains('key-cross')) {
    rowGreenCrosses.push(index)} 
})};
  rowGreenArray.forEach((square, index) => {
    square.addEventListener('click', function() {
      if (action === 1){
        if (diceValues[0] + diceValues[1] === 12 - index && !square.classList.contains('cross') && !square.classList.contains('disabled')) {
          action = 2;
          btnAction.textContent = 'actie 2'
          playedAction = true;
          btnRoll.classList.remove('hide')
          square.classList.add('cross')}
      greenCrossChecker()
      let maxIndexNumberGreen = Math.max(...rowGreenCrosses)
      rowGreenArray.forEach((el, i) => {
        if (i < maxIndexNumberGreen && !el.classList.contains('cross') ) {el.classList.add('disabled')} })}
        else if (action === 2){
          if ((diceValues[0] + diceValues[4] === 12 - index || diceValues[1] + diceValues[4] === 12 - index) && !square.classList.contains('cross') && !square.classList.contains('disabled')){
            action = 0
            btnAction.textContent = ''
            btnAction.classList.add('hide')
            btnRoll.classList.remove('hide')
            playedAction = true;
            square.classList.add('cross')}
          greenCrossChecker()
          let maxIndexNumberGreen = Math.max(...rowGreenCrosses)
          rowGreenArray.forEach((el, i) => {
            if (i < maxIndexNumberGreen && !el.classList.contains('cross') ) {el.classList.add('disabled')} })}
      })
  });

// Cross functionality for blue row
let blueCrossChecker = function() {
  rowBlueCrosses = []
  rowBlueArray.forEach((element, index) => {
  if (element.classList.contains('cross') || element.classList.contains('key-cross')) {
    rowBlueCrosses.push(index)} 
})};
  rowBlueArray.forEach((square, index) => {
    square.addEventListener('click', function() {
      if (action === 1){
        if (diceValues[0] + diceValues[1] === 12 - index && !square.classList.contains('cross') && !square.classList.contains('disabled')) {
          action = 2;
          btnAction.textContent = 'actie 2'
          playedAction = true;
          btnRoll.classList.remove('hide')
          square.classList.add('cross')}
      blueCrossChecker()
      let maxIndexNumberBlue = Math.max(...rowBlueCrosses)
      rowBlueArray.forEach((el, i) => {
        if (i < maxIndexNumberBlue && !el.classList.contains('cross') ) {el.classList.add('disabled')} })}
        else if (action === 2){
          if ((diceValues[0] + diceValues[5] === 12 - index || diceValues[1] + diceValues[5] === 12 - index) && !square.classList.contains('cross') && !square.classList.contains('disabled')){
            action = 0
            btnAction.textContent = ''
            btnAction.classList.add('hide')
            btnRoll.classList.remove('hide')
            playedAction = true;
            square.classList.add('cross')}
          blueCrossChecker()
          let maxIndexNumberBlue = Math.max(...rowBlueCrosses)
          rowBlueArray.forEach((el, i) => {
            if (i < maxIndexNumberBlue && !el.classList.contains('cross') ) {el.classList.add('disabled')} })}
      })
  });

let keyCrosses = 0

// Cross function for red key
let redKey = document.querySelector('.red-key')
redKey.addEventListener('click', function() {
  if (rowRedCrosses.length >= 5 && rowRedCrosses.includes(12 - 2) && !redKey.classList.contains('key-cross')) 
  {redKey.classList.add('key-cross')
  keyCrosses++
  allDice = ['die-white die-white-one', 'die-white die-white-two', 'hide', 'die-yellow', 'die-green', 'die-blue'];
  redCrossChecker()
  if (keyCrosses === 2) {
    endGame()
  }}
  });

// Cross function for yellow key
let yellowKey = document.querySelector('.yellow-key')
yellowKey.addEventListener('click', function() {
  if (rowRedCrosses.length >= 5 && rowYellowCrosses.includes(12 - 2) && !yellowKey.classList.contains('key-cross')) 
  {yellowKey.classList.add('key-cross')
  keyCrosses++
  allDice = ['die-white die-white-one', 'die-white die-white-two', 'die-red', 'hide', 'die-green', 'die-blue'];
  allDice.slice('die-yellow')
  yellowCrossChecker()
  if (keyCrosses === 2) {
    endGame()
  }}
  });

// Cross function for green key
let greenKey = document.querySelector('.green-key')
greenKey.addEventListener('click', function() {
  if (rowGreenCrosses.length >= 5 && rowGreenCrosses.includes(12 - 2) && !greenKey.classList.contains('key-cross')) 
  {greenKey.classList.add('key-cross')
  keyCrosses++
  allDice = ['die-white die-white-one', 'die-white die-white-two', 'die-red', 'die-yellow', 'hide', 'die-blue'];
  allDice.slice('die-green')
  greenCrossChecker()
  if (keyCrosses === 2) {
    endGame()
  }}
  });

// Cross function for blue key
let blueKey = document.querySelector('.blue-key')
blueKey.addEventListener('click', function() {
  if (rowBlueCrosses.length >= 5 && rowBlueCrosses.includes(12 - 2) && !blueKey.classList.contains('key-cross')) 
  {blueKey.classList.add('key-cross')
  keyCrosses++
  let allDice = ['die-white die-white-one', 'die-white die-white-two', 'die-red', 'die-yellow', 'die-green' ,'hide'];
  allDice.slice('die-blue')
  blueCrossChecker()
  if (keyCrosses === 2) {
    endGame()
  }}
  });

// Cross function minus-squares
let minusSquares = document.querySelectorAll('.minus-square');
let minusSquareNum = 0;

minusSquares.forEach((minusSquare, index) => {
  minusSquare.addEventListener('click', function() {
    if (index <= minusSquareNum && !playedAction){
    minusSquare.classList.add('minus-cross')
    playedAction = true;
    btnAction.textContent = ''
    btnAction.classList.add('hide')
    btnRoll.classList.remove('hide')
    minusSquareNum++

    if (minusSquareNum === 4) {
      endGame()
    }
    }
  })
})

// Dice roll functionality

let rollDie = function () {
  return Math.ceil(Math.random() * 6);
};

let rollDice = function () {
  action = 1;
  btnAction.classList.remove('hide')
  btnAction.textContent = 'actie 1'
  btnRoll.classList.add('hide')
  playedAction = false;
  diceContainer.innerHTML = '';
  let playerOne = document.querySelector('.player-1').value;
  let playerTwo = document.querySelector('.player-2').value;

  player === playerOne ? (player = playerTwo) : (player = playerOne);
  let activePlayer = newDiv;
  activePlayer.innerHTML = `<div class='player'> actieve speler: <div>${player}</div></div>`;

  playerDiv = document.querySelector('.player')

  for (let index = 0; index < allDice.length; index++) {
    const die = allDice[index];
    let firstFace = `
  <div class="dice ${die} first-face">
  <span class="dot"></span>
  </div>`;
    let secondFace = `
  <div class="dice ${die} second-face">
  <span class="dot"></span>
  <span class="dot"></span>
  </div>`;
    let thirdFace = `
  <div class="dice ${die} third-face">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  </div>`;
    let fourthFace = `
  <div class="dice ${die} fourth-face">
    <div class="column">
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <div class="column">
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>`;
    let fifthFace = `
  <div class="dice ${die} fifth-face ">
    <div class="column">
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <div class="column">
      <span class="dot"></span>
    </div>
    <div class="column">
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>`;
    let sixthFace = `
  <div class="dice ${die} sixth-face">
    <div class="column">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <div class="column">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>`;

    switch (rollDie()) {
      case 1:
        diceContainer.insertAdjacentHTML('beforeend', firstFace);
        break;
      case 2:
        diceContainer.insertAdjacentHTML('beforeend', secondFace);
        break;
      case 3:
        diceContainer.insertAdjacentHTML('beforeend', thirdFace);
        break;
      case 4:
        diceContainer.insertAdjacentHTML('beforeend', fourthFace);
        break;
      case 5:
        diceContainer.insertAdjacentHTML('beforeend', fifthFace);
        break;
      case 6:
        diceContainer.insertAdjacentHTML('beforeend', sixthFace);
        break;
    }
  }
  diceContainer.insertAdjacentElement('beforebegin', activePlayer);
  diceValueCheck(diceContainer);
};

let actionChecker = function() {
  if (action === 0 || playedAction) {
    rollDice()
  }
}

let actionSkip = function() {
  action = 2
  btnAction.textContent = 'actie 2'
}

let actionCheckerTwo = function() {
  if(action === 1){
  actionSkip()
  }
}

btnRoll.addEventListener('click', actionChecker);

btnAction.addEventListener('click', actionCheckerTwo);

btnNewgame.addEventListener('click', newGame);