//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  userDataList: any[] = []; // Initialize as an empty array

  ngOnInit() {
    // Retrieve user data from local storage
    const storedData = localStorage.getItem('userDataList');
    if (storedData) {
      this.userDataList = JSON.parse(storedData);
    }

}

}