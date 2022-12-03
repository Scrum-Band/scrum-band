import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sb-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignComponent implements OnInit, AfterContentChecked {
  userLogged: any;

  constructor(private changeDetector: ChangeDetectorRef, private authService: AuthService) {
    this.authService.onAuthStateChanged.subscribe((userLogged) => {
      this.userLogged = userLogged;
    });
  }

  ngOnInit(): void {
    this.userLogged = this.authService.getUserLogged();
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  signIn() {
    this.authService.signIn();
  }
  signOut() {
    this.authService.signOut();
  }
}
