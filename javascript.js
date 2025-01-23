const myLibrary = [];

function Book(myTitle, myAuthor, myPages) {
  this.title = myTitle;
  this.author = myAuthor;
  this.pages = myPages;
}

function addBookToLibrary(myTitle, myAuthor, myPages) {
  const myBook = new Book(myTitle, myAuthor, myPages);
  myLibrary.push(myBook);
}

addBookToLibrary("The Alchemist", "Paulo Chelo", 172);
addBookToLibrary("Don Quixote", "Miguel de Cervantes", 300);
addBookToLibrary("Alice's Adventures in Wonderland", "Lewis Carroll", 500);
addBookToLibrary("The Adventures of Tom Sawyer", "Mark Twain", 400);

const myContainer = document.querySelector(".container");

for (let i = 0; i < myLibrary.length; i++) {
  let displayBook = document.createElement("div");
  displayBook.classList.add("displayBook");
  let myButtonDiv = document.createElement("div");
  const myButton = document.createElement("button");
  myButtonDiv.classList.add("myButtonDiv");
  myButton.classList.add("myButton");
  myButton.textContent = "Remove";
  myButtonDiv.appendChild(myButton);
  displayBook.appendChild(myButtonDiv);
  let displayBookMain = document.createElement("div");
  let displayBookTitle = document.createElement("p");
  let displayBookAuthor = document.createElement("p");
  let displayBookPages = document.createElement("p");
  displayBookTitle.textContent = myLibrary[i].title;
  displayBookAuthor.textContent = myLibrary[i].author;
  displayBookPages.textContent = myLibrary[i].pages;
  displayBookMain.appendChild(displayBookTitle);
  displayBookMain.appendChild(displayBookAuthor);
  displayBookMain.appendChild(displayBookPages);
  displayBookMain.classList.add("displayBookMain");
  displayBook.appendChild(displayBookMain);
  myContainer.appendChild(displayBook);
}

//Also Add these events for each book that is added
const myButtons = document.querySelectorAll(".myButton");

myButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.parentNode.remove();
  });
});

const myDisplayBookMains = document.querySelectorAll(".displayBookMain");

myDisplayBookMains.forEach((myDisplayBook) => {
  const BookStatus = document.createElement("div");
  BookStatus.textContent = "no Read";
  myDisplayBook.appendChild(BookStatus);
  BookStatus.classList.add("bookStatus");
});

const myBookStatus = document.querySelectorAll(".bookStatus");

myBookStatus.forEach((myStatus) => {
  myStatus.addEventListener("click", () => {
    if (myStatus.textContent == "Read") {
      myStatus.textContent = "no Read";
    } else {
      myStatus.textContent = "Read";
    }
  });
});
