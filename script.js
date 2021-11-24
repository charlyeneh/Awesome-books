/* eslint-disable no-unused-vars */

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksContainer = document.querySelector('.books-container');
const getLocalBooks = localStorage.getItem('books');
const localBooks = JSON.parse(getLocalBooks);
let booksCollection = getLocalBooks ? localBooks : [];

function addBook(title, author) {
  const book = {
    title,
    author,
    id: parseInt((Math.random() * 1000000000), 10),
  };
  booksCollection.push(book);
  localStorage.setItem('books', JSON.stringify(booksCollection));
}

