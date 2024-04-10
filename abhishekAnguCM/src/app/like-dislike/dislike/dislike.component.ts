import { Component } from '@angular/core';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css']
})
export class DislikeComponent {
  dislikeCount: number = 0;

  // function to increase dislikeCount
  decreaseLikeCount() {
    // check if the dislikeCount is below 20, if it reaches to 20, reset it to 1
    if (this.dislikeCount == 20) {
      this.dislikeCount = 0;
    }

    // increment dislikeCount
    this.dislikeCount++;
  }
}
