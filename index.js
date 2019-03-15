var bookId;
var retrievedObject = localStorage.getItem("bookArray");
if (retrievedObject == null) {
  window.location.href = "./empty.html";
}
var newObject = JSON.parse(retrievedObject);
var count = 1;
var table = document.getElementById("tbl-record");
for (let i = 0; i < newObject.length; i++) {
  //var table_len = table.rows.length - 1;
  var row = (table.insertRow(-1).outerHTML =
    "<tr id='row" +
    i +
    "'>" +
    "<td" +
    ">" +
    count++ +
    "</td>" +
    "<td>" +
    newObject[i].bookName +
    "</td>" +
    "<td " +
    ">" +
    newObject[i].authorName +
    "</td>" +
    "</td>" +
    "<td " +
    ">" +
    newObject[i].publisherName +
    "</td>" +
    "</td>" +
    "<td" +
    ">" +
    newObject[i].date +
    "</td>" +
    "<td> <button class='button-action' style='font-size:11.5px'" +
    "onclick='deleteRecord(" +
    i +
    ")'" +
    "'>Delete</button>" +
    "<button class='button-action' style='font-size:11.5px' " +
    "onclick='updateRecordPopulate(" +
    i +
    ")'" +
    "'>Update</button>" +
    "</td>" +
    "</tr>");
}

function deleteRecord(no) {
  document.getElementById("row" + no + "").outerHTML = "";
  var retrievedObject = localStorage.getItem("bookArray");
  var newObject = JSON.parse(retrievedObject);
}
function updateRecordPopulate(bookId) {
  modal.style.display = "block";
  var retrievedObject = localStorage.getItem("bookArray");
  var newObject = JSON.parse(retrievedObject);
  for (let i = 0; i < newObject.length; i++) {
    if (i == bookId) {
      document.getElementById("bookId").value = bookId;
      document.getElementById("bookName").value = newObject[i].bookName;
      document.getElementById("authorName").value = newObject[i].authorName;
      document.getElementById("publisherName").value =
        newObject[i].publisherName;
      document.getElementById("date").value = newObject[i].date;
    }
  }
}
function updateData() {
  var retrievedObject = localStorage.getItem("bookArray");
  var newObject = JSON.parse(retrievedObject);
  for (let i = 0; i < newObject.length; i++) {
    bookId = document.getElementById("bookId").value;
    if (i == bookId) {
      newObject[i].bookName = document.getElementById("bookName").value;
    }
  }
  localStorage.setItem("bookArray", JSON.stringify(newObject));
  location.reload();
}
function purgeLibrary() {
  localStorage.clear();
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
