window.onload = function () {
  document.getElementById("block-1").addEventListener("click", activateTileOne);

  document
    .getElementById("block-3")
    .addEventListener("click", activateTileThree);

  document.getElementById("block-2").addEventListener("click", activateTileTwo);
};

function activateTileOne(event) {
  var element = document.getElementById("ellipse_one");
  //stroke-width="0.903803"
  element.parentElement.parentNode.parentElement.classList.add("active");
  element.children["1"]?.classList.remove("display");
  element.children["0"].style.stroke = "#007F61";

  var element = document.getElementById("ellipse_two");
  //stroke-width="0.903803"
  element.parentElement.parentNode.parentElement.classList.remove("active");
  element.childNodes["3"].classList.add("display");
  element.childNodes["3"].style.stroke = "#DADADA";

  var element = document.getElementById("ellipse_three");
  //stroke-width="0.903803"
  element.parentElement.parentNode.parentElement.classList.remove("active");
  element.childNodes["3"].classList.add("display");
  element.childNodes["3"].style.stroke = "#DADADA";
}

function activateTileThree(event) {
  var element = document.getElementById("ellipse_three");
  //stroke-width="0.903803"
  element.parentElement.parentNode.parentElement.classList.add("active");
  element.children["1"]?.classList.remove("display");
  element.children["0"].style.stroke = "#007F61";

  var element = document.getElementById("ellipse_two");
  //stroke-width="0.903803"
  element.parentElement.parentNode.parentElement.classList.remove("active");
  element.childNodes["3"].classList.add("display");
  element.childNodes["3"].style.stroke = "#DADADA";

  var element = document.getElementById("ellipse_one");
  //stroke-width="0.903803"
  element.parentElement.parentNode.parentElement.classList.remove("active");
  element.childNodes["3"].classList.add("display");
  element.childNodes["3"].style.stroke = "#DADADA";
}

function activateTileTwo(event) {
  var element = document.getElementById("ellipse_two");
  //stroke-width="0.903803"
  element.parentElement.parentNode.parentElement.classList.add("active");
  element.children["1"]?.classList.remove("display");
  element.children["0"].style.stroke = "#007F61";

  var element = document.getElementById("ellipse_one");
  //stroke-width="0.903803"
  element.parentElement.parentNode.parentElement.classList.remove("active");
  element.childNodes["3"].classList.add("display");
  element.childNodes["3"].style.stroke = "#DADADA";

  var element = document.getElementById("ellipse_three");
  //stroke-width="0.903803"
  element.parentElement.parentNode.parentElement.classList.remove("active");
  element.childNodes["3"].classList.add("display");
  element.childNodes["3"].style.stroke = "#DADADA";
}
