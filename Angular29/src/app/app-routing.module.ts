import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './spring-rest/add-book/add-book.component';
import { UpdateBookComponent } from './spring-rest/update-book/update-book.component';
import { DeleteBookComponent } from './spring-rest/delete-book/delete-book.component';
import { FindBookComponent } from './spring-rest/find-book/find-book.component';
import { FindAllBooksComponent } from './spring-rest/find-all-books/find-all-books.component';

const routes: Routes = [
  {path: "", component: AddBookComponent},
  {path: "addBook", component: AddBookComponent},
  {path: "updateBook", component: UpdateBookComponent},
  {path: "deleteBook", component: DeleteBookComponent},
  {path: "findBook", component: FindBookComponent},
  {path: "findAllBooks", component: FindAllBooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
