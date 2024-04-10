import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../Book';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.css']
})
export class FindBookComponent {

  // injecting book service
  constructor(private bookSvc: BookService){}

  // bookid
  bookId : number = 0;
  book = new Book();
  // find
  find(){
    this.bookSvc.findBook(this.bookId).subscribe(
      res => {
        this.book = res;
      },
      err => {
        console.log(err.error.message);
      }
    )
  }
}
