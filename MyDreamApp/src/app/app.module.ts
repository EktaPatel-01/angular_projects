import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { CareerComponent } from './career/career.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  { path:'',component:HomeComponent},
  { path:'Home',component:HomeComponent},
  { path:'About',component:AboutUsComponent},
  { path:'Profile',component:ProfileComponent},
  { path:'Career',component:CareerComponent},
 ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProfileComponent,
    CareerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
