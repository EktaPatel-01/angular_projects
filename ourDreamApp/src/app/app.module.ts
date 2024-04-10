import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { MainComponent } from './main/main.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { FormsModule } from '@angular/forms';
import { ConditionComponent } from './condition/condition.component';
import { SwitchComponent } from './switch/switch.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { ForTestComponent } from './for-test/for-test.component';
import { AccountServiceComponent } from './account-service/account-service.component';
import { PayeeModule } from './payee/payee.module';
import { FlightsModule } from './flights/flights.module';
import { StatementsModule } from './statements/statements.module';
import { WeeklyStatementComponent } from './bank/statement/weekly-statement/weekly-statement.component';
import { CalculateAveragePipe } from './calculate-average.pipe';
import { SimpleInterestPipe } from './simple-interest.pipe';
import { ArrayComponent } from './array/array.component';
import { FundsTransferPageComponent } from './funds-transfer-page/funds-transfer-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { CareerComponent } from './career/career.component';
import { RouterModule, Routes } from '@angular/router';
import { SavingAccountComponent } from './saving-account/saving-account.component';
import { MaterialModule } from './material/material.module';
import { TamplateFormComponent } from './tamplate-form/tamplate-form.component';
import { ObserverDemoComponent } from './observer-demo/observer-demo.component';
import { HttpClientModule } from '@angular/common/http';

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
    HeaderComponent,
    FooterComponent,
    SideNavigationComponent,
    MainComponent,
    SimpleInterestComponent,
    ConditionComponent,
    SwitchComponent,
    LikeDislikeComponent,
    ForTestComponent,
    AccountServiceComponent,
    CalculateAveragePipe,
    SimpleInterestPipe,
    ArrayComponent,
    FundsTransferPageComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    ProfileComponent,
    CareerComponent,
    SavingAccountComponent,
    TamplateFormComponent,
    ObserverDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PayeeModule   ,  ///that is  created by using ng g m 
    FlightsModule,
    StatementsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
