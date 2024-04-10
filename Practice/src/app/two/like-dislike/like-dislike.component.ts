import { Component } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent {

  likeLabel="Like";
  LikeCount=0;
  likeStyle="likeStyling";

  dislikeLabel="DisLike";
  DislikeCount=0;
  dislikeStyle="DislikeStyling";

  likeIncrease(){
    if(this.LikeCount==20){
      this.LikeCount=0;
    }
    this.LikeCount++;
  }
  dislikeIncrease(){
    if(this.DislikeCount==20){
      this.DislikeCount=0;
    }
    this.DislikeCount++;
  }
}
