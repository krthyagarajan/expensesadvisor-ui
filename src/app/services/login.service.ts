import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL: string;
  

  constructor(private http: HttpClient) {
    this.loginURL = environment.backendserver + '/authenticateUser';
  }


  validateUser(username:string, password:string){
    let body = JSON.parse('{ "username" :"' + username + '", "password" : "'+ password + '"}');
    return this.http.post(this.loginURL, body);
  }

}
