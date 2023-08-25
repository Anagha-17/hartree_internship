import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  title = 'hartree';
  people: { name: string; birthdate: string }[] = []; // Array to hold people data
  userDataList: any[] = []; // Initialize as an empty array

  constructor(private router :Router){
    const storedPeople = localStorage.getItem('people');
    if (storedPeople) {
      this.people = JSON.parse(storedPeople);
    }
  }
  goToDashboard() {
    this.router.navigate(['/home']);
  }
  goToAddconnection() {
    this.router.navigate(['/addcom']);}
  goToDisplay() {
    this.router.navigate(['/home']); 
  }
  goToNew(){
   // window.location.href ='https://www.google.com/';
   this.router.navigate(['/individual']); 
  }
  goToNew2(){
    window.location.href ='https://www.hartreeresearch.com/';
  }
}
