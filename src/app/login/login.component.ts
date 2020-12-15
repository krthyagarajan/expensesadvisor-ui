import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : User;
  constructor(private loginService: LoginService, private router: Router){

  }

  login(loginForm){
    this.loginService.validateUser(loginForm.username, loginForm.password)
        .subscribe( (user: User) => this.user = user);
    this.router.navigate(["home"]);
    
  }

}
