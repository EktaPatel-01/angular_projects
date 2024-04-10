import { Component, OnInit } from '@angular/core';
import { FriendServiceService } from '../friend-service.service';
import { Router } from '@angular/router';
import { Friends } from '../Friends';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.css']
})
export class ViewFriendComponent implements OnInit{
  constructor(private frnd:FriendServiceService,private router:Router){

  }
ngOnInit(): void {
    
}
searchingFrnd!:string;
found!:Friends;

LocalViewFrnd(){
  this.found=this.frnd.meetSingleFriend(this.searchingFrnd)
  if(this.found==undefined){
    alert("Friend Not found");
    this.searchingFrnd="";
  }
}
}
