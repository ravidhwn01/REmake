

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


function generateCV(){
  console.log(`generate cv`);
  // name
  let nameField = document.getElementById("name").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;
  // contact
  document.getElementById("contactT").innerHTML = document.getElementById("contact").value;
  // address
  document.getElementById("addressT").innerHTML = document.getElementById("address").value;
  // objective
  document.getElementById("objectiveT").innerHTML = document.getElementById("objective").value;
  //links
  document.getElementById("fbT").innerHTML = document.getElementById("facebook").value;
  document.getElementById("instaT").innerHTML = document.getElementById("instagram").value;
  document.getElementById("githubT").innerHTML = document.getElementById("github").value;
  document.getElementById("inkedT").innerHTML = document.getElementById("linkedIn").value;
  
  // work experience
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;
  // academic qualifications
  let aqs = document.getElementsByClassName("eqField");
  let str2 = "";
  for (let e of aqs) {
    str2 = str2 + `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str2;
  // change the button
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";


}

function printCV(){
  console.log(`print cv`);
  window.print();
  
}
