import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bsrv:BookService,private router:Router){
  }
   ngOnInit(): void { 
   }

   demoBook:Book=new Book();  ///obj
   localAddBook(){
    this.bsrv.addABook(this.demoBook);
    alert("Book added Successfully..");
    this.router.navigate(['/ViewAllBooks']);
   }
}
