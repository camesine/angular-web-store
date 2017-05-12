import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { AuthService, User } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService, AuthService]
})
export class AppComponent {

  user: boolean;

  constructor(private AuthService: AuthService) { }

  logout() {
    this.AuthService.logout();
  }

}
