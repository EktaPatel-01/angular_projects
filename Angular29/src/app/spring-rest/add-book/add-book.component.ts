import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private bookSvc: BookService){}

  book = new Book();
  addBook(){
    this.bookSvc.addBook(this.book).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    )
  }
}
