import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFriendComponent } from './service-routing/create-friend/create-friend.component';
import { ViewFriendComponent } from './service-routing/view-friend/view-friend.component';
import { ShowAllFriendsComponent } from './service-routing/show-all-friends/show-all-friends.component';
import { ModifyFriendComponent } from './service-routing/modify-friend/modify-friend.component';
import { HomePageComponent } from './login-registration/home-page/home-page.component';
import { LikeDislikePageComponent } from './like-dislike/like-dislike-page/like-dislike-page.component';
import { CompoundInterestPageComponent } from './compound-interest/compound-interest-page/compound-interest-page.component';
import { FundTransferPageComponent } from './fund-transfer/fund-transfer-page/fund-transfer-page.component';
import { FriendListPageComponent } from './service-routing/friend-list-page/friend-list-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'addfriend', component: CreateFriendComponent},
  { path: 'viewfriend', component: ViewFriendComponent},
  { path: 'showallfriends', component: ShowAllFriendsComponent},
  { path: 'modifyfriend', component: ModifyFriendComponent},
  { path: 'login-registration', component: HomePageComponent},
  { path: 'like-dislike', component: LikeDislikePageComponent},
  { path: 'compound-interest', component: CompoundInterestPageComponent},
  { path: 'fund-transfer', component: FundTransferPageComponent},
  { path: 'service-routing', component: FriendListPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
