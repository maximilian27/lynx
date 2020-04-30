import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

// TODO this in not properly implemted. Neither the logic, nor the design
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public faUser = faUser;
    public faKey = faKey;

    constructor(private service: LoginService) { }

    login() {
        this.service.loadToken();
    }

}
