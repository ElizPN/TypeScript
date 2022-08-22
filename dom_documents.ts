// To make sure that your DOM is ready add Event listener.
// This function (your callback) runs when the DOM is ready, i.e. when the document has been parse
document.addEventListener("DOMContentLoaded", function () {
  let element: HTMLElement | null = document.querySelector("div");
  console.log(element);

  let element2: HTMLElement | null = document.querySelector("ul");
  console.log(element2);
});

// NodeList collection
document.addEventListener("DOMContentLoaded", function () {
  let list: NodeList | null = document.querySelectorAll("p");
  console.log(list);
});

// HTMLCollection
document.addEventListener("DOMContentLoaded", function () {
  let elements: HTMLCollection = document.getElementsByTagName("li");
  console.log(elements);
});
