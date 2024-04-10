import { Injectable, OnInit } from '@angular/core';
import { Friends } from './Friends';

@Injectable({
  providedIn: 'root'
})
export class FriendServiceService  {

  constructor() { }

  myFriends:Friends[]=[
    {friendName:"Astha",friendAge:21,friendCity:"Chattisghar"},
    {friendName:"Riya",friendAge:22,friendCity:"Bhopal"},
    {friendName:"Shubham",friendAge:22,friendCity:"Chattarpur"},
    {friendName:"Satyam",friendAge:22,friendCity:"Sagar"}
  ];

  meetAllFriends():Friends[] {
    console.log("Meeting with all friends...");
    return this.myFriends;
  }

  createNewFriend(newFriend:Friends){
    console.log("adding New Friend...")
    this.myFriends.push(newFriend);
  }
  meetSingleFriend(frndName:string):Friends{
    let foundFrnd!:Friends;
    for(let i=0;i<this.myFriends.length;i++){
      if (this.myFriends[i].friendName==frndName) {
        foundFrnd=this.myFriends[i];
        break;
      }
    }
    return foundFrnd;
  }
  modifyOneFriend(identity:Friends):boolean{
    
    console.log("Modify Function in Service Called")
    for(let friend of this.myFriends){
      if (friend.friendName==identity.friendName) {
        this.myFriends.splice(this.myFriends.indexOf(friend),1);
        this.myFriends.push(identity);
        return true;
      }
    }
    return false;
  
  }
}
