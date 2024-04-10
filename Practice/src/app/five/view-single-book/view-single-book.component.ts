import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-view-single-book',
  templateUrl: './view-single-book.component.html',
  styleUrls: ['./view-single-book.component.css']
})
export class ViewSingleBookComponent implements OnInit{
  constructor(private srvr:BookService,private router:Router){

  }
ngOnInit(): void {
    
}
bookIdToSearch!:number;
found!:Book;
localViewBook(){
  this.found=this.srvr.findABook(this.bookIdToSearch);
  if(this.found==undefined){
    alert("Book is not found..");
    this.bookIdToSearch=0;
  }
}
}
