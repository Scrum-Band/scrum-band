import { EventEmitter, Injectable, Output } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogged: any;
  tokenAPI: any;

  constructor(private auth: Auth, public dialog: MatDialog) {
    this.auth.onAuthStateChanged((userLogged) => {
      if (userLogged) {
        this.userLogged = userLogged;
        localStorage.setItem('userLogged', JSON.stringify(userLogged));
      } else {
        this.cleanLocalStorage();
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

  isLoggedIn(): boolean {
    const userLogged = JSON.parse(localStorage.getItem('userLogged')!);
    return userLogged !== null && userLogged.emailVerified !== false ? true : false;
  }

  errorLogin(error: any) {
    this.cleanLocalStorage();
    console.log('errorCode', error.code, 'errorMessage', error.message);
  }

  successLogin(result: any, authProvider: any) {
    if (result) {
      const credential = authProvider.credentialFromResult(result);
      this.userLogged = result.user;
      localStorage.setItem('userLogged', JSON.stringify(this.userLogged));
      // Token para llamar a las APIS de google
      this.tokenAPI = credential.accessToken;
      localStorage.setItem('tokenAPI', this.tokenAPI);
    }
  }

  cleanLocalStorage() {
    localStorage.setItem('userLogged', 'null');
    localStorage.setItem('tokenAPI', 'null');
  }
}
