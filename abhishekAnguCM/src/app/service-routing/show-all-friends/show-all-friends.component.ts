import { Component } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../Friend';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-friends',
  templateUrl: './show-all-friends.component.html',
  styleUrls: ['./show-all-friends.component.css']
})
export class ShowAllFriendsComponent {

  friends!: Friend[];

  // injecting object of friend service
  constructor(private friendService: FriendService, private router: Router){
    // calling findAll function of service
    this.friends = this.friendService.findAllFriends();
  }

  
}
