import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{

  constructor(private srvr:BookService,private router:Router){
  }
  ngOnInit(): void {   
  }
  bookIdToEdit:Book=new Book();
  isEdited!:boolean;

  localEditBook(){
    this.isEdited=this.srvr.editABook(this.bookIdToEdit);
    if(this.isEdited==true){
      alert("Book Edited Successfully...");
    }
    else{
      alert("Book not found..");
    }
    this.router.navigate(['/ViewAllBooks']);
  }
}
