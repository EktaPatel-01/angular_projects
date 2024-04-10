import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNovelComponent } from './add-novel/add-novel.component';
import { DeleteNovelComponent } from './delete-novel/delete-novel.component';
import { FindNovelComponent } from './find-novel/find-novel.component';
import { FindAllNovelComponent } from './find-all-novel/find-all-novel.component';
import { UpdateNovelComponent } from './update-novel/update-novel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    AddNovelComponent,
    DeleteNovelComponent,
    FindNovelComponent,
    FindAllNovelComponent,
    UpdateNovelComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    AddNovelComponent,
    DeleteNovelComponent,
    FindNovelComponent,
    FindAllNovelComponent,
    UpdateNovelComponent,
    HomePageComponent
  ]
})
export class NovelModule { }
