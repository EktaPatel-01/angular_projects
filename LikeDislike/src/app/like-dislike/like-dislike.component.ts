import { Component } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent {
  likeLabel="Like";
  likeCount=0;
  likestyle="likeStyle";

  dislikeLabel="Dislike";
  dislikeCount=0;
  dislikeStyle="dislikeStyle"

  increLikeCount(){
    if(this.likeCount==20){
      this.likeCount=0;
    }
      this.likeCount++;
  }

  incrDislikeCount(){
    if(this.dislikeCount==20){
      this.dislikeCount=-1;
    }
    this.dislikeCount++;
  }

}

