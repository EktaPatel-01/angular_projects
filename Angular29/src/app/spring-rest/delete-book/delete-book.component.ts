import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  constructor(private bookSvc: BookService){}

  bookId : number = 0;

  deleteBook(){
    this.bookSvc.deleteBook(this.bookId).subscribe(
      res => {console.log(res)},
      err => {console.log(err.error)}
    )
  }
}
