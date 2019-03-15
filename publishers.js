var retrievedObject = localStorage.getItem("bookArray");
var newObject = JSON.parse(retrievedObject);
var table = document.getElementById("tbl-record");
var publisherTitle = new Array();
for (let i = 0; i < newObject.length; i++) {
  var count = 0;
  var pubName = newObject[i].publisherName;
  var bookTitle = new Array();
  for (let j = 0; j < newObject.length; j++) {
    if (newObject[j].publisherName == pubName) {
      publisherTitle.push(newObject[j].publisherName);
      bookTitle.push(newObject[j].bookName);
      count++;
    }
    if (!publisherTitle.length > 1) {
      var noRepeat = publisherTitle[0];
    }
  }
  var row = (table.insertRow(-1).outerHTML =
    "<tr id='row" +
    i +
    "'>" +
    "<td>" +
    newObject[i].publisherName +
    "</td>" +
    "<td " +
    ">" +
    bookTitle +
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
    newObject[i].publisherName;
  }
}
function deleteAuthor(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}
