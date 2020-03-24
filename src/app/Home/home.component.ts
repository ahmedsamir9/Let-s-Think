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
}