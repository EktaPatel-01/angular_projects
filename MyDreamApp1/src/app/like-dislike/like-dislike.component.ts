import { Component } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent {
  likeLabel='Like';
  likeCount=0;
  likeButton='likeButtonStyle';

  dislikeLabel="Dislike";
  dislikeCount=0;
  dislikeButton='dislikeButtonStyle';



  increaseLikes(){
    this.likeCount++;
  }
  increaseDislikes(){
    this.dislikeCount++;
  }
}
