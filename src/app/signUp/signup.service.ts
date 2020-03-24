import { Injectable } from '@angular/core' ;
import {  HttpClient, HttpHeaders } from '@angular/common/http' ;
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
@Injectable({
    providedIn : 'root'
})

export  class signUpService{

    constructor(private _http: HttpClient) {}
    // constructor(private _http : HttpClient ){}
    _user : any ;
    _url = 'http://127.0.0.1:3000/api/signUp' ;
    // _httpHeaders = new HttpHeaders()
    // .set('Content-Type', 'application/json')
    // .set('Cache-Control', 'no-cache')
    // .set('Access-Control-Allow-Origin', 'http://localhost:4200')
    // ; 
    // _options = {
    //     headers: this._httpHeaders
    // }; 
    register(name : string , password : string, confirm_password : string, email : string)
    {
        this._user = {
            "email" : email, 
            "name" : name, 
            "password" : password, 
            "confirm_password" : confirm_password, 
        };
        // this._user = JSON.stringify(this._user) ;
        // // console.log(this._user);
        // //    return this._http.post<any>(this._url, this._user, this._options) ;     
        // let headers = new Headers();  
        // headers.append('Access-Control-Allow-Origin', '*') ; 
        // headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept") ;
        // // console.log(headers) ; 
        // return this._http.post(this._url, this._user, {
        //     headers: headers
        // });

        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

        return this._http.post('http://127.0.0.1:3000/api/signUp', JSON.stringify(this._user), {
         headers: headers
        })
        // .subscribe(data => {
        // console.log(data);
        // });

    }
}  


