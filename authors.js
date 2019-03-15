var retrievedObject = localStorage.getItem("bookArray");
var newObject = JSON.parse(retrievedObject);
var table = document.getElementById("tbl-record");
var authorTitle = new Array();
for (let i = 0; i < newObject.length; i++) {
  var count = 0;
  var aName = newObject[i].authorName;
  var bootTitle = new Array();
  for (let j = 0; j < newObject.length; j++) {
    if (newObject[j].authorName == aName) {
      authorTitle.push(newObject[j].authorName);
      bootTitle.push(newObject[j].bookName);
      count++;
    }
    if (!authorTitle.length > 1) {
      var noRepeat = authorTitle[0];
    }
  }
  var row = (table.insertRow(-1).outerHTML =
    "<tr id='row" +
    i +
    "'>" +
    "<td>" +
    newObject[i].authorName +
    "</td>" +
    "<td " +
    ">" +
    bootTitle +
    "</td>" +
    "<td " +
    ">" +
    count +
    "</td>" +
    "</td>" +
    "<td> <button class='button-action'" +
    "onclick='deleteAuthor(" +
    i +
    ")'" +
    "'>Delete</button>" +
    "</td>" +
    "</tr>");
}
function noOfBooks() {
  for (let i = 0; i < newObject.length; i++) {
    newObject[i].authorName;
  }
}
function deleteAuthor(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}
