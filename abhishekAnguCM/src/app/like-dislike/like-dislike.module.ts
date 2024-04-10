import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './like/like.component';
import { DislikeComponent } from './dislike/dislike.component';
import { FormsModule } from '@angular/forms';
import { LikeDislikePageComponent } from './like-dislike-page/like-dislike-page.component';



@NgModule({
  declarations: [
    LikeComponent,
    DislikeComponent,
    LikeDislikePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LikeComponent,
    DislikeComponent,
    LikeDislikePageComponent
  ]
})
export class LikeDislikeModule { }
