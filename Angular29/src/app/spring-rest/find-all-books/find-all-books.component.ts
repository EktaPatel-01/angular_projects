import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../Book';

@Component({
  selector: 'app-find-all-books',
  templateUrl: './find-all-books.component.html',
  styleUrls: ['./find-all-books.component.css']
})
export class FindAllBooksComponent {

  // injecting object of bookservice
  constructor(private bookSvc: BookService){}


  // book list
  bookList : Book[] = [];

  // find all
  findAll(){
    this.bookSvc.findAllBook().subscribe(
      // if it works then we get a response
      res => {
        this.bookList = res;
      }, 
      // if it doesn't then we get an error
      err => {
        console.log(err);
      }
    )
  }
}
