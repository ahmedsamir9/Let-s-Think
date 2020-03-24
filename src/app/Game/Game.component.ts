import {Component} from '@angular/core'; 
declare var myfun:any;

@Component({
    templateUrl :'./Game.component.html' ,
    styleUrls: ['./Game.component.css']

})
export class Game {
  // constructor(){}
  callfun(){
    myfun();
  }

}