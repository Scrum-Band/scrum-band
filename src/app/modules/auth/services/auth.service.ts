import { EventEmitter, Injectable, Output } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isSigned: Subject<boolean> = new Subject<boolean>();
  private _signedUser: Subject<any> = new Subject<any>();

  public isSigned(): Observable<boolean> {
    return this._isSigned.pipe();
  }
  public signedUser(): Observable<any> {
    return this._signedUser.pipe();
  }

  userLogged: any;
  @Output()
  onAuthStateChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private auth: Auth, public dialog: MatDialog) {
    this.auth.onAuthStateChanged((userLogged) => {
      if (userLogged) {
        this.userLogged = userLogged;
        this.onAuthStateChanged.emit(this.userLogged);
        this.successSignIn(userLogged);
      } else {
        this.cleanLocalStorage();
        this.onAuthStateChanged.emit(null);
      }
    });
  }

  signIn() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result) => {
        this.successSignIn(result.user);
      })
      .catch((error) => {
        this.errorSignIn(error);
      });
  }

  private successSignIn(user: any): void {
    this._isSigned.next(true);
    this._signedUser.next(user);
    this.userLogged = user;
    localStorage.setItem('userLogged', JSON.stringify(this.userLogged));
  }
  private errorSignIn(error: any): void {
    console.error('errorCode', error.code, 'errorMessage', error.message);
    this.cleanLocalStorage();
  }
  private cleanLocalStorage(): void {
    this._isSigned.next(false);
    this._signedUser.next(null);
    localStorage.setItem('userLogged', 'null');
  }

  signOut() {
    this._isSigned.next(false);
    this._signedUser.next(null);
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
}
