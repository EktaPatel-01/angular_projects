import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  // variables to keep track of like
  likeCount : number = 0;

  // function to increase likeCount
  increaseLikeCount(){
    // check if the likeCount is below 100, if it reaches to 100, reset it to 1
    if(this.likeCount==100){
      this.likeCount = 0;
    }

    // increment likeCount
    this.likeCount++;
  }
   
}
