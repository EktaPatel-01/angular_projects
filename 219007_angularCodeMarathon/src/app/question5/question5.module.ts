import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFriendComponent } from './create-friend/create-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';
import { ModifyFriendComponent } from './modify-friend/modify-friend.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateFriendComponent,
    ViewFriendComponent,
    AllFriendsComponent,
    ModifyFriendComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    CreateFriendComponent,
    ViewFriendComponent,
    AllFriendsComponent,
    ModifyFriendComponent
  ]
})
export class Question5Module { }
