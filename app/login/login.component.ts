import { Component } from '@angular/core';

export class Credentials {
    email: string;
    password: string;
}

@Component({
  selector: 'hibt-login',
  templateUrl: 'app/login/login.html'
})

export class LoginComponent { 

    credentials: Credentials = {
        email:'',
        password: ''
    }

}

