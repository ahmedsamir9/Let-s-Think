import {Component, Inject} from '@angular/core' ; 
import { signInService } from './signIn.service';
import { Router } from '@angular/router';
@Component({
    templateUrl :'./signIn.component.html' ,
    styleUrls: ['./signIn.component.css'],
    providers: [
        { provide: 'Window',  useValue: window }
      ]
})

export class signIn {
    
    constructor(@Inject('Window') private window: any , private _signInService: signInService, private _router : Router){}
    
    _error ; 
    email ="" ; 
    password ="" ; 
    
    login()
    {
        this.email  = (<HTMLInputElement>document.getElementById("email_id")).value;
        this.password  = (<HTMLInputElement>document.getElementById("password_id")).value;
        if(this.email == null || this.password == "" || this.email == "")
        {
            alert('Please write your full data');
            return ;
        } 
        this._signInService.login(this.password, this.email) 
        .subscribe(
            data => {
                console.log(data) ;
                sessionStorage.setItem("login" , "login") ;
                this._router.navigateByUrl('Game');
                return ; 
            }, 
            error => {
                this._error = error ;
                console.error('Error', error)
            }
        );
    }
    
    ngOnInit () {}
}