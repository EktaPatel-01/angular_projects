import { Component, OnInit } from '@angular/core';
import { FriendServiceService } from '../friend-service.service';
import { Router } from '@angular/router';
import { Friends } from '../Friends';

@Component({
  selector: 'app-modify-friend',
  templateUrl: './modify-friend.component.html',
  styleUrls: ['./modify-friend.component.css']
})
export class ModifyFriendComponent  implements OnInit{
  constructor(private frnd:FriendServiceService,private router:Router){

  }
ngOnInit(): void {
    
}
modFriendname:Friends=new Friends();

found!:boolean;

LocalModifyFrnd(){
  this.found=this.frnd.modifyOneFriend(this.modFriendname);
  if(this.found==true)
  alert("Friend Features Modified Successfully");
  else{
  alert("Friend Not found...")
}

this.router.navigate(['/AllFriends'])
}

}
