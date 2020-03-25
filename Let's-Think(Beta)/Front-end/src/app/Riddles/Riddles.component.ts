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

      getRiddles():string{
          this.riddle=" Riddle Phrase";
          return this.riddle;
      }
      getAnswer():string{
        this.answer="Answer Answer Answer Answer Answer";
        return this.answer;
      }
      toggelshowed(){
        this.showed=true;
      }
      calculate_score(){
            //this.Score++; //---> just for test

          //+15 if correct
          //-10 if wrong
      }
}