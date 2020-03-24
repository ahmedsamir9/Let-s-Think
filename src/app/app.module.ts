import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router' ; 

// import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {signIn}from './signInPage/signIn.component' ; 
import { signUp } from './signUp/signUp.component';
import { navbar } from './navbar/navbar.component';
import { Home } from './Home/home.component';
import { aboutUs } from './aboutUs/AboutUs.component';
import {Game} from './Game/Game.component';
import {CommonModule} from '@angular/common' ; 
import {FormsModule} from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    signIn,
    signUp,
    aboutUs,
    navbar,
    Home,
    Game,
    // signUpService
  ],
  imports: [
    FormsModule,
    CommonModule, 
    HttpClientModule,
    // HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      {path :'signIn', component : signIn} ,
      {path :'signUp', component : signUp} ,
      {path :'Home', component : Home} ,
      {path :'AboutUs', component : aboutUs} ,
      {path :'Game', component : Game} ,
      {path :'', redirectTo :'Home' ,pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
