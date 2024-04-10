import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent implements OnInit {

  constructor(private srvr:BookService){

  }
  allBooks!:Book[];
  ngOnInit(): void {
      this.allBooks=this.srvr.getAllBook();
  }

}
