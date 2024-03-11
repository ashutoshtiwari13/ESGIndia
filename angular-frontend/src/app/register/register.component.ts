import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.user).subscribe(
      response => console.log('Registration successful', response),
      error => console.error('Registration failed', error)
    );
  }
}
