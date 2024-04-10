import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFriendComponent } from './create-friend/create-friend.component';
import { ModifyFriendComponent } from './modify-friend/modify-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { ShowAllFriendsComponent } from './show-all-friends/show-all-friends.component';
import { FriendListPageComponent } from './friend-list-page/friend-list-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateFriendComponent,
    ModifyFriendComponent,
    ViewFriendComponent,
    ShowAllFriendsComponent,
    FriendListPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    CreateFriendComponent,
    ModifyFriendComponent,
    ViewFriendComponent,
    ShowAllFriendsComponent,
    FriendListPageComponent
  ]
})
export class ServiceRoutingModule { }
