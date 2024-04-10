import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegistrationModule } from './login-registration/login-registration.module';
import { FormsModule } from '@angular/forms';
import { LikeDislikeModule } from './like-dislike/like-dislike.module';
import { CompoundInterestModule } from './compound-interest/compound-interest.module';
import { FundTransferModule } from './fund-transfer/fund-transfer.module';
import { CreateFriendComponent } from './service-routing/create-friend/create-friend.component';
import { ViewFriendComponent } from './service-routing/view-friend/view-friend.component';
import { ShowAllFriendsComponent } from './service-routing/show-all-friends/show-all-friends.component';
import { ModifyFriendComponent } from './service-routing/modify-friend/modify-friend.component';
import { FriendListPageComponent } from './service-routing/friend-list-page/friend-list-page.component';
import { ServiceRoutingModule } from './service-routing/service-routing.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRegistrationModule, // <---- code marathon question 1 module
    LikeDislikeModule, // <---- code marathon question 2 module
    CompoundInterestModule, // <---- code marathon question 3 module
    FundTransferModule, // <---- code marathon question 4 module
    ServiceRoutingModule, // <---- code marathon question 5 module
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
