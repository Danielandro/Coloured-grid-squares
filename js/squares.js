var container = document.querySelector('.container'); 
var button = document.getElementById('clearButton'); 

function addDiv(numberOfDivsToCreate) {    
    var gridCellDimensions = ((600 / numberOfDivsToCreate) - 2).toFixed(2); 
    var gridSize = Math.pow(numberOfDivsToCreate, 2); 

    // create grid cells & add to container
    while (gridSize > 0) {
        var newDiv = document.createElement('div'); 	
        container.appendChild(newDiv); 
        newDiv.classList.add('grid'); 
        newDiv.style.height = gridCellDimensions + 'px';  
        newDiv.style.width = gridCellDimensions + 'px'; 
        newDiv.style.border = '1px solid black';             
        gridSize--; 
    }

    var gridCells = document.querySelectorAll('.grid'); 
    gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor)); 
    console.log(gridCellDimensions);
    console.log('Grid has been created!!')
}

// CHANGE CELL COLOR 
function changeColor() {
    this.style.backgroundColor = '#ff9999'; 
}

// CLEAR GRID & PROMPT NEW GRID
function clear() {    	
    var reqGridSize = prompt('How many squares per side?'); 

    if (reqGridSize >= 1 && reqGridSize <= 100) { 
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild); // removes all child nodes from container div
        }
        addDiv(reqGridSize); // create new grid 
    } else {
        alert ('Choose a number between 1-100'); 
        clear();
    }

}

button.addEventListener('click', clear); 
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