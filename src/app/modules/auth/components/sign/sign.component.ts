import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sb-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  userSigned: boolean = false;

  ngOnInit(): void {
    this.userSigned = this.authService.isLoggedIn();
  }

  signIn() {
    this.authService.signIn();
  }
  signOut() {
    this.authService.signOut();
  }
}
