import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  actualBooks:Book[]=[
    {bookId:101, bookName:"Java Programming",bookAuthor:"AAA",bookPrice:460},
    {bookId:101, bookName:"Python",bookAuthor:"BBB",bookPrice:354},
    {bookId:101, bookName:"CPP",bookAuthor:"CCC",bookPrice:879},
    {bookId:101, bookName:"Networking",bookAuthor:"DDD",bookPrice:284},
    
  ];
  getAllBook():Book[]{
    console.log("returning all books...");
    return this.actualBooks;
  }
  addABook(newBook:Book){
    console.log("adding new book...");
    this.actualBooks.push(newBook);
  }
  findABook(bookIdToFind : number):Book{
    console.log("Finding a book...");
    let bookFound!:Book;
    for(let i=0;i<this.actualBooks.length;i++){
      if(this.actualBooks[i].bookId==bookIdToFind){
        bookFound=this.actualBooks[i];
        break;
      }
    }
    return bookFound;
  }
  editABook(BookToEdit:Book):boolean {
    console.log("editing a book...");
    for(let oneBook of this.actualBooks){
      if(oneBook.bookId==BookToEdit.bookId){
        this.actualBooks.splice(this.actualBooks.indexOf(oneBook),1);
        this.actualBooks.push(BookToEdit);
        return true;
      }
    }
    return false;
  }
  deleteBook(bookIdToDelete:number):boolean{
    console.log("Deleting a Book...");
    for(let oneBook of this.actualBooks){
      if(oneBook.bookId==bookIdToDelete){
        this.actualBooks.splice(this.actualBooks.indexOf(oneBook),1);
        return true;
      }
    }
    console.log("array:"+this.actualBooks);
    return false;
  }
}
