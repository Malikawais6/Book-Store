var bookArray = new Array();
var bookName = document.getElementById("bookName");
var authorName = document.getElementById("authorName");
var publisherName = document.getElementById("publisherName");
var date = document.getElementById("date");
function Books(bName, aName, pName, pdate) {
  this.bookName = bName;
  this.authorName = aName;
  this.publisherName = pName;
  this.date = pdate;
}
function insertBook() {
  var bookNameValue = bookName.value;
  var authorNameValue = authorName.value;
  var publisherNameValue = publisherName.value;
  var dateValue = date.value;
  var result = JSON.parse(localStorage.getItem("bookArray"));
  if (result == null) result = [];
  let bookObject = new Object();
  bookObject = new Books(
    bookNameValue,
    authorNameValue,
    publisherNameValue,
    dateValue
  );

  result.push(bookObject);
  localStorage.setItem("bookArray", JSON.stringify(result));

  location.reload();
}
