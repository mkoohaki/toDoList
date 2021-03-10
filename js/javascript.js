//JavaScript Document

//declare/create a variable call '...', assign and intialize it with the elements in the HTML
let input = document.querySelector('input');
let button = document.querySelector('button');
let div = document.querySelector('div');
let body = document.querySelector('body');

//declare/create a variable call 'div1', assign and intialize it with the element 'div'
let div1 = document.createElement('div');

//declare/create a variable call 'div2', assign and intialize it with creating the element 'div' (called variable div1) as a child of variable 'div'
let div2 = div.appendChild(div1);

//declare/create a variable call 'i', assign and intialize it with integer number
let i = 1;

//Generate a random number with function 'random'
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

//Generate a new div with function 'addDiv'
function addDiv() {

  //declare/create a variable call '...', assign and intialize it with the elements in the HTML
  var newInput = document.createElement('input');
  var label = document.createElement('label');
  var newButton = document.createElement('input');
  var div3 = document.createElement('div');

  //declare/create a variable call 'newDiv', assign and intialize it with creating the element 'div' (called variable 'div3') as a child of variable 'div2'
  var newDiv = div2.appendChild(div3);

  //declare/create a variable call 'newLabel', assign and intialize it with creating the element 'label' (called variable 'label') as a child of variable 'newDiv'
  var newLabel = newDiv.appendChild(label);

  //assign and intialize the variable 'newLabel' with content of variable 'input'
  newLabel.textContent = input.value;

  /*
  	declare/create a variable call 'rndCol', assign and intialize it with random numbers created by function random - the number in the parenthes is 
  	the maximum number that the function can provie (between 1 and 255 (one comes from the code in the function))
  */
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

  //Set style for variable 'newDiv' (background color, div shadow, and distance between the new divs)
  newDiv.style.backgroundColor = rndCol;
  newDiv.style.boxShadow = '10px 10px 5px black';
  newDiv.style.marginTop = '30px';

  //Set new attribute for variable 'newDiv' (specifis id for each: these are never used in this assignment)
  newDiv.setAttribute('id', 'divNo-' + i);

  //Set new attribute for variable 'newLabel' (text decoration: intialize it with none)
  newLabel.setAttribute('style.textDecoration', 'none');

  //Set style for variable 'newLabel' (padding with random number by using 'random' function, the value can be between 1 and 50 (one comes from the code in the function))
  newLabel.style.padding = random(50) + 'px';

  //declare/create a variable call 'checkbox', assign and intialize it with creating the element 'input' (called variable 'newInput') as a child of variable 'newLabel'
  var checkbox = newLabel.appendChild(newInput);

  //declare/create a variable call 'deleteButton', assign and intialize it with creating the element 'input' (called variable 'newButton') as a child of variable 'newLabel'
  var deleteButton = newLabel.appendChild(newButton);

  //Set type and name for variable 'checkbox'
  checkbox.type = 'checkbox';
  checkbox.name = 'checkbox';

  //declare/create a variable call 'newNum', assign and intialize it with a random number by using 'random' function, the value can be between 1 and 50 (one comes from the code in the function))
  var newNum = random(50);

  //Condition to update the variable 'newNum' if it is less than 5 it will set 5.
  if (newNum < 5) {
    newNum = 5;
  }

  //Set style for variable 'checkbox' (size of checkbox by using 'newNum' and the margins)
  checkbox.style.width = newNum + 'px';
  checkbox.style.height = newNum + 'px';
  checkbox.style.marginLeft = '60%';
  checkbox.style.marginRight = '5%';

  //just for fun!
  //Add an event listener to 'checkbox', when the mouse goes over it, the size for random time (1-100 milisecnods) changes the randomly size (6-55px)
  checkbox.addEventListener('mouseenter', function(event) {

    //Set time randomly
    var randomTime = random(100);

    //Change the checkbox size randomly 
    setTimeout(function() {
      checkbox.style.width = random(50) + 5 + 'px';
      checkbox.style.height = random(50) + 5 + 'px';
    }, randomTime);
  }, true);

  //Set type and value for variable 'deleteButton'
  deleteButton.type = 'submit';
  deleteButton.value = 'Delete';

  //Set value for variable 'input' when the button clicked (Add a task) and copy these to the label, it will be clear
  input.value = '';

  //Remove the 'newDive' with function 'removing'
  function removing() {

    newDiv.remove();
  }

  //Add an event listener to 'deleteButton', when the butten (created inside each new div) clicks, it will call the function 'removing'
  deleteButton.addEventListener('click', function() {

    removing();
  });

  /*
    reate a new div as a new chaild of the main div at the end of list, but because it is inside the main function, uses the old values, then the id, color, and sizes does not change
    decorate the label content's text: if it is none decorate then it will decorate and reverse. It also play the sound each time call.
  */
  function lineDecoration() {

    var checked = checkbox.checked;
    removing();
    var newDiv = div2.appendChild(div3);
    var mySound = document.querySelector('audio');
    mySound.play();

    if (checked) {
      newLabel.style.textDecoration = 'line-through';
    } else {
      newLabel.style.textDecoration = 'none';
    }
  var timer = setInterval(function () {
    newDiv.style.backgroundColor = 'green';
    }, 50);
  }

  //The counter of each task, it uses for providing the unique id for elements
  i++;

  //Add an event listener to 'checkbox', when the check box (created inside each new div) checkes, it will call the function 'lineDecoration'
  checkbox.addEventListener('click', function() {

    lineDecoration();
  });

  //Add an event listener to 'deleteButton', when the mouse goes over the 'deleteButton' it set the style for newDiv: changes the box shadow to red
  deleteButton.addEventListener('mouseenter', function() {
    newDiv.style.boxShadow = '10px 10px 5px red';
    //I could change the newDiv background cou+lr and back it
    //newDiv.style.backgroundColor = 'red';
  });

  //Add an event listener to 'deleteButton', when the mouse leaves the 'deleteButton' it set the style for newDiv: changes the box shadow to black
  deleteButton.addEventListener('mouseleave', function() {
    newDiv.style.boxShadow = '10px 10px 5px black';
    //newDiv.style.backgroundColor = rndCol;
  });

}

//Add an event listener to 'button', when the button clicks and the 'input' was not empty, then it will call the function 'addDiv'
button.addEventListener('click', function() {

  if (input.value.length != 0) {
    addDiv();
  }
});