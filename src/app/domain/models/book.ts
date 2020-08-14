export class Book {

  title: string;
  author: string;
  gender: string;
  classification: string;
  description: string;

  constructor(book) {
    this.title = book.title;
    this.author = book.author;
    this.gender = book.gender;
    this.description = book.description;
    this.classification = book.classification;
  }

}
