import { Component, OnInit } from '@angular/core';
import { FriendServiceService } from '../friend-service.service';
import { Router } from '@angular/router';
import { Friends } from '../Friends';

@Component({
  selector: 'app-create-friend',
  templateUrl: './create-friend.component.html',
  styleUrls: ['./create-friend.component.css']
})
export class CreateFriendComponent implements OnInit {
  constructor(private frnd:FriendServiceService,private router:Router){

  }
  ngOnInit(): void {
      
  }
  Newfriend:Friends=new Friends();
  LocalCreateNewFrnd(){
    this.frnd.createNewFriend(this.Newfriend)
    alert("One More new friend is added in your friend list..");
    this.router.navigate(['/AllFriends']);
  }
}
