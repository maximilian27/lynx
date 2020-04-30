import { Component } from '@angular/core';
import { LoginService } from './login.service';


// TODO this in not properly implemted. Neither the logic, nor the design
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private service: LoginService) { }

    login() {
        this.service.loadToken();
    }

}
