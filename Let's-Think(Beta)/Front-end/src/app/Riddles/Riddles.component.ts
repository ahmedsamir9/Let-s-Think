import {Component} from '@angular/core'  ; 
//import { trigger, transition, style, animate } from '@angular/animations';
//import {expandCollapse} from './zippy.animation';
@Component({
    templateUrl :'./Riddles.component.html' ,
    styleUrls: ['./Riddles.component.css']

})

export class Riddles {
      riddle:string;
      answer:string;
      showed:boolean=false;
      Score:number=0;
      Choices:any=[];
  
  
       toggle_showed(){
        this.showed=true;
      }
      getRiddles():string{
          this.riddle=" Riddle Phrase";   //El value --> waiting from database
          return this.riddle;
      }
      getChoices():any{
        this.Choices=['Choice 1','Choice 2','Choice 3','Choice 4'];//El values --> waiting from database
        return this.Choices;
      }
      getAnswer():string{
        this.answer="Answer Answer Answer ";//El value --> waiting from database
        return this.answer; 
      }
}
