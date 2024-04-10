import { Component, OnInit } from '@angular/core';
import { FriendServiceService } from '../friend-service.service';
import { Router } from '@angular/router';
import { Friends } from '../Friends';

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.css']
})
export class AllFriendsComponent implements OnInit {
  constructor(private frnd:FriendServiceService){

  }
  allMyfriends!:Friends[];

ngOnInit(): void {
  this.allMyfriends=this.frnd.meetAllFriends();
  
}

}
