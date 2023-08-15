// this is how we add a javascript file in our html file not in reactjs
{
  /* <script src='/script.js'></script> */
}
var list = document.getElementById("list-Items");
console.log(list);
var inputVal = document.getElementById("write");
let currentValue = "";
inputVal.addEventListener("input", function (e) {
  currentValue = e.target.value;
});

var button = document.getElementById("add");
button.addEventListener("click", function (e) {
  e.preventDefault();

  if (currentValue !== "" && currentValue !== undefined) {
    var newListElement = document.createElement("li");
    var textNode = document.createTextNode(currentValue);
    newListElement.appendChild(textNode);
    list.appendChild(newListElement);
    inputVal.value = "";
    currentValue = "";
  } else {
    alert("Please enter a value.");
  }
});
