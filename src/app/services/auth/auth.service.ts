import { Injectable } from '@angular/core';
import {
  Auth,
  GithubAuthProvider,
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
  signInWithPopup,
  signOut,
  linkWithCredential,
  signInWithRedirect
} from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { SbSimpleDialogComponent } from '../../components/sb-simple-dialog/sb-simple-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, public dialog: MatDialog) {}

  private googleProvider = new GoogleAuthProvider();
  private githubProvider = new GithubAuthProvider();

  login(providerName: string) {
    let provider = this.getProviderByName(providerName);
    let authProvider = this.getAuthProviderByName(providerName);
    signInWithRedirect(this.auth, provider)
      .then((result) => {
        this.successLogin(result, authProvider);
      })
      .catch((error) => {
        this.errorLogin(error, authProvider, provider.providerId);
      });
  }

  errorLogin(error: any, authProvider: any, providerId: string) {
    const errorCode = error.code;
    if (errorCode == 'auth/account-exists-with-different-credential') {
      const result = error.customData;
      const rejectedCredential = authProvider.credentialFromResult(result);
      const email = result.email;
      this.showLinkAccountsDialog(authProvider, email, rejectedCredential, providerId);
      //this.linkProviders(authProvider, email, rejectedCredential);
    }
    const errorMessage = error.message;
    console.log('errorMessage', errorMessage);
  }

  showLinkAccountsDialog(authProvider: any, email: string, credentials: any, providerId: string): void {
    this.dialog
      .open(SbSimpleDialogComponent, {
        data: `link-accounts-message`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        this.linkProviders(authProvider, email, credentials, providerId);
      });
  }

  linkProviders(authProvider: any, email: string, credentials: any, providerId: string) {
    fetchSignInMethodsForEmail(this.auth, email)
      .then((methods) => {
        alert(JSON.stringify(methods));
        let methodPos = undefined;
        for (let index = 0; index < methods.length; index++) {
          const element = methods[index];
          if (element != providerId && methodPos == undefined) {
            methodPos = index;
          }
        }
        debugger;
        let fetchProvider = this.getProviderByName(methods[methodPos!]);
        signInWithRedirect(this.auth, fetchProvider).then((result: any) => {
          linkWithCredential(result.user, credentials)
            .then((usercred) => {
              // Success.
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        this.errorLogin(error, authProvider, providerId);
      });
  }

  successLogin(result: any, authProvider: any) {
    const credential = authProvider.credentialFromResult(result);
    if (credential) {
      const token = credential.accessToken;
      const user = result.user;
    }
  }

  getProviderByName(name: string) {
    let provider: any;
    switch (name) {
      case 'google.com':
        provider = this.googleProvider;
        break;
      case 'github.com':
        provider = this.githubProvider;
        break;
      default:
        throw new Error('Invalid login method');
    }
    return provider;
  }

  getAuthProviderByName(name: string) {
    let authProvider: any;
    switch (name) {
      case 'google.com':
        authProvider = GoogleAuthProvider;
        break;
      case 'github.com':
        authProvider = GithubAuthProvider;
        break;
      default:
        throw new Error('Invalid auth provider');
    }
    return authProvider;
  }

  logout() {
    signOut(this.auth);
  }
}
