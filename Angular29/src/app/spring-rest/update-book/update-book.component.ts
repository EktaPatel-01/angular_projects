import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../Book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {


  constructor(private bookSvc: BookService){}

  book = new Book();

  updateBook(){
    this.bookSvc.updateBook(this.book).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    )
  }

}
