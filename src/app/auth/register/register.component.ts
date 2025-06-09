import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.style.css', './register.globals.css']
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
