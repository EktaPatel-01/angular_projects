import { Injectable } from '@angular/core';
import { Friend } from './Friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  // Friends array
  friends : Friend[] = [
    {friendUserName:"sohanu9", friendName:"Sohan Ubale", friendAge: 23, friendGender:"Male", friendCity: "Shirdi"},
    {friendUserName:"hrushr11", friendName:"Hrushant Raghwarte", friendAge: 22, friendGender:"Male", friendCity: "Amravati"},
    {friendUserName:"abhir12", friendName:"Abhijeet Rathore", friendAge:23, friendGender:"Male", friendCity: "Kanpur"},
    {friendUserName:"abhin22", friendName:"Abhishek Nagarkar", friendAge:24, friendGender:"Male", friendCity: "Pune"},
    {friendUserName:"omc21", friendName:"Om Choudhary", friendAge: 23, friendGender:"Male", friendCity: "Nashik"},
  ]
  constructor() { }

  // add a friend
  addAFriend(friend: Friend){
    // checking if friend is already present in array
    for(let friendObj of this.friends){
      if(friendObj.friendUserName == friend.friendUserName){
        console.log(friendObj.friendUserName, friend.friendUserName)
        alert("Friend already added!");
        return;
      }  
    }
    this.friends.push(friend);
    alert("Friend added successfully!");
    
  }
  // view a friend
  findAFriend(friendUserName: string): Friend{
    let friendObj = new Friend();
    for(let friend of this.friends){
      if(friend.friendUserName == friendUserName){
        friendObj = friend;
        break;
      }
    }
    return friendObj;    
  }

  // view all friends
  findAllFriends(){
    return this.friends;
  }

  // modify a friend
  modifyAFriend(friendObj: Friend){
    for(let friend of this.friends){
      if(friend.friendUserName == friendObj.friendUserName){
        this.friends.splice(this.friends.indexOf(friend), 1);
        this.friends.push(friendObj);
        alert("Friend modified successfully!");
        return;
      }
    }

    // if for loop finishes iterations it means that friend was not found
    alert("Friend not found!");
  }
}
