import { EventEmitter, Injectable, Output } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogged: any;
  tokenAPI: any;

  @Output()
  onAuthStateChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private auth: Auth, public dialog: MatDialog, private router: Router) {
    this.auth.onAuthStateChanged((userLogged) => {
      if (userLogged) {
        this.userLogged = userLogged;
        this.onAuthStateChanged.emit(this.userLogged);
      } else {
        this.cleanLocalStorage();
        this.onAuthStateChanged.emit(null);
        this.router.navigate(['/www/home']);
      }
    });
  }

  signIn() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result) => {
        this.successLogin(result, GoogleAuthProvider);
      })
      .catch((error) => {
        this.errorLogin(error);
      });
  }
  signOut() {
    signOut(this.auth);
    this.cleanLocalStorage();
  }
  getUserLogged() {
    this.userLogged = JSON.parse(localStorage.getItem('userLogged')!);
    return this.userLogged;
  }
  isLoggedIn(): boolean {
    const userLogged = JSON.parse(localStorage.getItem('userLogged')!);
    return userLogged != null && userLogged != undefined ? true : false;
  }
  successLogin(result: any, authProvider: any) {
    if (result) {
      this.userLogged = result.user;
      localStorage.setItem('userLogged', JSON.stringify(this.userLogged));
    }
  }
  errorLogin(error: any) {
    this.cleanLocalStorage();
    console.error('errorCode', error.code, 'errorMessage', error.message);
  }
  cleanLocalStorage() {
    localStorage.setItem('userLogged', 'null');
    localStorage.setItem('tokenAPI', 'null');
  }
}
