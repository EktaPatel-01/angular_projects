import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit{

  constructor(private srvr:BookService ,private router:Router){
  }
  ngOnInit(): void {  
  }
  bookIdToDelete!:number;
  found!:boolean;

  localDeleteBook(){
    this.found=this.srvr.deleteBook(this.bookIdToDelete);
    if(this.found==false){
      alert("Book not Found");

    }
    else{
      alert("Book with this book id is deleted Successfully..."+this.bookIdToDelete);
      this.router.navigate(['/ViewAllBooks']);
    }
  }
}
