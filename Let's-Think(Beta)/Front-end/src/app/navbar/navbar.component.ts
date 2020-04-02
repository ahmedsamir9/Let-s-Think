import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ 
    selector :'navbar' ,
    templateUrl :'./navbar.component.html' ,
    styleUrls: ['./navbar.component.css']

})
export class navbar {
    logged = sessionStorage.getItem('login');
    constructor(private _router : Router){
    this.logged = sessionStorage.getItem('login');
    }
    logout()
    {
        sessionStorage.clear() ;
        this._router.navigateByUrl('AboutUs');
    }
}