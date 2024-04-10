import { Component } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../Friend';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.css']
})
export class ViewFriendComponent {

  userName: string = "";
  friendObj : Friend = new Friend();
  constructor(private friendService: FriendService){}

  // calling service function inside local function
  findFriend(){
    this.friendObj = this.friendService.findAFriend(this.userName);
    if(this.friendObj.friendUserName == null){
      alert("Friend does not exist!");
    }
  }
}
