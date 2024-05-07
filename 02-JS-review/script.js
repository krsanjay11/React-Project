// use Quokka to run JS here
// ctrl + k + q

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
// Destructuring
const book = getBook(2);
const book2 = getBook(3);
// using objects assign
// const title = book.title;
// const author = book.author;

// using destructuring on objects
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
// console.log(author, title) // 'Stanislaw Lem', 'The Cyberiad'

// using array ordering
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// using destructuring for objects
// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre); // 'science fiction', 'humor'

// Rest/Spread operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// Rest operator
// only place in the end of destructuring operator
console.log(primaryGenre, secondaryGenre, otherGenres); // 'science fiction', 'humor', [ 'speculative fiction', 'short stories', 'fantasy' ]

// spread operator
// array
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres); // Array(6) ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy','epic fantasy']

// object
// help to add new properties and update existing ones
const updatedBook = {
  ...book, //creating a new objectcreating a new object
  moviePublicationDate: "2001", // adding a new property
  pages: 1010, // update/override existing property
};
updatedBook;

// template literals
const summary = `${title}, a ${pages}-pages long book (${
  2 + 4
}), was written by ${author} in ${publicationDate.split("-")[0]}`; // 'The Cyberiad, a 295-pages long book (6), was written by Stanislaw Lem in 1965'
summary;

// ternary operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(pagesRange); // 'less than 1000'
console.log(
  `The Book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`
); // 'The Book has not been adapted as a movie'

// Arrow functions
// traditional way of writting function declaration
function getYear(str) {
  return str.split("-")[0];
}
console.log(getYear(publicationDate)); // '1965'

// function expression
const getYear2 = function (str) {
  return str.split("-")[0];
};
console.log(getYear2(publicationDate)); // '1965'

// Arrow function
const getYear3 = (str) => str.split("-")[0];
console.log(getYear3(publicationDate)); // '1965'

const getYear4 = (str) => {
  return str.split("-")[0];
};
console.log(getYear4(publicationDate)); // '1965'

// shortcircuiting
// && - check for falsy: 0, '', null, undefined
console.log(true && "Some string"); // 'Some string'
console.log(false && "Some string"); // false
console.log(hasMovieAdaptation && "The book has a movie"); // false
console.log(0 && "second"); // 0
console.log("first" && "second"); // second

// || - check for truty value
console.log(true || "Some"); // true
console.log(false || "Some"); // some
console.log(book.translations.spanish || "Not Translated"); // "Not Translated"
console.log(book.reviews.librarything.reviewsCount || "No Data"); // "No Data" but we required 0

// ?? nullish coalescing
console.log(book.reviews.librarything.reviewsCount ?? "No Data"); // 0

// optional chaining

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

console.log(getTotalReviewCount(book)); // 812
console.log(getTotalReviewCount(book2)); // 49701 with optional chaining, cannot read the property of undefined withot optional chaining

// The array map method

const books = getBooks();

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

const x = [1, 2, 4, 5, 6].map((el) => el * 2);
console.log(x); //[ 2, 4, 8, 10, 12 ]

const titles = books.map((book) => book.title);
console.log(titles); // [  'The Lord of the Rings', 'The Cyberiad', 'Dune', 'Harry Potter and the Philosopher\'s Stone', 'A Game of Thrones']

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData); // [{ title: 'The Lord of the Rings',  author: 'J. R. R. Tolkien',    reviewsCount: 13869  }

// Array filter method
const longBookswithMovieAdaptation = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBookswithMovieAdaptation); // length of object got is 3

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks); // [ 'The Lord of the Rings', 'Dune', 'Harry Potter and the Philosopher\'s Stone' ]

// Array reduce method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0); // callback function, starter value
console.log(pagesAllBooks); // 3227

// array sort method - mutate/changes the array,
const arr = [3, 7, 1, 9, 6];
const sortedAsc = arr.slice().sort((a, b) => a - b); // ascending
console.log(sortedAsc); // [ 1, 3, 6, 7, 9 ]

// take a copy of data using slice method before sorting
const sortedDesc = arr.slice().sort((a, b) => b - a); // descending
console.log(sortedDesc); // [ 9, 7, 6, 3, 1 ]
console.log(arr); // [ 3, 7, 1, 9, 6 ]

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

// Working with immutable arrays
// 1) Add book object ot array
const newBook = {
  id: 6,
  title: "The book1",
  author: "me1",
};
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd.length); // 6

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete.length); // 5

// 3) update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 50 } : book
);
console.log(booksAfterUpdate);
*/
// Asynchronous JS: Promises

fetch("https://jsonplaceholder.typicode.com/todos") // fetch returns a promise
  .then((res) => res.json())
  .then((data) => console.log("🔴🔴", data));

// Asynchronous JS; Async/ Await
const res = await fetch("https://jsonplaceholder.typicode.com/todos");
const data1 = await res.json();
console.log("🔥🔥", data1);

async function getTodos() {
  // it will return a promise
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data1 = await res.json();
  console.log("🔥", data1);
  return data;
}
console.log(getTodos()); // Promise {...}
