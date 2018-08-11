// Variables
var numsqrs = 6;
var colors = generateRandomColors(numsqrs);
var squares = document.querySelectorAll('.square');
var picked = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var displayResult = document.getElementById('result');
var h1 = document.querySelector('h1');
var reset = document.getElementById('reset');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
// Initial function
game();
// Difficulty level: easy
easy.addEventListener('click', function(){
    easy.classList.add('selected');
    hard.classList.remove('selected');
    numsqrs = 3
    colors = generateRandomColors(numsqrs);
    picked = pickColor();
    colorDisplay.textContent = picked;
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    } game();
})
hard.addEventListener('click', function(){
    hard.classList.add('selected');
    easy.classList.remove('selected');
    numsqrs = 6;
    colors = generateRandomColors(numsqrs);
    picked = pickColor();
    colorDisplay.textContent = picked;
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
        }
    }game();
});
function game(){
    colorDisplay.textContent = picked;
    for (var i = 0; i< squares.length; i++) {
    // Add new random colors to the squares from pickColor()
    squares[i].style.backgroundColor = colors[i];
    // Evaluates color choiced by user.
    squares[i].addEventListener('click', function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === picked) {
            displayResult.textContent = 'Correct!';
            changeColor(picked);
            h1.style.background = clickedColor;
            reset.textContent = 'Play Again?';
        } else {
            displayResult.textContent = 'Try Again!';
            this.style.backgroundColor = '#f29e93';
        }
    })
}
}
// Change all color to right choice when player wins.
function changeColor (color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
//Create a string with the random colors from function ramdomColor()
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
arr.push(randomColor());
    }
    return arr;
}
// Generate new random color
function randomColor() {
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
return 'rgb(' + r+ ', ' + g + ', ' + b + ')';
}
// Allows player to start over with a new game.
reset.addEventListener('click', function() {
    colors = generateRandomColors(numsqrs);
    picked = pickColor();
    colorDisplay.textContent = picked;
    displayResult.textContent = ' ';
    h1.style.backgroundColor = '#bee585';
    reset.textContent = 'New Colors';
    game();
});