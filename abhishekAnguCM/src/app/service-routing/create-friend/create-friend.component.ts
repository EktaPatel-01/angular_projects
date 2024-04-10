import { Component } from '@angular/core';
import { Friend } from '../Friend';
import { FriendService } from '../friend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-friend',
  templateUrl: './create-friend.component.html',
  styleUrls: ['./create-friend.component.css']
})
export class CreateFriendComponent {

  friendObj: Friend = new Friend();
  constructor(private friendService: FriendService, private router: Router) { }

  // calling service function inside local function
  addFriend(){
    this.friendService.addAFriend(this.friendObj);
    this.router.navigate(['/showallfriends']);
  }

}
