import { Component} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent  {}
//  contacts: any[] = []; // Array to hold retrieved contacts

//  constructor() {
//    this.retrieveContacts(); // Call function to retrieve contacts in the constructor
  //}

  //retrieveContacts() {
    // Retrieve data from local storage
  //const storedContactsString = localStorage.getItem('contacts');

  //if (storedContactsString !== null) {
  //  const storedContacts = JSON.parse(storedContactsString);
    // Update the contacts array with retrieved data
    //this.contacts = storedContacts;
  //} else {
    //this.contacts = [];
  //}
//}
//}
//
document.addEventListener('DOMContentLoaded', () => {
  const contactTableBody = document.getElementById('contactTableBody');

  if (contactTableBody) {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('userDataList');
    if (storedData) {
      const userDataList: { 
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
      }[] = JSON.parse(storedData);
      
      // Loop through stored data and create table rows
      userDataList.forEach(userData => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = userData.firstName + ' ' + userData.lastName;
        const emailCell = document.createElement('td');
        emailCell.textContent = userData.email;
        const phoneCell = document.createElement('td');
        phoneCell.textContent = userData.phoneNumber;
        
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(phoneCell);
        
        contactTableBody.appendChild(row);
      });
    }
  }
});
