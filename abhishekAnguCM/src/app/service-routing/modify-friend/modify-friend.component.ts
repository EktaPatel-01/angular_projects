import { Component } from '@angular/core';
import { Friend } from '../Friend';
import { FriendService } from '../friend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-friend',
  templateUrl: './modify-friend.component.html',
  styleUrls: ['./modify-friend.component.css']
})
export class ModifyFriendComponent {

  friendObj: Friend = new Friend();
  constructor(private friendService: FriendService, private router: Router) { }

  // calling service function inside local function
  modifyFriend(){
    this.friendService.modifyAFriend(this.friendObj);
    this.router.navigate(['/showallfriends']);
  }

}
