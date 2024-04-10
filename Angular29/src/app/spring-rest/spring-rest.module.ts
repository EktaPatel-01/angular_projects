import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { FindBookComponent } from './find-book/find-book.component';
import { FindAllBooksComponent } from './find-all-books/find-all-books.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';


@NgModule({
  declarations: [
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    FindBookComponent,
    FindAllBooksComponent,
    BookPageComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  exports: [
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    FindBookComponent,
    FindAllBooksComponent,
    BookPageComponent
  ]
})
export class SpringRestModule { }
