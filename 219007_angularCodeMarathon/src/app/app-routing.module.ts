import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFriendsComponent } from './question5/all-friends/all-friends.component';
import { CreateFriendComponent } from './question5/create-friend/create-friend.component';
import { ModifyFriendComponent } from './question5/modify-friend/modify-friend.component';
import { ViewFriendComponent } from './question5/view-friend/view-friend.component';

const routes: Routes = [
  {path:'',component:AllFriendsComponent},
  {path:'AllFriends',component:AllFriendsComponent},
  {path:'CreateFriend',component:CreateFriendComponent},
  {path:'ModifyFriend',component:ModifyFriendComponent},
  {path:'ViewFriend',component:ViewFriendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
