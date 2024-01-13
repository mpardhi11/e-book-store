import Book1 from "./assets/images/books/book-1.png";
import Book10 from "./assets/images/books/book-10.png";
import Book2 from "./assets/images/books/book-2.png";
import Book3 from "./assets/images/books/book-3.png";
import Book4 from "./assets/images/books/book-4.png";
import Book5 from "./assets/images/books/book-5.png";
import Book6 from "./assets/images/books/book-6.png";
import Book7 from "./assets/images/books/book-7.png";
import Book8 from "./assets/images/books/book-8.png";
import Book9 from "./assets/images/books/book-9.png";

import Author1 from "./assets/images/authors/author-1.png";
import Author2 from "./assets/images/authors/author-2.png";
import Author3 from "./assets/images/authors/author-3.png";
import Author4 from "./assets/images/authors/author-4.png";
import Author5 from "./assets/images/authors/author-5.png";
import Author6 from "./assets/images/authors/author-6.png";

export const Authors = [
  { id: 1, name: "Mike", profile_image: Author1 },
  { id: 2, name: "John", profile_image: Author2 },
  { id: 3, name: "Angelina", profile_image: Author3 },
  { id: 3, name: "Jane", profile_image: Author4 },
  { id: 3, name: "Doe", profile_image: Author5 },
  { id: 3, name: "Rock", profile_image: Author6 },
];

export const Books = [
  { id: 1, title: "Love of My Life", book_cover: Book1, price: "100.00" },
  { id: 2, title: "Sword", book_cover: Book2, price: "140.00" },
  { id: 3, title: "Walk into Shadow", book_cover: Book3, price: "210.00" },
  { id: 4, title: "Our Butterfly", book_cover: Book4, price: "450.00" },
  { id: 5, title: "Our Butterfly", book_cover: Book5, price: "450.00" },
  { id: 6, title: "Our Butterfly", book_cover: Book6, price: "850.00" },
  { id: 7, title: "Our Butterfly", book_cover: Book7, price: "460.00" },
  { id: 8, title: "Our Butterfly", book_cover: Book8, price: "410.00" },
  { id: 9, title: "Our Butterfly", book_cover: Book9, price: "550.00" },
  { id: 10, title: "Our Butterfly", book_cover: Book10, price: "450.00" },
];

export const FeatureBooks = [
  {
    id: 3,
    title: "Walk into Shadow",
    book_cover: Book3,
    selling_price: "210.00",
    mrp: "1400.00",
  },
  {
    id: 4,
    title: "Our Butterfly",
    book_cover: Book4,
    selling_price: "450.00",
    mrp: "1670.00",
  },
  {
    id: 2,
    title: "Sword",
    book_cover: Book2,
    selling_price: "140.00",
    mrp: "5700.00",
  },
  {
    id: 1,
    title: "Love of My Life",
    book_cover: Book1,
    selling_price: "100.00",
    mrp: "600.00",
  },
];
