import {Component, OnInit} from '@angular/core';
import { signUpService } from './signup.service';
import { Router } from '@angular/router';

@Component({
    templateUrl :'./signUp.component.html',
    styleUrls: ['./signUp.component.css'],
})

export class signUp implements OnInit{

    constructor(private _signUpService: signUpService, private _router : Router){}
    name ="" ; 
    email ="" ; 
    password ="" ; 
    confirm_password ="" ; 
    submit:boolean = false;
    _error ; 
    register(){
        console.log("kuhdsfuhffdhlfdjlkfdjioudfoudfio") ;
        this.name  = (<HTMLInputElement>document.getElementById("name")).value;
        this.email  = (<HTMLInputElement>document.getElementById("email")).value;
        this.password  = (<HTMLInputElement>document.getElementById("password")).value;
        this.confirm_password  = (<HTMLInputElement>document.getElementById("Con_password")).value;
        if(this.name===null || this.email===null || this.password=="" || this.confirm_password=="")
        {
            alert('Please write your full data');
            return ; 
        } 
        else if(this.password != this.confirm_password)
        {
            alert('Please write identical passwords');
            return ; 
        }
        else {
            this.submit=true;
        }
        // console.log(this.submit);
        // console.log(name);
        // console.log(email);
        // console.log(password);
        // console.log(this.submit);
        this._signUpService.register(this.name, this.password, this.confirm_password, this.email) 
        .subscribe(
            data => {
                console.log(data) ;
                this._router.navigateByUrl('signIn');
            }, 
            error => {
                this._error = error ;
                console.error('Error', error)
            }
        );
    }
    ngOnInit() {}
   
}