import { Component } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent {
  likeCount:number=0;
  likestyle="likeStl";

  dislikeCount:number=0;
  disStyle="dislikeStl";

  incrLikeCount(){
    if(this.likeCount==10){
      this.likeCount=0
    }
    this.likeCount++;
  }
  incrDislikeCount(){
    if(this.dislikeCount==10){
      this.dislikeCount=0
    }
    this.dislikeCount++;
  }
}
