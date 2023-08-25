import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hartree';
  constructor(private router :Router){}
  goToDashboard() {
    this.router.navigate(['/home']);
  }
  goToAddconnection() {
    this.router.navigate(['/addcom']);}
  goToDisplay() {
    this.router.navigate(['/display']); 
  }
  goToNew(){
    window.location.href ='https://www.google.com/';
  }
}
