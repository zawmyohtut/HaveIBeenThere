import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1> {{ title }}</h1>
    <hibt-login></hibt-login>
  `
})

export class AppComponent { 
    title: string = "Have I Been There?";
}


