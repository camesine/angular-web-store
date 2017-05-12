import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user: User;
  error: string;

  constructor(private AuthService: AuthService) {
    this.user = { email: null, password: null };
  }

  ngOnInit() {
  }

  login() {
    if (!this.AuthService.login(this.user)) {
      this.error = 'La contraseña es incorrecta';
    }
  }


}
