import { Component } from '@angular/core';

@Component({
  selector: 'app-addcom',
  templateUrl: './addcom.component.html',
  styleUrls: ['./addcom.component.css']
})
export class AddcomComponent {}
document.addEventListener('DOMContentLoaded', function() {
  const userForm = document.getElementById('userForm') as HTMLFormElement;
  const photoInput = document.getElementById('photo') as HTMLInputElement;

  userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    interface FormData {
      firstName: string;
      lastName: string;
      address: string;
      socialMedia: string;
      dob: string;
      phoneNumber: string;
      email: string;
      photoUrl: string;
  }
  
  const formData: FormData = {
    firstName: (document.getElementById('firstName') as HTMLInputElement).value,
    lastName: (document.getElementById('lastName') as HTMLInputElement).value,
    address: (document.getElementById('address') as HTMLInputElement).value,
    socialMedia: (document.getElementById('socialMedia') as HTMLInputElement).value,
    dob: (document.getElementById('dob') as HTMLInputElement).value,
    phoneNumber: (document.getElementById('phoneNumber') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    photoUrl: '',
  };

// Get existing data from local storage or initialize an empty array
let userDataList: FormData[] = [];
const storedData = localStorage.getItem('userDataList');

if (storedData) {
    userDataList = JSON.parse(storedData);
}

userDataList.push(formData);

// Store updated data in local storage
localStorage.setItem('userDataList', JSON.stringify(userDataList));

  alert('User data saved locally.');

  // Clear the form
  userForm.reset();
});
});
