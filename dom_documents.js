// To make sure that your DOM is ready add Event listener.
// This function (your callback) runs when the DOM is ready, i.e. when the document has been parse
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector("div");
  console.log(element);
  var element2 = document.querySelector("ul");
  console.log(element2);
});
// NodeList collection
document.addEventListener("DOMContentLoaded", function () {
  var list = document.querySelectorAll("p");
  console.log(list);
});
// HTMLCollection
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.getElementsByTagName("li");
  console.log(elements);
});
