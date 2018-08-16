var container = document.querySelector('.container'); // grab container div
var button = document.getElementById('clearButton'); // grab the button

function addDiv(divCount) {    
    var setDimensions = ((600 / divCount) - 2).toFixed(2); // calculate grid cell dimensions
    var numberOfGrids = Math.pow(divCount, 2); // calculate number of grid cells

    while (numberOfGrids > 0) {
        var newDiv = document.createElement('div'); // create new div 	
        container.appendChild(newDiv); // append as child of container div
        newDiv.classList.add('grid'); // add '.grid' class to new div
        newDiv.style.height = setDimensions + 'px'; // set grid cell height 
        newDiv.style.width = setDimensions + 'px'; // set grid cell width 
        newDiv.style.border = '1px solid black'; // adds border to grid cell        
        numberOfGrids--; // iterate loop downwards
    }
    var gridCells = document.querySelectorAll('.grid'); // grab all grid cells
    gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor)); // adds mouse enter listener to each grid cell, change colour
    console.log(setDimensions);
    console.log('Grid has been created!!')
}

// CHANGE CELL COLOR 
function changeColor() {
    this.style.backgroundColor = '#ff9999'; // change entered grid cell to red
}

// CLEAR GRID & PROMPT NEW GRID
function clear() {
    var gridCells = document.querySelectorAll('.grid'); // grab all grid cells
    gridCells.forEach(cells => cells.style.backgroundColor = '#1C86EE'); // change all grid cells to blue	
    var reqGridSize = prompt('How many squares per side?'); // user supplied value for new number of grid cells

    if (reqGridSize >= 1 && reqGridSize <= 100) { // check value is 1-100
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild); // removes all child nodes from container div
        }
        addDiv(reqGridSize); // create new grid using user supplied value
    } else {
        return ('Choose a number between 1-100'); // if value invalid, suggest valid value
    }

}

button.addEventListener('click', clear); // add click listener to button, runs clear() function
window.onload = addDiv(16); // on page load, create a 16 x 16 grid

// JUNE 2017 VERSION
/*$(document).ready(function(){

$div = $('<div></div>')
addDiv = $div;

  function extraDiv(){
      $('.container').append(addDiv);
};

divCount = ('div').length;
if (divCount < 17){
  extraDiv();
}


//place loop here


});

/*divCount = ('div').length;
if (divCount < 17){
  div();
}*/

//var divCol = ('<div class = "column"><div>');


// $(document).ready(function(){
//   divRow = $('<div class="row" height="50px" width="50px"><div>');//  $('.container').append(divRow);
// });

// alert($('div').length);

// var divCount = 17; // No of Div's to create


//NOV 2017 VERSION - RECURSION ATTEMPT
// need divCount = Math.pow(reqDivSize, 2)

// function addDiv(divCount) {
//     var container = document.querySelector('.container'); // select container div        
//     var newDiv = document.createElement('div'); // creates a new div



//     if (divCount <= 0) {
//         return console.log('Divs created!!!'); // BASE CASE
//     } else {

//         container.appendChild(newDiv); // adds new div (as a child of) container div 
//         newDiv.classList.add('grid'); // adds '.grid' class 

//         newDiv.style.height = '35.5px'; // set height 
//         newDiv.style.width = '35.5px'; // set width 
//         newDiv.style.border = '1px solid black'; // adds border         

//         return addDiv(divCount - 1); // RECURSIVE CASE
//     }
//     // functions here will not run
// }