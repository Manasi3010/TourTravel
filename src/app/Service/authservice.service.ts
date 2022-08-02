import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { SignInData } from '../Shared/model/SignInData';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  login({ username, password }: any): Observable<any> {
    if (username === 'manasi@gmail.com' && password === 'manasi123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
