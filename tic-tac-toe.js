var currentPlayer = 'x';

function symbolDisplay() {
  if ($(this).hasClass('disable')){
    alert("space is taken")
  }
  else{

    if (currentPlayer === 'x') {
      this.innerHTML = 'x';
      this.classList.add('disable');
      var x = this.getAttribute("value");
      // console.log(x);
      boxes[x] = 'x';
      console.log(boxes)
    } else {
      this.innerHTML = 'o';
      this.classList.add('disable');
      var o = this.getAttribute("value");
      // console.log(o);
      boxes[o] = 'o';
      console.log(boxes)
    }
    checkForWinner();
    changePlayer();
}
}

function changePlayer() {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

function resetBoard() {
  boxes = [null, null, null, null, null, null, null, null, null];
  $('td').removeClass('disable');
  console.log(boxes)
  var cells2 = document.getElementsByTagName('td');
  for(i = 0; i<cells2.length; i++) {

    cells2[i].innerHTML=' ';
}
}

var boxes = [null, null, null, null, null, null, null, null, null]

function checkForWinner(){

  //check for 'x' winner
  if (boxes[0] ==='x' && boxes[1] === 'x' && boxes[2] === 'x' || boxes[0] === 'o' && boxes[1] === 'o' && boxes[2] === 'o'){
    console.log("Winner!");
    alert("winner is " + currentPlayer)
    resetBoard();


   } else if (boxes[3] === 'x' && boxes[4] === 'x' && boxes[5] === 'x' || boxes[3] === 'o' && boxes[4] === 'o' && boxes[5] === 'o' ){
     console.log("Winner!")
    alert("winner is " + currentPlayer)
    resetBoard();


   } else if (boxes[6] === 'x' && boxes[7] === 'x' && boxes[8] === 'x'  || boxes[6] === 'o' && boxes[7] === 'o' && boxes[8] === "o" ){
     console.log("Winner!")
    alert("winner is " + currentPlayer)
    resetBoard();

   } else if (boxes[0] === 'x' && boxes[4] === 'x' && boxes[8] === 'x'  || boxes[0] === 'o' && boxes[4] === 'o' && boxes[8] === "o" ){
     console.log("Winner!");
    alert("winner is " + currentPlayer);
    resetBoard();

   } else if (boxes[2] === 'x' && boxes[4] === 'x' && boxes[6] === 'o'  || boxes[2] === 'o' && boxes[4] === 'o' && boxes[6] === 'o' ){
     console.log("Winner!");
     alert("winner is " + currentPlayer);
    resetBoard();

   } else if (boxes[0] === 'x' && boxes[3] === 'x' && boxes[6] === 'x'  || boxes[0] === 'o' && boxes[3] === 'o' && boxes[6] === "o" ){
     console.log("Winner!");
    alert("winner is " + currentPlayer);
    resetBoard();

   } else if (boxes[1] === 'x' && boxes[4] === 'x' && boxes[7] === 'x'  || boxes[1] === 'o' && boxes[4] === 'o' && boxes[7] === "o" ){
     console.log("Winner!");
    alert("winner is " + currentPlayer);
    resetBoard();

   } else if (boxes[2] === 'x' && boxes[5] === 'x' && boxes[8] === 'x'  || boxes[2] === 'o' && boxes[5] === 'o' && boxes[8] === "o" ){
     console.log("Winner!");
    alert("winner is " + currentPlayer);
    resetBoard();

   } 

}

var cells = document.getElementsByTagName('td');
for(i = 0; i<cells.length; i++) {
  cells[i].addEventListener("click", symbolDisplay)
}
