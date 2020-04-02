import {Component} from '@angular/core'  ; 
declare var myfun:any;
@Component({
    templateUrl :'./Home.component.html' ,
    styleUrls: ['./Home.component.css']

})

export class Home {
    callfun(){
        myfun();
    }

     // Show buttons (riddles-equatoins) only when the user is already logged......
    flag:boolean = true; //Logically ((flag = false)),just written ((flag = true)) for showing them in designing step  
     toggel_buttons(){
     this.flag=!this.flag;
    }

}