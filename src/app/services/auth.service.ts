import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  email: string;
  password: string;
}

const USERS: User[] = [
  {email: 'user@email.com', password: '123456'}
];

@Injectable()
export class AuthService {

  users: User[] = USERS;
  session: boolean;

  constructor(private router: Router ) {
    this.session = false;
  }

  login(user: User) {
    const user_exist = this.users.find(u => u.email === user.email);

    if (user_exist && user_exist.password === user.password) {
      localStorage.setItem('user', JSON.stringify(user_exist));
      this.session = true;

      this.router.navigate(['/']);
    }

  }

  logout() {
    this.session = false;
    localStorage.removeItem('user');
    this.redirect();
  }

  redirect() {
    this.router.navigate(['/login']);
  }

  check() {
    if (localStorage.getItem('user') === null) {
      this.session = false;
      this.redirect();
    } else {
      this.session = true;
    }
  }

  getSession() {
    return this.session;
  }

  user() {
    return localStorage.getItem('user');
  }

}
