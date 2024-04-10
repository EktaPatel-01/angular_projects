import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewSingleBookComponent } from './view-single-book/view-single-book.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddBookComponent,
    ViewSingleBookComponent,
    ViewAllBooksComponent,
    EditBookComponent,
    DeleteBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AddBookComponent,
    ViewSingleBookComponent,
    ViewAllBooksComponent,
    EditBookComponent,
    DeleteBookComponent
  ]
})
export class FiveModule { }
