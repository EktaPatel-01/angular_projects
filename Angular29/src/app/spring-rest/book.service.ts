import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // injecting object of httpclient service
  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:8080/book";

  // create
  addBook(book : Book) {
    return this.httpClient.post(this.baseUrl+"/addBook", book, {responseType:'text'});
  }

  // find
  findBook(bookId: number) {
    return this.httpClient.get<Book>(this.baseUrl+"/findBook/"+bookId);
   }

  // findall
  findAllBook() { 
    return this.httpClient.get<Book[]>(this.baseUrl+"/findAllBooks");

  }

  // update
  updateBook(book: Book) { 
    return this.httpClient.put(this.baseUrl+"/updateBook", book, {responseType: 'text'});

  }

  // delete
  deleteBook(bookId : number) {
    return this.httpClient.delete(this.baseUrl+"/deleteBook/"+bookId, {responseType: 'text'});
   }
}
