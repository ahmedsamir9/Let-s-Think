import { Injectable } from '@angular/core' ;
import {  HttpClient, HttpHeaders } from '@angular/common/http' ;

@Injectable({
    providedIn : 'root'
})

export  class signInService{

    constructor(private _http: HttpClient) {}

    _user : any ;
    _url = 'http://127.0.0.1:3000/api/login' ;
    login(password : string, email : string)
    {
        this._user = {
            "email" : email, 
            "password" : password
        };

        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

        return this._http.post('http://127.0.0.1:3000/api/login', JSON.stringify(this._user), {
         headers: headers
        }, )
    }
}  


