import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './five/add-book/add-book.component';
import { ViewAllBooksComponent } from './five/view-all-books/view-all-books.component';
import { ViewSingleBookComponent } from './five/view-single-book/view-single-book.component';
import { EditBookComponent } from './five/edit-book/edit-book.component';
import { DeleteBookComponent } from './five/delete-book/delete-book.component';

const routes: Routes = [
  {path:'',component:AddBookComponent},
  {path:'AddBook',component:AddBookComponent},
  {path:'ViewBook',component:ViewSingleBookComponent},
  {path:'ViewAllBooks',component:ViewAllBooksComponent},
  {path:'EditBook',component:EditBookComponent},
  {path:'DeleteBook',component:DeleteBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
