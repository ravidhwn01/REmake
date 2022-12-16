

function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");
  let weOb = document.getElementById("we");
  let weAddButton = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButton);
}
function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");
  let aqOb = document.getElementById("aq");
  let aqAddButton = document.getElementById("aqAddButton");
  aqOb.insertBefore(newNode, aqAddButton);
}
