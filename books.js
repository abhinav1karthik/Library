const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
              <p><strong>Title:</strong> ${book.title}</p>
              <p><strong>Author:</strong> ${book.author}</p>
              <p><strong>Pages:</strong> ${book.pages}</p>
              <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
              <button class="toggle-read" onclick="toggleReadStatus(${index})">Toggle Read</button>
              <button onclick="removeBook(${index})">Remove</button>
          `;
    libraryDiv.appendChild(bookCard);
  });
}

function toggleReadStatus(index) {
  myLibrary[index].toggleRead();
  displayBooks();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
    document.getElementById("bookDialog").close();
    this.reset();
  });

document.getElementById("newBookBtn").addEventListener("click", function () {
  document.getElementById("bookDialog").showModal();
});

document.getElementById("closeDialog").addEventListener("click", function () {
  document.getElementById("bookDialog").close();
});
