//The above code is a JavaScript code that is executed when the window loads. It adds event listeners to three blocks with IDs "block-1", "block-2", and "block-3".
window.onload = function () {
  //adding event listener when first block is clicked
  document.getElementById("block-1").addEventListener("click", activateTileOne);

  //adding event listener when third block is clicked
  document
    .getElementById("block-3")
    .addEventListener("click", activateTileThree);

  //adding event listener when second block is clicked
  document.getElementById("block-2").addEventListener("click", activateTileTwo);
};

//When the first block is clicked, the function activateTileOne is called.
//This function activates the first block by adding the "active" class to its parent element and changing the stroke color of the ring to "#007F61".
//It also makes the inner filled circle visible by removing the "display" class.
function activateTileOne(event) {
  //getting the ring of first block
  var element = document.getElementById("ellipse_one");
  //adding class active to first block
  element.parentElement.parentNode.parentElement.classList.add("active");
  //making the inner filled circle visible
  element.children["1"]?.classList.remove("display");
  //changing the stroke of the ring
  element.children["0"].style.stroke = "#007F61";

  //selecting the ring of second block
  var element = document.getElementById("ellipse_two");
  //removing the class active thus deactivating this block
  element.parentElement.parentNode.parentElement.classList.remove("active");
  //adding display class which deactivates the tile
  element.childNodes["3"].classList.add("display");
  //changing stroke of outer ring
  element.childNodes["3"].style.stroke = "#DADADA";

  //selecting the ring of third block
  var element = document.getElementById("ellipse_three");
  //removing the class active thus deactivating this block
  element.parentElement.parentNode.parentElement.classList.remove("active");
  //adding display class which deactivates the tile
  element.childNodes["3"].classList.add("display");
  //changing stroke of outer ring
  element.childNodes["3"].style.stroke = "#DADADA";

  var element = document.getElementsByClassName("total_dynamic");
  console.log(element);
  element["0"].innerHTML = ` DKK ${Math.round(195).toFixed(2)}`;
}

//When the third block is clicked, the function activateTileThree is called.
//This function activates the third block by adding the "active" class to its parent element and changing the stroke color of the ring to "#007F61".
//It also makes the inner filled circle visible by removing the "display" class.
function activateTileThree(event) {
  //getting the ring of third block
  var element = document.getElementById("ellipse_three");
  //adding class active to third block
  element.parentElement.parentNode.parentElement.classList.add("active");
  //activating the third block adding inner circle inside ring
  element.children["1"]?.classList.remove("display");
  //changing the stroke of ring
  element.children["0"].style.stroke = "#007F61";

  //selecting the ring of second block
  var element = document.getElementById("ellipse_two");
  //removing the class active thus deactivating this block
  element.parentElement.parentNode.parentElement.classList.remove("active");
  //adding display class which deactivates the tile
  element.childNodes["3"].classList.add("display");
  //changing stroke of outer ring
  element.childNodes["3"].style.stroke = "#DADADA";

  //selecting the ring of first block
  var element = document.getElementById("ellipse_one");
  //removing the class active thus deactivating this block
  element.parentElement.parentNode.parentElement.classList.remove("active");
  //adding display class which deactivates the tile
  element.childNodes["3"].classList.add("display");
  //changing stroke of outer ring
  element.childNodes["3"].style.stroke = "#DADADA";

  var element = document.getElementsByClassName("total_dynamic");
  console.log(element);
  element["0"].innerHTML = ` DKK ${Math.round(528).toFixed(2)}`;
}

//When the second block is clicked, the function activateTileTwo is called.
//This function activates the second block by adding the "active" class to its parent element and changing the stroke color of the ring to "#007F61".
//It also makes the inner filled circle visible by removing the "display" class.
function activateTileTwo(event) {
  //getting the ring of second block
  var element = document.getElementById("ellipse_two");
  //adding class active to second block
  element.parentElement.parentNode.parentElement.classList.add("active");
  //activating the second block adding inner circle inside ring
  element.children["1"]?.classList.remove("display");
  //changing the stroke of ring
  element.children["0"].style.stroke = "#007F61";

  //selecting the ring of first block
  var element = document.getElementById("ellipse_one");
  //removing the class active thus deactivating this block
  element.parentElement.parentNode.parentElement.classList.remove("active");
  //adding display class which deactivates the tile
  element.childNodes["3"].classList.add("display");
  //changing stroke of outer ring
  element.childNodes["3"].style.stroke = "#DADADA";

  //selecting the ring of third block
  var element = document.getElementById("ellipse_three");
  //removing the class active thus deactivating this block
  element.parentElement.parentNode.parentElement.classList.remove("active");
  //adding display class which deactivates the tile
  element.childNodes["3"].classList.add("display");
  //changing stroke of outer ring
  element.childNodes["3"].style.stroke = "#DADADA";

  var element = document.getElementsByClassName("total_dynamic");
  console.log(element);
  element["0"].innerHTML = ` DKK ${Math.round(360).toFixed(2)}`;
}
