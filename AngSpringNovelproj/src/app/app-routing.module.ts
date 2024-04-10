import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNovelComponent } from './novel/add-novel/add-novel.component';
import { UpdateNovelComponent } from './novel/update-novel/update-novel.component';
import { DeleteNovelComponent } from './novel/delete-novel/delete-novel.component';
import { FindNovelComponent } from './novel/find-novel/find-novel.component';
import { FindAllNovelComponent } from './novel/find-all-novel/find-all-novel.component';

const routes: Routes = [
    {path:"", component:AddNovelComponent},
    {path:"addNovel", component:AddNovelComponent},
    {path:"updateNovel", component:UpdateNovelComponent},
    {path:"deleteNovel", component:DeleteNovelComponent},
    {path:"findNovel", component:FindNovelComponent},
    {path:"findAllNovels", component:FindAllNovelComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
